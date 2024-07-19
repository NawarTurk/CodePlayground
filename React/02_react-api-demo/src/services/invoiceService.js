import axios from "axios";
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
}); // get an instance of axios that we use to send requests

const getInvoices = () => api.get("/posts");

const deleteInvoice = (id) => api.delete(`/posts/${id}`);

export { getInvoices, deleteInvoice };
