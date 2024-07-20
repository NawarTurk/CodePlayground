import axios from "axios";
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
}); // get an instance of axios that we use to send requests

const getInvoices = () => api.get("/posts");

const deleteInvoice = (id) => api.delete(`/posts/${id}`);

const createInvoice = (invoice) => api.post("/posts", invoice);

const updateInvoice = (id, invoice) => api.put(`/posts/${id}`, invoice);

export { getInvoices, deleteInvoice, createInvoice, updateInvoice };
