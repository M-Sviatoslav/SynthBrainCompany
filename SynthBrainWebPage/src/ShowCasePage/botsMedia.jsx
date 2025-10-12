import React from "react";
import "./botsMedia.css";
import Test from "/src/public/images/videos/Test.mp4";
import Test1 from "/src/public/images/videos/Test1.mp4";

export default function VideoShowcase() {
  return (
    <div className="video-page">
      <div className="videos-container">
        <div className="horizontal-line"></div>

        <div className="video-box">
          <video
            src={Test}
            controls
            playsInline
            className="video-element"
          />
        </div>

        <div className="video-box">
          <video
            src={Test1}
            controls
            playsInline
            className="video-element"
          />
        </div>
      </div>

      <div className="vertical-line"></div>

      <div className="text-box">
        <p>
          These videos show our Telegram and Facebook (also Instagram) chatbots
          in use. Both work the same way — users tap buttons and instantly get
          the information they need. Fast, clear, and automated — perfect for
          customer support, product info, or lead generation.
        </p>
      </div>
    </div>
  );
}
