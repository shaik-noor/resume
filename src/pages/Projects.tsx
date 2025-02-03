import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Developed a personal portfolio website using Flask and Tailwind CSS to showcase my projects and skills.",
      link: "https://portfolio.noruj.com",
    },
  ];

  return (
    <main className="flex items-center justify-center py-10">
      <div className="container mx-auto px-6 py-8">
        {/* Header Section */}
        <section className="space-y-8 mb-10 text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
            Projects
          </h1>
          <hr className="mb-4 mt-2 h-0.5 bg-primary border-none" />
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            A showcase of my featured projects and technical accomplishments.
          </p>
        </section>

        {/* Projects Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col bg-white dark:bg-gray-800 rounded-md shadow-md p-5 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline flex items-center gap-2 text-sm"
              >
                View Project <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </section>

        {/* See All Projects Button */}
        <section className="mt-10 text-center">
          <Button className="px-5 py-2 text-sm font-semibold">
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
