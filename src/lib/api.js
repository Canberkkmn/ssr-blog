import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

export async function getPosts() {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    
    return response.data.slice(0, 12);
  } catch (error) {
    console.error(error, "Error getPosts");
    return [];
  }
}

export async function getPostById(id) {
  try {
    const response = await axios.get(`${API_URL}/posts/${id}`);

    const userResponse = await axios.get(
      `${API_URL}/users/${response.data.userId}`
    );

    const commentsResponse = await axios.get(`${API_URL}/posts/${id}/comments`);

    return {
      ...response.data,
      author: userResponse.data,
      comments: commentsResponse.data,
    };
  } catch (error) {
    console.error(error, "Error getPostById");
    return null;
  }
}
