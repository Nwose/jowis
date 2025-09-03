import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

const services = [
  "Website Design & Development",
  "ICT Support",
  "HR Tech",
  "Network setup & Management",
  "IT Consulting",
  "Product Development",
  "Email Administration",
  "Others",
];

export const ContactForm = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const stars = useMemo(
    () =>
      Array.from({ length: 40 }).map((_, i) => {
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const endX = Math.random() * 100;
        const endY = Math.random() * 100;
        const duration = 8 + Math.random() * 12;
        return { id: i, startX, startY, endX, endY, duration };
      }),
    []
  );

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", "0ddd3f25-5615-448a-bed6-793e63679196"); // your Web3Forms access key
    formData.append("email", email);
    formData.append("message", message);
    formData.append("services", selectedServices.join(", "));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        setSuccess("Message sent successfully!");
        setEmail("");
        setMessage("");
        setSelectedServices([]);
      } else {
        setSuccess("Failed to send message. Please try again.");
        console.error("Web3Forms Error:", result);
      }
    } catch (error) {
      setSuccess("Something went wrong. Please try again.");
      console.error("Web3Forms Fetch Error:", error);
    } finally {
      setLoading(false);

      // Clear success/error message after 3 seconds
      setTimeout(() => {
        setSuccess(null);
      }, 3000);
    }
  };

  return (
    <div
      className="min-h-screen bg-[#1A002D] relative overflow-hidden text-white"
      id="contact"
    >
      {/* Background Moving Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map(({ id, startX, startY, endX, endY, duration }) => (
          <motion.div
            key={`star-${id}`}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            initial={{ x: `${startX}vw`, y: `${startY}vh`, opacity: 0 }}
            animate={{
              x: [`${startX}vw`, `${endX}vw`],
              y: [`${startY}vh`, `${endY}vh`],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Foreground Content */}
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex justify-center mb-16">
          <button className="border border-purple-400 text-purple-300 px-6 py-2 rounded-full hover:bg-purple-500 hover:text-white transition-all animate-pulse">
            Contact Us
          </button>
        </div>

        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 leading-tight">
            Let's build something great together.
          </h1>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Services Selection */}
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold mb-6">
                How can we support you today?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <button
                    key={service}
                    onClick={() => toggleService(service)}
                    className={`p-4 rounded-lg text-left transition-all duration-300 hover:scale-105 ${
                      selectedServices.includes(service)
                        ? "bg-purple-500 text-white"
                        : "border border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                Choose as many as possible
              </p>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden Access Key for Web3Forms */}
                <input
                  type="hidden"
                  name="access_key"
                  value="0ddd3f25-5615-448a-bed6-793e63679196"
                />

                {/* Email */}
                <div>
                  <label className="block font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block font-medium mb-2">
                    Tell us more about your project.
                  </label>
                  <textarea
                    name="message"
                    placeholder="Write it here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 resize-none"
                  />
                </div>

                {/* Hidden Services Field */}
                <input
                  type="hidden"
                  name="services"
                  value={selectedServices.join(", ")}
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-3 rounded-lg bg-purple-500 hover:bg-purple-600 transition-all animate-pulse"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>

              {success && (
                <p
                  className={`mt-4 ${
                    success.includes("successfully")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {success}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
