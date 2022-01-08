import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import React, {forwardRef} from 'react'
import "./Post.css";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import { ChatOutlined, SendOutlined, ShareOutlined } from "@mui/icons-material";
const Post = forwardRef (({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="postHeader">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="postInfo">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="postBody">
        <p>{message}</p>
      </div>

      <div className="postButtons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlined} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlined} title="Share" color="gray" />
        <InputOption Icon={SendOutlined} title="Send" color="gray" />
      </div>
    </div>
  );
})

export default Post;
