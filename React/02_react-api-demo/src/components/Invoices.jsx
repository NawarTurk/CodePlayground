import React, { useState, useEffect } from "react";
import { getInvoices, deleteInvoice } from "../services/invoiceService";

export default function Invoice() {
  const [invoices, setInvoices] = useState([]);

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
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            <h2>{invoice.title}</h2>
            <p>{invoice.body}</p>
            <button onClick={() => handleDelete(invoice.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
