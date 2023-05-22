import "./CommentItems.scss";

const CommentItems = ({ name, timestamp, comment }) => {
  return (
    <section className="review">
      <div className="review__image"></div>
      <div className="review__content">
        <div className="review__content__header">
          <h4 className="review__content__header__name">{name}</h4>
          <p className="review__content__header__timestamp">{timestamp}</p>
        </div>
        <p className="review__content__text">{comment}</p>
      </div>
    </section>
  );
};

export default CommentItems;
