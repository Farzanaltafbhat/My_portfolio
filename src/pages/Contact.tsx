import React, { useState } from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://portfolio-backend-dpg9.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message Sent ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send ❌");
      }
    } catch (err) {
      console.error(err);
      setStatus("Server error ❌");
    }
  };

  return (
    <section className="contact-section d-flex align-items-center">
      <div className="container">
        <h1 className="text-glow text-center mb-5">📩 Contact Me</h1>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="glass-card p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label text-glow">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control futuristic-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label text-glow">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control futuristic-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label text-glow">Message</label>
                  <textarea
                    name="message"
                    className="form-control futuristic-input"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-futuristic w-100">
                  🚀 Send Message
                </button>
              </form>
              {status && <p className="mt-3 text-center status-text">{status}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
