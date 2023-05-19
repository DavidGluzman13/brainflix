function NextVideo() {
  const handleClick = (event, videoId) => {
    event.preventDefault();
    changeSelectedPlant(videoId);
  };

  return (
    <nav className="videoNav">
      <ul>
        {videos.map((video) => {
          return (
            <li>
              <a
                onClick={(event) => {
                  handleClick(event, video.id);
                }}
                href="/"
              >
                {video.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NextVideo;
