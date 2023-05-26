import "./VideoDetails.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { getVideoEndpoint } from "../../utils/api";
import HomePage from "../../pages/HomePage/HomePage";

function VideoDetails({ currentVideo}) {


  const date = new Date(currentVideo.timestamp).toLocaleDateString();
  return (
    <section className="video">
      <h1 className="video__title">{currentVideo.title}</h1>
      <div className="video__details">
        <div className="content">
          <div className="content__data">
            <h4 className="content__data__h4">By {currentVideo.channel}</h4>
            <span className="content__data__date modifier">{date}</span>
          </div>
          <div className="content__counters modifier">
            <div className="content__counters__views">
              <img
                className="content__counters__views-image"
                src={viewsIcon}
                alt="views eye icon"
              />
              <span className="content__counters__views-count">
                {currentVideo.views}
              </span>
            </div>
            <div className="content__counters__likes">
              <img
                className="content__counters__likes-image"
                src={likesIcon}
                alt="likes heart icon"
              />
              <span className="content__counters__likes-count">
                {currentVideo.likes}
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className="video__description">{currentVideo.description}</p>
    </section>
  );
}

export default VideoDetails;
