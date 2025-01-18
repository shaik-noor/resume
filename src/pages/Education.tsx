const Education = () => {
    const educationDetails = [
        {
            degree: "Computer Programming",
            institution: "Zero To Mastery Academy",
            duration: "2022",
            description:
                "Complete Web Development",
        },
        {
            degree: "Bachelor of Commerce (B.Com)",
            institution: "Sri Krishnadevaraya University",
            duration: "2014 - 2017",
            description:
                "Focused on accounting, finance, and business management principles. Developed strong analytical and problem-solving skills essential for business operations.",
        },


    ];

    return (
        <main className="flex items-center justify-center py-10">
            <div className="container mx-auto px-6 py-6">
                {/* Header Section */}
                <section className="space-y-12 mb-12">
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                        <div className="text-center md:text-left">
                            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                                Education
                            </h1>
                            <hr className="mb-2 mt-1 h-0.5 bg-primary border-none" />
                            <p className="text-lg leading-relaxed">
                                A timeline showcasing my academic achievements and qualifications.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="relative">
                    <div className="relative border-l-4 border-gray-300 dark:border-gray-600">
                        {educationDetails.map((education, index) => (
                            <div key={index} className="flex items-start gap-6 mb-8 last:mb-0">
                                {/* Timeline Marker */}
                                <div className="relative">
                                    <div className="absolute top-2 -left-[10px] h-4 w-4 bg-primary rounded-full border-2 border-white dark:border-gray-900"></div>
                                </div>

                                {/* Content */}
                                <div className="ml-6">
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                                        {education.degree}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {education.institution} • {education.duration}
                                    </p>
                                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                                        {education.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Education;
