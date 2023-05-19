import "./CommentSection.scss";
import CommentDetails from "./CommentItems";
import CommentContent from "./CommentContent";
import comments from "../../data/video-details.json";
import { useState } from "react";

export default function CommentSection() {
  // input handleClick function
  const [userComments, setSelectedVideo] = useState(comments);

  return (
    <div>
      <main className="comment">
        <h1 className="comment__title" commentCount={comments.length} />
        {/* replace commentCount */}
        <div className="comment__name-container">
          <div className="comment__image"></div>
          <form className="comment__input-container">
            <div className="comment__input-text-container">
              <h5 className="comment__input-container--text">
                JOIN THE CONVERSATION
              </h5>
              {/* <CommentDetails
                name={comment.name}
                timestamp={comment.timestamp}
                comment={comment.comment}
              /> It might needs to be CommentContent */}
            </div>
            <div className="comment__button-container">
              <button className="comment__button">COMMENT</button>
            </div>
          </form>
        </div>
        <div className="comment__default-comment"> {CommentSection}</div>
      </main>
    </div>
  );
}
