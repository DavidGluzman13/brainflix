import "./NextVideo.scss";
// import { getVideosEndpoint } from "../../utils/api";
import { Link } from "react-router-dom";

function NextVideo({ filteredVideos }) {
  return (
    <nav className="videoNav">
      <ul>
        <h4 className="videoNav__heading">NEXT VIDEOS</h4>
        <li href="/:videoId"></li>
        {filteredVideos.map((video) => {
          return (
            <Link to={`/videos/${video.id}`} key={video.id}>
              <li className="videoNav__li">
                {video.name}
                <img
                  src={video.image}
                  className="videoNav__li__image"
                  alt={video.title}
                ></img>
                <div className="videoNav__li__subdiv">
                  <h3>{video.title}</h3>
                  <p>{video.channel}</p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

export default NextVideo;
