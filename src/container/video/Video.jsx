import React from 'react';
import video from '../../assets/meal.mp4';

import './video.css'; // Import your CSS file

import { IoMdPlay } from "react-icons/io";

import { CiPause1 } from "react-icons/ci";

const Video = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={video}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <CiPause1 color="#fff" fontSize={30} />
          ) : (
            <IoMdPlay color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;