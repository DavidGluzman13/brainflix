import "./VideoPlayer.scss";

function VideoPlayer({ currentVideo }) {
  return (
    <div className="player tablet-player">
      <video
        src=""
        className="player__modifier"
        controls
        poster={currentVideo.image}
      ></video>
    </div>
  );
}

export default VideoPlayer;
