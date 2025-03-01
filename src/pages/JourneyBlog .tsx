import React from "react";
interface Blog {
  title: string;
  date: string;
  description: string;
  source?: string;
}

const blogs: Blog[] = [
  {
    title: "Web Development with HTML, CSS, JavaScript Essentials: Coursera",
    date: "May 2022",
    description:
      "I have completed the Web Development with HTML, CSS, and JavaScript course on Coursera. I have learned the basics of web development, including HTML, CSS, and JavaScript. I have also learned how to create a responsive website using Bootstrap.",
    source: "Coursera",
  },
  {
    title: "Getting Started with Git and GitHub: Coursera",
    date: "May 2022",
    description:
      "I have completed the Getting Started with Git and GitHub course on Coursera. I have learned how to use Git and GitHub to manage my code and collaborate with other developers. I have also learned how to create a repository, commit changes, and push code to GitHub.",
    source: "Coursera",
  },
  {
    title: "The Complete Web Developer: Zero to Mastery Academy",
    date: "May 2022",
    description:
      "I have started my journey to become a full-stack web developer. I have enrolled in the Zero to Mastery Academy's Complete Web Developer course. I am learning HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more.",
    source: "Zero to Mastery",
  },
  {
    title: "Learning SQL Programming: LinkedIn Learning",
    date: "Jul 2022",
    description:
      "I have completed the Learning SQL Programming course on LinkedIn Learning. I have learned how to write SQL queries to retrieve and manipulate data from a database. I have also learned how to create tables, insert data, and update records in a database.",
    source: "LinkedIn",
  },
  {
    title: "Unix Essential Training: LinkedIn Learning",
    date: "Aug 2022",
    description:
      "I have completed the Unix Essential Training course on LinkedIn Learning. I have learned how to use the Unix command-line interface to navigate the file system, manage files and directories, and run commands. I have also learned how to write shell scripts to automate tasks and customize my Unix environment.",
    source: "LinkedIn",
  },
  {
    title: "Linux Fundamentals: Coursera",
    date: "Aug 2022",
    description:
      "I have completed the Linux Fundamentals course on Coursera. I have learned how to use the Linux operating system, including basic commands, file system navigation, and user management. I have also learned how to install software, manage processes, and configure network settings in Linux.",
    source: "Coursera",
  },
  {
    title: "Programming with JavaScript: Coursera",
    date: "Jul 2023",
    description:
      "I have completed the Programming with JavaScript course on Coursera. I have learned the basics of JavaScript, including variables, data types, operators, and control structures. I have also learned how to write functions, work with arrays and objects, and handle errors in JavaScript.",
    source: "Coursera",
  },
  {
    title: "Introduction to DataEngineering: Coursera",
    date: "Dec 2024",
    description:
      "I have completed the Introduction to Data Engineering course on Coursera. I have learned the basics of data engineering, including data modeling, data warehousing, and ETL processes. I have also learned how to work with databases, data pipelines, and big data technologies.",
    source: "Coursera",
  },
  {
    title: "Python for Data Science, AI & Development: Coursera",
    date: "Jan 2025",
    description:
      "I have completed the Python for Data Science, AI & Development course on Coursera. I have learned how to use Python for data analysis, machine learning, and web development. I have also learned how to work with libraries like NumPy, Pandas.",
    source: "Coursera",
  },
  {
    title: "Python Project for Data Engineering: Coursera",
    date: "Jan 2025",
    description:
      "I have completed the Python Project for Data Engineering course on Coursera. I have learned how to build a data pipeline using Python, including data extraction, transformation, and loading. I have also learned how to work with databases, APIs and webscraping.",
    source: "Coursera",
  },
  {
    title: "Introduction to Relational Database (RDBMS): Coursera",
    date: "present",
    description: "Still learning",
    source: "Coursera",
  },
];


const certificateBlogs: Blog[] = [
  {
    title: "Informatica Platform Administration Fundamentals",
    date: "2022",
    description:
      "Learned configuring, managing, securing, and monitoring the Informatica PowerCenter domain.",
    source: "Informatica",
  },
  {
    title: "PowerCenter Data Integration for Developers",
    date: "2022",
    description:
      "Learned to design, build, test, and maintain real-world data integration systems with PowerCenter’s workbench tools.",
    source: "Informatica",
  },
  {
    title: "PowerCenter Developer Level 2",
    date: "2022",
    description:
      "Learned about PowerCenter connection architecture, high availability, and session and workflow recovery.",
    source: "Informatica",
  },
  {
    title: "PowerCenter Administration Fundamentals",
    date: "2023",
    description:
      "Learned configuring, managing, securing, and monitoring the Informatica PowerCenter domain.",
    source: "Informatica",
  },
  {
    title: "Cloud Application Integration Services for Developers",
    date: "2022",
    description:
      "Learned to integrate applications and systems, and implement business processes using process designer.",
    source: "Informatica",
  },
];

// Merge the blog entries and certificate entries
const journeyBlogs: Blog[] = [...blogs, ...certificateBlogs];

// Reverse the merged array so that the latest entries appear first.
const reversedBlogs: Blog[] = [...journeyBlogs].reverse();

// Group blogs by year. We assume the year is the last word in the date string.
// If the date is "present", it will be grouped as "present".
const groupedBlogs: Record<string, Blog[]> = reversedBlogs.reduce(
  (groups: Record<string, Blog[]>, blog: Blog) => {
    const parts = blog.date.split(" ");
    const year = parts[parts.length - 1];
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(blog);
    return groups;
  },
  {} as Record<string, Blog[]>
);

// Sort the years in descending order, placing "present" (ongoing) at the top.
const sortedYears = Object.keys(groupedBlogs).sort((a, b) => {
  if (a === "present") return -1;
  if (b === "present") return 1;
  return Number(b) - Number(a);
});

// Helper to return tag classes based on source
const getTagClasses = (source?: string): string => {
  switch (source) {
    case "Informatica":
      return "bg-orange-500 text-white";
    case "Coursera":
      return "bg-blue-500 text-white";
    case "LinkedIn":
      return "bg-sky-400 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

const JourneyBlog: React.FC = () => {
  return (
    <main className="flex items-center justify-center py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <section className="space-y-4 mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-4xl">
            Journey Blog
          </h1>
          <hr className="mb-4 mt-2 h-0.5 bg-primary border-none" />
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A quick overview of my learning journey, technical insights, and
            achievements.
          </p>
        </section>

        {/* Timeline Section */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-6 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />

          {/* Grouped Blog Items */}
          <div className="space-y-8 ml-8 md:ml-12">
            {sortedYears.map((year) => (
              <div key={year} className="mb-12">
                {/* Year Header */}
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  {year === "present" ? "Ongoing" : year}
                </h2>
                {groupedBlogs[year].map((blog, index) => (
                  <div key={index} className="relative mb-8">
                    {/* Timeline Marker */}
                    <div className="absolute -left-7 md:-left-8 top-4 h-4 w-4 bg-primary rounded-full border-4 border-white dark:border-gray-900" />
                    {/* Content Card */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                          {blog.title}
                        </h3>
                        {/* Tag */}
                        {blog.source && (
                          <span
                            className={`text-xs font-medium px-2 py-1 rounded ${getTagClasses(
                              blog.source
                            )}`}
                          >
                            {blog.source}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {blog.date}
                        </p>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mt-2">
                        {blog.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default JourneyBlog;
