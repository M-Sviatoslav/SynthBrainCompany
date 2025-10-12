import React from "react";
import "./aiMedia.css";
import Test2 from "/src/public/images/videos/Test2.mp4";

export default function SingleVideoShowcase() {
  return (
    <div className="single-video-page">
      <div className="single-video-container">
        <div className="horizontal-line"></div>

        <div className="single-video-box">
          <video
            src={Test2}
            controls
            playsInline
            className="single-video-element"
          />
        </div>
      </div>

      <div className="vertical-line"></div>

      <div className="single-text-box">
        <p>
          In this video, you can see our AI agent in action. This AI agent can
          retrieve information related to a specific topic (in this case, real
          estate), process it, and organize the data into a predefined table.
          Data can be entered manually or automated for continuous input. The
          agent can also interact with and modify both the table itself and its
          contents in multiple ways.
        </p>
      </div>
    </div>
  );
}
