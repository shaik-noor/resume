import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";
import {ExternalLink} from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "ETL Pipeline with Apache Airflow",
            description:
                "Built an end-to-end ETL pipeline to extract, transform, and load data into a PostgreSQL database using Apache Airflow.",
            link: "#",
        },
        {
            title: "Portfolio Website",
            description:
                "Developed a personal portfolio website using Flask and Tailwind CSS to showcase my projects and skills.",
            link: "https://portfolio.noruj.com",
        },
        {
            title: "Data Visualization Dashboard",
            description:
                "Created a dashboard for visualizing sales data using Python, Pandas, and Plotly, deployed via Flask.",
            link: "#",
        },
        {
            title: "SQL Playground",
            description:
                "Built an interactive SQL playground with complex query execution and CSV dataset uploads using Remix and PostgreSQL.",
            link: "#",
        },
    ];

    return (
        <main className="flex items-center justify-center py-10 ">
            <div className="container mx-auto px-6 py-6">
                {/* Header Section */}

                <section className="space-y-12 mb-12">
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                        <div className="text-center md:text-left">
                            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                                Projects
                            </h1>
                            <hr className="mb-2 mt-1 h-0.5 bg-primary border-none"/>
                            <p className="text-lg leading-relaxed">
                                A showcase of my featured projects and technical accomplishments.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-lg transition duration-300"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                {project.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                {project.description}
                            </p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary font-medium hover:underline flex gap-2"
                            >
                                View Project <ExternalLink />
                            </a>
                        </div>
                    ))}
                </section>

                {/* See All Projects Button */}
                <section className="mt-12 text-center">
                    <Button>
                        <Link
                            to="https://portfolio.noruj.com"
                            target="_blank"
                            rel="noopener noreferrer"

                        >
                            See All Projects
                        </Link>
                    </Button>
                </section>
            </div>
        </main>
    );
};

export default Projects;
