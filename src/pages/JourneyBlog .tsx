const JourneyBlog = () => {
    const blogs = [
        {
            title: "Introduction to Data Engineering",
            date: "Jan 2025",
            description:
                "I started my journey in data engineering by learning Python, Pandas, and Flask. My first project was a CSV file processor, which helped me understand ETL basics.",
        },
        {
            title: "Exploring Kafka and Airflow",
            date: "Feb 2025",
            description:
                "Learned Kafka for real-time data streaming and Airflow for orchestrating workflows. Implemented a pipeline to pull REST API data and load it into PostgreSQL.",
        },
        {
            title: "Building a Portfolio Website",
            date: "Mar 2025",
            description:
                "Designed and developed my portfolio website using React and Tailwind CSS. Shared blogs and runbooks on data engineering topics to help others in the field.",
        },
        {
            title: "Experimenting with Spark",
            date: "Apr 2025",
            description:
                "Started exploring Apache Spark for big data processing. Worked on creating batch jobs to analyze large datasets and gained hands-on experience with Spark SQL.",
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
                                Journey Blog
                            </h1>
                            <hr className="mb-2 mt-1 h-0.5 bg-primary border-none" />
                            <p className="text-lg leading-relaxed">
                                A timeline of my learning journey, insights, and projects and technology.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="relative">
                    <div className="relative border-l-4 border-gray-300 dark:border-gray-600">
                        {blogs.map((blog, index) => (
                            <div key={index} className="flex items-start gap-6 mb-8 last:mb-0">
                                {/* Timeline Marker */}
                                <div className="relative">
                                    <div className="absolute top-2 -left-[10px] h-4 w-4 bg-primary rounded-full border-2 border-white dark:border-gray-900"></div>
                                </div>

                                {/* Content */}
                                <div className="ml-6">
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                                        {blog.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{blog.date}</p>
                                    <p className="mt-2 text-gray-700 dark:text-gray-300">{blog.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default JourneyBlog;