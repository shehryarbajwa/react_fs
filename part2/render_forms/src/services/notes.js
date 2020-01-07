import axios from "axios";
const baseUrl = "http://localhost:3001/notes";

//Instead of returning a promise, we return the promise data

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const create = noteObject => {
  const request = axios.post(baseUrl, noteObject);
  return request.then(response => response.data);
};

const update = (id, noteObject) => {
  const request = axios.put(`${baseUrl}/${id}`, noteObject);
  return request.then(response => response.data);
};

export default {
  getAll,
  create,
  update
};
