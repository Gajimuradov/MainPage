import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

export default instance;

export async function getPosts() {
  const response = await instance.get("/posts");
  return response.data;
}

export async function getPostById(id: number) {
  const response = await instance.get(`/posts/${id}`);
  return response.data;
}

export async function getCommentsByPostId(id: number) {
  const response = await instance.get(`/posts/${id}/comments`);
  return response.data;
}
