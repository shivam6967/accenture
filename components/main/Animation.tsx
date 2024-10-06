import React from "react";

const Animation = () => {
  return (
    <div id="animation">
      <div className="w-full flex items-start justify-center absolute mt-[-200px]">
        <div
          style={{
            border: "5px solid blue",
            borderRadius: "200px",
          }}
        >
          <video
            style={{
              width: "1000px",
            }}
            loop
            muted
            autoPlay
            playsInline
            preload="false"
            className="w-full h-auto"
            src="/backGround.mp4/"
          />
        </div>
      </div>
    </div>
  );
};

export default Animation;
