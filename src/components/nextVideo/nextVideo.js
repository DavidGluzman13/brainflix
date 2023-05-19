function NextVideo({ filteredVideos, changeSelectedVideo }) {
  return (
    <nav className="videoNav">
      <ul>
        {filteredVideos.map((video) => {
          return (
            <li
              onClick={() => {
                changeSelectedVideo(video.id);
              }}
              href="/"
            >
              <h3>{video.title}</h3>
              <p>{video.channel}</p>
              <img src={video.image}
              ></img>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NextVideo;
