const API_KEY = "3c02ead6-0013-47b5-9159-73813d7fe7c7";
const API_KEY_STRING = "?api_key=" + API_KEY;
const API_URL = "https://project-2-api.herokuapp.com/";

export const getVideosEndpoint = `${API_URL}videos${API_KEY_STRING}`;
export const getVideoEndpoint = (id) =>
  `${API_URL}videos/${id}${API_KEY_STRING}`;
// export const postVideoEndpoint = getVideosEndpoint;

