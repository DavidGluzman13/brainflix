import logo from "./logo.svg";
import "./app.scss";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/Video/VideoPlayer";
import VideoDetails from "./components/Video/VideoDetails";
import CommentSection from "./components/CommentSection/CommentSection";
import NextVideo from "./components/NextVideo/NextVideo";
import jsonVideosDetails from "./data/video-details.json";
import jsonVideos from "./data/videos.json";
import { useState } from "react";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(jsonVideosDetails[0]);

  //event handler function
  const changeSelectedVideo = (id) => {
    const newSelectedVideo = jsonVideosDetails.find((video) => {
      return video.id === id;
    });
    setSelectedVideo(newSelectedVideo);
  };

  // declare a state variable for future reference
  const [videoList, setVideoList] = useState(jsonVideos);

  // const handleClick = (event, videoId) => {
  //   event.preventDefault();
  //   changeSelectedVideo(videoId);
  // };

  const filteredVideos = videoList.filter((video) => {
    return video.id !== selectedVideo.id;
  });

  return (
    <>
      <Header />
      <VideoPlayer selectedVideo={selectedVideo} />
      <VideoDetails selectedVideo={selectedVideo} />
      <CommentSection />
      <NextVideo
        filteredVideos={filteredVideos}
        changeSelectedVideo={changeSelectedVideo}
      />
    </>
  );
}

export default App;
