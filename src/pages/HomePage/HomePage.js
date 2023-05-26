import VideoPlayer from "../../components/Video/VideoPlayer";
import VideoDetails from "../../components/Video/VideoDetails";
import CommentSection from "../../components/commentSection/CommentSection";
import NextVideo from "../../components/nextVideo/NextVideo";
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
    axios.get(getVideoEndpoint(videoId)).then((response) => {
      setVideo(response.data);
    });
  }, [videoId]);

  if (!currentVideo) {
    return <h1>LOADING...</h1>;
  }
  console.log(currentVideo);

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
          {/* <VideoDetails selectedVideo={selectedVideo} /> */}
          <CommentSection currentVideo={currentVideo} />
        </div>
        <NextVideo filteredVideos={filteredVideos} />
      </div>
    </>
  );
}

export default HomePage;
