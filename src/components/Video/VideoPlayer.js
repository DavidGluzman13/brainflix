import "./VideoPlayer.scss";

function VideoPlayer({ selectedVideo }) {
  return (
    <div className="video">
      <video
        src=""
        className="video__player"
        controls
        poster={selectedVideo.image}
      ></video>
    </div>
  );
}

export default VideoPlayer;
