const API_URL = "https://jsonplaceholder.typicode.com";

export async function getPosts() {
  try {
    const res = await fetch(`${API_URL}/posts`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .catch((error) => console.error(error, "Error fetching posts"));

    return res;
  } catch (error) {
    console.error(error, "Error getPosts");

    return [];
  }
}

export async function getPostById(id) {
  return Promise.all([
    fetch(`${API_URL}/posts/${id}`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .catch((error) => {
        console.error("Error fetching post data:", error);

        return null;
      }),
    fetch(`${API_URL}/users/${id}`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .catch((error) => {
        console.error("Error fetching user data:", error);

        return null;
      }),
    fetch(`${API_URL}/posts/${id}/comments`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .catch((error) => {
        console.error("Error fetching comments data:", error);

        return null;
      }),
  ])
    .then(([postData, userData, commentsData]) => {
      return {
        ...postData,
        author: userData,
        comments: commentsData,
      };
    })
    .catch((error) => {
      console.error("Error getPostById:", error);

      return null;
    });
}
