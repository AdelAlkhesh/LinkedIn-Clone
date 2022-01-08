import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./SideBar.css";

export default function SideBar() {

  const user = useSelector(selectUser)

  const recentItem = (topic) => {
    return (
      <div className="sidebarRecentItem">
        <span className="sidebarHash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebarTop">
        <img
          src="https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebarAvatar" >
          {user.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebarStats">
        <div className="sidebarStat">
          <p>Who viewed you</p>
          <p className="sidebarStatNumber">2,543</p>
        </div>
        <div className="sidebarStat">
          <p>Post views</p>
          <p className="sidebarStatNumber">4000</p>
        </div>
      </div>
      <div className="sidebarBottom">
        <p>Recent</p>
        {recentItem("react")}
        {recentItem("programing")}
        {recentItem("design")}
        {recentItem("developer")}
        {recentItem("mern")}
      </div>
    </div>
  );
}
