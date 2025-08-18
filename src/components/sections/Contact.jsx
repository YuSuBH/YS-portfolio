import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message sent");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Somthing went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full max-w-md">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get in touch
          </h2>
          <form className="space-y-1.5" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              className="w-full bg-input border border-border rounded px-4 py-3 text-foreground transition focus:outline-none focus:border-primary focus:bg-primary/5"
              placeholder="Name..."
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              className="w-full bg-input border border-border rounded px-4 py-3 text-foreground transition focus:outline-none focus:border-primary focus:bg-primary/5"
              placeholder="example@gmail.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              className="w-full bg-input border border-border rounded px-4 py-3 text-foreground transition focus:outline-none focus:border-primary focus:bg-primary/5"
              placeholder="Your message..."
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 px-6 rounded font-medium transition relative overflow-hidden hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            >
              Send message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
