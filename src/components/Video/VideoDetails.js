import "./VideoDetails.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
// import the icons

// if (!video) {
//   return <h1>Not Found</h1>;
// }

function VideoDetails({ selectedVideo }) {
  const date = new Date(selectedVideo.timestamp).toLocaleDateString();
  return (
    <section className="video">
      <h1 className="video__title">{selectedVideo.title}</h1>
      <div className="video__details">
        <div className="content">
          <h4 className="content__h3">by {selectedVideo.channel}</h4>
          <div className="content__views">
            <img
              className="content__views__image"
              src={viewsIcon}
              alt="views eye icon"
            />
            <span className="content__views__count">{selectedVideo.views}</span>
          </div>
        </div>
        <div className="content">
          <span className="content__date">{date}</span>
          <div className="content__likes">
            <img
              className="content__likes__image"
              src={likesIcon}
              alt="likes heart icon"
            />
            <span className="content__likes__count">{selectedVideo.likes}</span>
          </div>
        </div>
      </div>
      <p className="video__description">{selectedVideo.description}</p>
    </section>
  );
}

export default VideoDetails;
