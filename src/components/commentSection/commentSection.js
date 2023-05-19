import "./CommentSection.scss";
import comments from "../../data/video-details.json";
import CommentItems from "./CommentItems";
import avatarIcon from "../../assets/images/Mohan-muruge.jpg";

import { useState } from "react";

export default function CommentSection({ selectedVideo }) {
  return (
    <div>
      <main className="comment">
        <h3 className="comment__title">
          {selectedVideo.comments.length} Comments
        </h3>
        <div className="comment__container">
          <img className="comment__container-image" src={avatarIcon} alt="muhan murag" />
          <form className="comment__container-form">
            <div className="input">
              <label className="input__label">
                JOIN THE CONVERSATION
                <textarea
                  name="comment"
                  className="input__label-textarea"
                  placeholder="Add a new comment"
                />
              </label>
            </div>
            <button className="comment__container-form-button">COMMENT</button>
          </form>
        </div>
        <div className="comment-list">
          {" "}
          {selectedVideo.comments.map((comment) => {
            return (
              <CommentItems
                name={comment.name}
                comment={comment.comment}
                timestamp={comment.timestamp}
                key={comment.id}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
