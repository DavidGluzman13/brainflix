// const API_KEY = "3c02ead6-0013-47b5-9159-73813d7fe7c7";
// const API_KEY_STRING = "?api_key=" + API_KEY;
// const API_URL = "https://project-2-api.herokuapp.com/";
const API_URL = "http://localhost:8080/";

export const getVideosEndpoint = `${API_URL}videos`;
export const getVideoEndpoint = (id) => `${API_URL}videos/${id}`;
// export const postVideoEndpoint = getVideosEndpoint;

// //full URL for getVideosEndpoint
// ("https://project-2-api.herokuapp.com/videos?api_key=3c02ead6-0013-47b5-9159-73813d7fe7c7");

// //full URL for getVideoEndpoint
// ("https://project-2-api.herokuapp.com/videos/993f950f-df99-48e7-bd1e-d95003cc98f1?api_key=3c02ead6-0013-47b5-9159-73813d7fe7c7");
