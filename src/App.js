import "./app.scss";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import { useEffect, useState } from "react";
import { getVideosEndpoint } from "./utils/api";
import axios from "axios";

function App() {
  //passing the videoList to HomePage
  const [videoList, setVideoList] = useState(null);

  //Getting the raw video data from the API_URL
  useEffect(() => {
    axios
      .get(getVideosEndpoint)
      .then((response) => {
        setVideoList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // catch error
  if (!videoList) {
    return <h1>Didn't find videos...</h1>;
  }

  //defining the first video ID from the videoList
  const firstVideoId = videoList[0].id;

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Redirecting anytime if landed on the "/" path, to HomePage with either the default ID or the new ID */}
        <Route path="/" element={<Navigate to={`/videos/${firstVideoId}`} />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route
          path="/videos/:id"
          element={<HomePage videoList={videoList} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
