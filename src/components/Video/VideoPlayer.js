import "./VideoPlayer.scss";

function VideoPlayer({ selectedVideo }) {
  return (
    <div className="player tablet-player">
      <video
        src=""
        className="player__modifier"
        controls
        poster={selectedVideo.image}
      ></video>
    </div>
  );
}

export default VideoPlayer;
