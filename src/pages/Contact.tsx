const Contact = () => {
    const goToContact = ()=>{
        window.open("mailto:s.noorink@gmail.com", "_blank");
    }
    return (
        <main className="flex items-center justify-center">
            <div className="container mx-auto px-6 py-12">
                {/* Contact Section */}
                <section className="space-y-12">
                    <div className="flex flex-col items-center md:flex-row md:items-start gap-12">
                        {/* Contact Information */}
                        <div className="w-full text-center md:text-left space-y-6">
                            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                                Contact
                            </h1>
                            <hr className="mb-4 mt-2 h-0.5 bg-primary border-none"/>
                            <p className="text-lg leading-relaxed">
                                I would love to hear from you! Whether you have a question about
                                my work, collaboration opportunities, or just want to say hi, feel
                                free to reach out.
                            </p>
                            <div className="space-y-4">
                                <p>
                                    <span className="font-semibold">Email:</span>{" "}
                                    <a
                                        href="mailto:s.noorink@gmail.com"
                                        className="text-primary hover:underline"
                                    >
                                        s.noorink@gmail.com
                                    </a>
                                </p>

                                <p>
                                    <span className="font-semibold">Location:</span> Bangalore, India
                                </p>
                            </div>
                            <div className="flex justify-end ">
                            <button
                                onClick={goToContact}
                                className="w-full md:w-auto bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                            >
                                Send Message
                            </button>
                            </div>
                        </div>


                    </div>
                </section>
            </div>
        </main>
    );
};

export default Contact;
