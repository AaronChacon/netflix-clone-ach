import React, { useEffect, useState } from "react";
import "./Plans.css";
import db from "../firebase.config";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/slices/userSlice";
import { loadStripe } from "@stripe/stripe-js";

const Plans = () => {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    const customersCollectionRef = collection(db, "customers");
    const customerDocRef = doc(customersCollectionRef, user?.user?.uid);
    const subscriptionCollectionRef = collection(
      customerDocRef,
      "subscriptions"
    );

    getDocs(subscriptionCollectionRef).then((querySnapshot) => {
      querySnapshot.forEach(async (subscriptionDoc) => {
        setSubscription({
          role: subscriptionDoc.data().role,
          current_period_end: subscriptionDoc.data().current_period_end.seconds,
          current_period_start:
            subscriptionDoc.data().current_period_start.seconds,
        });
      });
    });
  }, [user, user?.user?.uid]);

  useEffect(() => {
    const fetchPlans = async () => {
      // Version 9 - Firebase
      const productsCollectionRef = collection(db, "products");
      const q = query(productsCollectionRef, where("active", "==", true));

      getDocs(q).then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceCollectionRef = collection(productDoc.ref, "prices");
          const priceSnapshot = await getDocs(priceCollectionRef);
          priceSnapshot.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });

        setProducts(products);
      });
    };

    fetchPlans();

    return () => {};
  }, []);

  const loadCheckout = async (priceId) => {
    const customersCollectionRef = collection(db, "customers");
    const customerDocRef = doc(customersCollectionRef, user.user?.uid);
    const checkoutSessionsCollectionRef = collection(
      customerDocRef,
      "checkout_sessions"
    );

    const docRef = await addDoc(checkoutSessionsCollectionRef, {
      price: priceId,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });

    onSnapshot(docRef, async (snap) => {
      const { error, sessionId } = snap.data();

      if (error) {
        // show an error to your customer and
        // inspect your cloud function logs in the firebase console.
        alert(`An error occured: ${error.message}`);
      }

      if (sessionId) {
        // redirect your customer to the checkout session.
        const stripe = await loadStripe(process.env.REACT_APP_STRIPE_KEY);

        stripe.redirectToCheckout({
          sessionId,
        });
      }
    });
  };

  return (
    <div className="plans">
      {subscription && (
        <p>
          Renewal date:{" "}
          {new Date(
            subscription?.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
      )}

      {Object.entries(products).map(([productId, productData]) => {
        const isCurrentPackage = productData.name?.includes(subscription?.role);

        return (
          <div
            key={productId}
            className={`plans__item ${
              isCurrentPackage ? "plans__item--disable" : ""
            }`}
          >
            <div className="plans__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>

            <button onClick={() => loadCheckout(productData?.prices?.priceId)}>
              {isCurrentPackage ? "Current Package" : "Subscribe"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Plans;
