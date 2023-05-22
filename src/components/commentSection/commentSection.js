import "./CommentSection.scss";
import comments from "../../data/video-details.json";
import CommentItems from "./CommentItems";
import avatarIcon from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/icons/add_comment.svg";

import { useState } from "react";

export default function CommentSection({ selectedVideo }) {
  return (
    <div>
      <main className="comment">
        <h4 className="comment__title">
          {selectedVideo.comments.length} Comments
        </h4>
        <div className="comment__container">
          <img
            className="comment__container-image"
            src={avatarIcon}
            alt="Mohan-muruge looking left"
          />
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
              <button className="input__button">
                <img
                  className="input__button__icon"
                  src={commentIcon}
                  alt="upload-icon"
                />
                <p className="input__button__text">COMMENT</p>
              </button>
            </div>
          </form>
        </div>
        <div className="comment-list">
          {" "}
          {selectedVideo.comments.map((comment) => {
            const date = new Date(comment.timestamp).toLocaleDateString();
            return (
              <CommentItems
                name={comment.name}
                comment={comment.comment}
                timestamp={date}
                key={comment.id}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
