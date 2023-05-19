import "./NextVideo.scss";

function NextVideo({ filteredVideos, changeSelectedVideo }) {
  return (
    <nav className="videoNav">
      <ul>
        {filteredVideos.map((video) => {
          return (
            <li
              className="videoNav__li"
              onClick={() => {
                changeSelectedVideo(video.id);
              }}
              href="/"
            >
              <h3>{video.title}</h3>
              <p>{video.channel}</p>
              <img src={video.image} className="videoNav__li--image"></img>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NextVideo;
