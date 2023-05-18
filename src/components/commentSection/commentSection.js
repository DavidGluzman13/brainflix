import "./commentSection.scss";
import comments from "../../data/video-details.json";
import { useState } from "react";

//comment counter that will change according to the amount of comments
function cmtCount(props) {
  return (
    <div>
      <span>{props.commentCount ?? 0} Comments</span>
    </div>
  );
}

export default function CommentSection() {
  const [selectedCommentID, setSelectedCommentID] = useState(null);

  const handleSelectedComment = (id) => {
    if (id === selectedCommentID) {
      setSelectedCommentID(null);
    } else {
      setSelectedCommentID(id);
    }
  };

  //Function start

  return (
    <div>
      <main className="comment">
        <h1 className="comment__title" commentCount={comments.length} />
        <div className="comment__name-container">
          <div className="comment__image"></div>
          <form className="comment__input-container">
            <div className="comment__input-text-container">
              <h5 className="comment__input-container--text">
                JOIN THE CONVERSATION
              </h5>
              <textarea
                className="comment__text-container comment__text-container--one"
                name="name"
                rows="10"
                cols="50"
                placeholder="Add a new comment"
              ></textarea>
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
