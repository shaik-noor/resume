const Contact = () => {
  const goToContact = () => {
    window.open("mailto:s.noorink@gmail.com", "_blank");
  };

  return (
    <main className="flex items-center justify-center py-10">
      <div className="container mx-auto px-6 py-8">
        {/* Contact Section */}
        <section className="space-y-10 text-center md:text-left">
          {/* Header */}
          <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
            Contact
          </h1>
          <hr className="mb-4 mt-2 h-0.5 bg-primary border-none" />

          {/* Description */}
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            I would love to hear from you! Whether you have a question about my
            work, collaboration opportunities, or just want to say hi, feel free
            to reach out.
          </p>

          {/* Contact Information */}
          <div className="space-y-4">
            <p className="text-sm">
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:s.noorink@gmail.com"
                className="text-primary hover:underline"
              >
                s.noorink@gmail.com
              </a>
            </p>

            <p className="text-sm">
              <span className="font-semibold">Location:</span> Bangalore, India
            </p>
          </div>

          {/* Send Message Button */}
          <div className="flex justify-center md:justify-start">
            <button
              onClick={goToContact}
              className="px-6 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
              Send Message
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
