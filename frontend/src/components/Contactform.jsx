import { useState } from "react";
import { Send, CheckCircle, AlertTriangle, Info } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingSubmit(true);
    setStatus("");

    const { name, email, message } = form;
    if (!name || !email || !message) {
      setStatus("⚠️ All fields are required");
      setLoadingSubmit(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setStatus(data.message || "Message sent successfully");

      if (data.success) {
        setForm({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send message. Please try again.");
    }

    setLoadingSubmit(false);
  };

  const renderStatus = () => {
    if (!status) return null;

    const baseClass = "mt-4 p-4 rounded-xl font-semibold flex items-center gap-2 shadow-md";
    if (status.toLowerCase().includes("success")) {
      return (
        <div className={`${baseClass} bg-green-100 text-green-800 border border-green-300`}>
          <CheckCircle className="w-5 h-5 text-green-600" />
          {status}
        </div>
      );
    }
    if (status.startsWith("⚠️") || status.startsWith("❌")) {
      return (
        <div className={`${baseClass} bg-red-100 text-red-800 border border-red-300`}>
          <AlertTriangle className="w-5 h-5 text-red-600" />
          {status}
        </div>
      );
    }
    return (
      <div className={`${baseClass} bg-blue-100 text-blue-800 border border-blue-300`}>
        <Info className="w-5 h-5 text-blue-600" />
        {status}
      </div>
    );
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold text-[#0a1f44] mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#00809D] focus:outline-none transition-colors"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-[#0a1f44] mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#00809D] focus:outline-none transition-colors"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-[#0a1f44] mb-2">Your Message</label>
          <textarea
            name="message"
            placeholder="Tell us how we can help you..."
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#00809D] focus:outline-none transition-colors resize-none"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loadingSubmit}
          className={`w-full py-4 rounded-xl text-white font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
            !loadingSubmit
              ? "bg-[#00809D] hover:bg-[#006b84] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          <Send className="w-5 h-5" />
          {loadingSubmit ? "Sending..." : "Send Message"}
        </button>

        {/* Status */}
        {renderStatus()}
      </form>
    </div>
  );
}
