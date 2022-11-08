import React from "react";
import style from "../../../styles/Home.module.css";

const header = () => {
  return (
    <div className={style.anythinglisting4}>
      <ul>
        <li>Video Analysis</li>
        <li>
          List Videos
          <ul>
            <li>User Videos</li>
            <li>Brand Videos</li>
            <li>Tutorial</li>
            <li>Youtube Crawler</li>
          </ul>
        </li>
        <li>Upload a Video</li>
        <li>Download Code</li>
        <li>Content Restrictions</li>
      </ul>
    </div>
  );
};
export default header;
