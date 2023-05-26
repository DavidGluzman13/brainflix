import "./app.scss";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import { useEffect, useState } from "react";
import { getVideosEndpoint } from "./utils/api";
import axios from "axios";

function App() {
  const [videoList, setVideoList] = useState(null);

  useEffect(() => {
    axios.get(getVideosEndpoint).then((response) => {
      setVideoList(response.data);
    });
  }, [videoList]);

  if (!videoList) {
    return <h1>Didn't find videos...</h1>;
  }

  const firstVideoId = videoList[0].id;

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Navigate to={`/videos/${firstVideoId}`} />}
          />
          <Route path="/upload" element={<UploadPage />} />
          <Route
            path="/videos/:id"
            element={<HomePage videoList={videoList} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
