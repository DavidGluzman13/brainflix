import Header from "../../components/Header/Header";
import VideoPlayer from "../../components/Video/VideoPlayer";
import VideoDetails from "../../components/Video/VideoDetails";
import CommentSection from "../../components/commentSection/CommentSection";
import NextVideo from "../../components/nextVideo/NextVideo";
import "./HomePage.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getVideosEndpoint } from "../../utils/api";

export default function HomePage() {
  const { videoID } = useParams();
  const [firstVideoId, setFirstVideoId] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  //get first videi when video's id param is missing
  useEffect(() => {
    if (!videoID) {
      axios.get(getVideosEndpoint).then((response) => {
        setFirstVideoId(response.data[0].id);
      });
    }
  }, [videoId]);

  const currentVideoId = videoId || firstVideoId;

  if (!currentVideoId) {
    return <h1>LOADING...</h1>;
  }

  //event handler function
  const changeSelectedVideo = (id) => {
    const newSelectedVideo = videos.find((video) => {
      return video.id === id;
    });
    setSelectedVideo(newSelectedVideo);
  };

  // declare a state variable for future reference
  const [videoList, setVideoList] = useState(videos);

  //TODO: Remove selected video from videos before
  // passing to <NextVideo>
  const filteredVideos = videoList.filter((video) => {
    //videos was originally videoList
    return video.id !== selectedVideo.id;
  });

  return (
    <>
      <VideoPlayer className="VideoPlayer" selectedVideo={selectedVideo} />
      

      <div className="menu">
        <div className="menu__desktop-div">
          <VideoDetails
            currentVideoId={currentVideoId}

            // name={selectedVideo.name}
            // image={selectedVideo.image_url}
            // type={selectedVideo.type}
          />
          {/* <VideoDetails selectedVideo={selectedVideo} /> */}
          <CommentSection selectedVideo={selectedVideo} />
        </div>
        {/* <NextVideo
          filteredVideos={filteredVideos}
          changeSelectedVideo={changeSelectedVideo}
        /> */}
        <NextVideo
        videos={filteredVideos}
        changeSelectedVideo={changeSelectedVideo}
        currentVideoId={currentVideoId}
      />
      </div>
    </>
  );
}

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
