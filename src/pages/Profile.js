import React from "react";
import "./Profile.css";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/slices/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";
import Plans from "../components/Plans";

const ProfilePage = () => {
  const data = useSelector(selectUser);

  return (
    <div className="profile">
      <Navbar />

      <div className="profile__body">
        <h1>Edit Profile</h1>

        <div className="profile__info">
          <img
            className="profile__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />

          <div className="profile__details">
            <h2>{data?.user?.email}</h2>
            <div className="profile__plans">
              <h3>Plans</h3>

              <Plans />

              <button onClick={() => signOut(auth)} className="profile__sigOut">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
