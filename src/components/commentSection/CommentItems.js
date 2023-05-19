import "./CommentItems.scss";

const CommentItems = ({ name, timestamp, comment }) => {
  return (
    <section className="comment-details">
      <div className="comment-details__image"></div>
      <div>
        <h4 className="comment-details__name">{name}</h4>
        <p className="comment-details__timestamp">{timestamp}</p>
      </div>
      <p className="comment-details__comment">{comment}</p>
    </section>
  );
};

export default CommentItems;
