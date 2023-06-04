import VideoPlayer from "../../components/Video/VideoPlayer";
import VideoDetails from "../../components/Video/VideoDetails";
import CommentSection from "../../components/CommentSection/commentSection";
import NextVideo from "../../components/NextVideo/NextVideo";
import "./HomePage.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { getVideoEndpoint } from "../../utils/api";

function HomePage({ videoList }) {
  const param = useParams();
  const videoId = param.id;
  //passing to all children
  const [currentVideo, setVideo] = useState(null);

  useEffect(() => {
    axios
      .get(getVideoEndpoint(videoId))
      .then((response) => {
        setVideo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [videoId]);

  if (!currentVideo) {
    return <h1>LOADING...</h1>;
  }

  // passing to <NextVideo>
  const filteredVideos = videoList.filter((video) => {
    return video.id !== videoId;
  });

  return (
    <>
      <VideoPlayer className="VideoPlayer" currentVideo={currentVideo} />
      <div className="menu">
        <div className="menu__desktop-div">
          <VideoDetails currentVideo={currentVideo} />
          <CommentSection comments={currentVideo.comments} />
        </div>
        <NextVideo filteredVideos={filteredVideos} />
      </div>
    </>
  );
}

export default HomePage;
