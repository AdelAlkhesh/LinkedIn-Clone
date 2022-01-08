import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

export default function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="headerLeft">
        <img
          src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1641593494~hmac=d2ef72c51f3103f32178340e538c04e6"
          alt=""
          className="headerLeftImg"
        />

        <div className="headerSearch">
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="headerRight">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={true} title="me" onClick={logoutOfApp} />
      </div>
    </div>
  );
}
