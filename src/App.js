import logo from "./logo.svg";
import "./app.scss";
import videos from "./data/video-details.json";
import Header from "./components/Header/Header";
import CommentSection from "./components/CommentSection/CommentSection";
import { useState } from "react";
import NextVideo from "./components/NextVideo/NextVideo";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  const changeSelectedVideo = (id) => {
    const newSelectedVideo = videos.find((video) => {
      return video.id === id;
    });
    setSelectedVideo(newSelectedVideo);
  };

  const filteredVideos = videos.filter((video) => {
    return video.id !== selectedVideo.id;
  });

  return (
    <>
      <Header />
      <CommentSection />
      <NextVideo
        videos={filteredVideos}
        changeSelectedVideo={changeSelectedVideo}
      />
    </>
  );
}

export default App;
