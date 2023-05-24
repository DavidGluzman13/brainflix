import "./app.scss";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/Video/VideoPlayer";
import VideoDetails from "./components/Video/VideoDetails";
import CommentSection from "./components/commentSection/CommentSection";
import NextVideo from "./components/nextVideo/NextVideo";
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

  const filteredVideos = videoList.filter((video) => {
    return video.id !== selectedVideo.id;
  });

  return (
    <>
      <BrowserRouter>
        <Header />
        <Router>
          <Route path="/" element={<HomePage />} />
          <Route path="upload" element={<UploadPage  />} />
          <Route path="/videos/:videoId" element={<HomePage />} />
        </Router>
      </BrowserRouter>
    </>
  );
}

export default App;

{
  /* <Header />
      <VideoPlayer className="VideoPlayer" selectedVideo={selectedVideo} />
      <div className="menu">
        <div className="menu__desktop-div">
          <VideoDetails selectedVideo={selectedVideo} />
          <CommentSection selectedVideo={selectedVideo} />
        </div>
        <NextVideo
          filteredVideos={filteredVideos}
          changeSelectedVideo={changeSelectedVideo}
        />
      </div> */
}
