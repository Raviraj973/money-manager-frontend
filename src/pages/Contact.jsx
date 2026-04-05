import React, { useState } from "react";
import Header from "../components/Header.jsx";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Demo only)");
  };

  return (
    <div className="bg-white min-h-screen text-gray-800">

      <Header />

      <div className="max-w-4xl mx-auto my-10 px-4 fade-in-up delay-1">

        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <p className="text-gray-600 mb-6">
          Have questions or feedback? We'd love to hear from you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg h-32"
          />

          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg">
            Send Message
          </button>

        </form>

        <p className="text-gray-500 mt-6">
          Or reach us at: <b>support@moneymanager.com</b>
        </p>

      </div>
    </div>
  );
};

export default Contact;