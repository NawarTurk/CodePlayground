import React, { useState, useEffect } from "react";
import {
  getInvoices,
  deleteInvoice,
  updateInvoice,
} from "../services/invoiceService";
import InvoiceForm from "./InvoiceForm";

export default function Invoice() {
  const [invoices, setInvoices] = useState([]);
  const [editingInvoice, setEditingInvoice] = useState(null);

  const editInvoice = (invoice) => setEditingInvoice(invoice);

  useEffect(() => {
    // Calling the getInvoices function which sends an HTTP request to the API
    getInvoices()
      .then((result) => {
        // Once the promise (HTTP request) is fulfilled, update the state with the fetched data
        setInvoices(result.data);
      })
      .catch((err) => {
        // If there is an error, log it to the console
        // Removing this catch block will result in an uncaught error
        console.error(err);
      });
    // The empty dependency array means this effect runs only once, when the component mounts
  }, []);

  const handleDelete = (id) => {
    // Calling the deleteInvoice function which sends an HTTP request to delete the invoice
    deleteInvoice(id).then((result) => {
      // Update the state to remove the deleted invoice from the list
      setInvoices(invoices.filter((invoice) => invoice.id !== id));
    });
    // Note: It takes time to delete the invoice, you can disable the delete button until you get the response and then enable it
  };

  return (
    <div>
      <h1>Invoices</h1>
      <InvoiceForm
        invoices={invoices}
        setInvoices={setInvoices}
        editingInvoice={editingInvoice}
        setEditingInvoice={setEditingInvoice}
      />
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            <h2>{invoice.title}</h2>
            <p>{invoice.body}</p>
            <button onClick={() => editInvoice(invoice)}>Edit</button>
            <button onClick={() => handleDelete(invoice.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
