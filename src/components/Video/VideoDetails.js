import "./VideoDetails.scss";
// import the icons

// if (!video) {
//   return <h1>Not Found</h1>;
// }

function VideoDetails({ selectedVideo }) {
  const date = new Date(selectedVideo.timestamp).toLocaleDateString();
  return (
    <section className="video">
      <h1>{selectedVideo.title}</h1>
      <div className="video__details">
        <div className="video__details__div">
          <span>
            <h3 className="video__details--h3">by {selectedVideo.channel}</h3>
          </span>
          <span className="video__details--span">{selectedVideo.views}</span>
        </div>
        <div>
          <span className="video__details--span">{date}</span>
          <span className="video__details--span">{selectedVideo.likes}</span>
        </div>
      </div>
    </section>
  );
}

export default VideoDetails;
