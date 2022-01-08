import React from "react";
import "./HeaderOption.css";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
export default function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOptionIcon" />}
      {avatar && (
        <Avatar src={user?.photoUrl} className="headerOptionIcon">
          {user?.displayName[0]}
        </Avatar>
      )}
      <h3 className="headerOptionTitle">{title}</h3>
    </div>
  );
}
