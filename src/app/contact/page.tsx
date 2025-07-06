// app/contact/page.tsx or pages/contact.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null); // 'success' or 'error'

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    try {
      // In a real application, you would send this data to your backend API
      // Example: const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      // const data = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay

      // Assuming success
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
    } catch (error) {
      console.error("Failed to submit form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="https://placehold.co/1920x1080/1a202c/e2e8f0?text=Contact+ScentEcho+Hero" // Placeholder image
          alt="Contact ScentEcho Hero"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="absolute inset-0 z-0 opacity-50 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent z-10"></div>
        <div className="relative z-20 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-4 text-orange-400 drop-shadow-lg">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto">
            We&#39;d love to hear from you. Reach out with any questions or
            feedback.
          </p>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-xl border border-gray-800">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
              Reach Out to Us
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Whether you have a question about our fragrances, need assistance
              with an order, or just want to share your ScentEcho experience,
              our team is here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 text-orange-400 flex-shrink-0 mt-1 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-white">Email Us</h3>
                  <p className="text-gray-300">
                    <a
                      href="mailto:support@scentecho.com"
                      className="text-orange-400 hover:underline"
                    >
                      support@scentecho.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 text-orange-400 flex-shrink-0 mt-1 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.334l-.955-.116a48.783 48.783 0 0 1-4.124 1.802 48.324 48.324 0 0 1-3.178-.544c-1.396-.447-2.743-.92-4.053-1.397M16.5 18.75h-2.25m2.25 0a1.5 1.5 0 0 0 1.5-1.5v-2.25m-2.25 3.75v-2.25m0 0a1.5 1.5 0 0 1 1.5-1.5h2.25m-2.25 3.75c-1.125 0-2.25-.573-2.25-1.5s1.125-1.5 2.25-1.5m0 0h.008v.008H16.5v-.008Zm0 0H12m-2.25 3.75h-2.25m2.25 0a1.5 1.5 0 0 0 1.5-1.5v-2.25m-2.25 3.75v-2.25m0 0a1.5 1.5 0 0 1 1.5-1.5h2.25m-2.25 3.75c-1.125 0-2.25-.573-2.25-1.5s1.125-1.5 2.25-1.5m0 0H7.5m9-6h-3.75m-9.75-3.75h-.008v.008H2.25V4.5ZM12 6.75V4.5m-2.25.75h4.5m-4.5 0a1.5 1.5 0 0 0-1.5 1.5v7.5m-2.25-9h6.75m-9-3.75h.008v.008H3.75V3Zm4.5 0h.008v.008H8.25V3Z"
                  />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-white">Call Us</h3>
                  <p className="text-gray-300">
                    <a
                      href="tel:+1234567890"
                      className="text-orange-400 hover:underline"
                    >
                      +1 (234) 567-890
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 text-orange-400 flex-shrink-0 mt-1 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-white">Visit Us</h3>
                  <p className="text-gray-300">
                    123 Scent Avenue, Fragrance City, FC 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 text-orange-400 flex-shrink-0 mt-1 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Business Hours
                  </h3>
                  <p className="text-gray-300">
                    Mon - Fri: 9:00 AM - 6:00 PM <br />
                    Sat: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-xl border border-gray-800">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors duration-200"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors duration-200"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors duration-200"
                  placeholder="Inquiry about a product"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors duration-200 resize-y"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              {submitStatus === "success" && (
                <p className="text-green-500 text-center font-semibold text-lg">
                  Thank you for your message! We&rsquo;ll get back to you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-500 text-center font-semibold text-lg">
                  There was an error sending your message. Please fill in all
                  fields.
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-full text-lg font-bold transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50
                  ${
                    isSubmitting
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-orange-600 text-white hover:bg-orange-700 transform hover:-translate-y-1"
                  }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-white">
          Find Us on the Map
        </h2>
        <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
          {/* Replace this iframe with your actual Google Maps embed code */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.25056754021!2d144.963057615316!3d-37.81627997975196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b5c2df3c55%3A0x5045678462970a0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1678890123456!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false} // Set to false to prevent full screen button
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location on Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
