import React, { useState, useEffect } from "react";
import { createInvoice, updateInvoice } from "../services/invoiceService.js";

export default function InvoiceForm({
  invoices,
  setInvoices,
  editingInvoice,
  setEditingInvoice,
}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (editingInvoice) {
      setTitle(editingInvoice.title);
      setBody(editingInvoice.body);
    } // ...
  }, [editingInvoice]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingInvoice) {
      editInvoice();
    } else {
      addInvoice();
    }
    setTitle("");
    setBody("");
    setEditingInvoice(null);
  };
  const addInvoice = () => {
    createInvoice({ title, body })
      .then((response) => setInvoices([response.data, ...invoices]))
      .catch((err) => {
        console.error(err);
      });
  };

  const editInvoice = () => {
    updateInvoice(editingInvoice.id, { title, body })
      .then((response) => {
        setInvoices(
          invoices.map((invoice) =>
            invoice.id === editingInvoice.id ? response.data : invoice
          )
        );
      })
      .catch((err) => console.error(err));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>Title</div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div>Body </div>
      <textarea
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <div>
        <button type="submit">
          {editingInvoice ? "Edit Post" : "Add Post"}
        </button>
      </div>
    </form>
  );
}
