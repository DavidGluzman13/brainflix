import "./NextVideo.scss";

function NextVideo({ filteredVideos, changeSelectedVideo }) {
  return (
    <nav className="videoNav">
      <ul>
        <h3 className="videoNav__heading">NEXT VIDEOS</h3>
        {filteredVideos.map((video) => {
          return (
            <li
              className="videoNav__li"
              onClick={() => {
                changeSelectedVideo(video.id);
              }}
              href="/"
              // key="id"
              // // fix the key id with demo slides
            >
              <img src={video.image} className="videoNav__li__image"></img>
              <div className="videoNav__li__subdiv">
                <h3>{video.title}</h3>
                <p>{video.channel}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NextVideo;
