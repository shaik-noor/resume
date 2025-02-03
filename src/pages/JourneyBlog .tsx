import React from "react";

interface Blog {
  title: string;
  date: string;
  description: string;
}

const JourneyBlog: React.FC = () => {
  const blogs: Blog[] = [
    {
      title: "Web Development with HTML, CSS, JavaScript Essentials: Coursera",
      date: "May 2022",
      description:
        "I have completed the Web Development with HTML, CSS, and JavaScript course on Coursera. I have learned the basics of web development, including HTML, CSS, and JavaScript. I have also learned how to create a responsive website using Bootstrap.",
    },
    {
      title: "Getting Started with Git and GitHub: Coursera",
      date: "May 2022",
      description:
        "I have completed the Getting Started with Git and GitHub course on Coursera. I have learned how to use Git and GitHub to manage my code and collaborate with other developers. I have also learned how to create a repository, commit changes, and push code to GitHub.",
    },
    {
      title: "The Complete Web Developer: Zero to Mastery Academy",
      date: "May 2022",
      description:
        "I have started my journey to become a full-stack web developer. I have enrolled in the Zero to Mastery Academy's Complete Web Developer course. I am learning HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more.",
    },
    {
      title: "Learning SQL Programming: LinkedIn Learning",
      date: "Jul 2022",
      description:
        "I have completed the Learning SQL Programming course on LinkedIn Learning. I have learned how to write SQL queries to retrieve and manipulate data from a database. I have also learned how to create tables, insert data, and update records in a database.",
    },
    {
      title: "Unix Essential Training: LinkedIn Learning",
      date: "Aug 2022",
      description:
        "I have completed the Unix Essential Training course on LinkedIn Learning. I have learned how to use the Unix command-line interface to navigate the file system, manage files and directories, and run commands. I have also learned how to write shell scripts to automate tasks and customize my Unix environment.",
    },
    {
      title: "Linux Fundamentals: Coursera",
      date: "Aug 2022",
      description:
        "I have completed the Linux Fundamentals course on Coursera. I have learned how to use the Linux operating system, including basic commands, file system navigation, and user management. I have also learned how to install software, manage processes, and configure network settings in Linux.",
    },
    {
      title: "Programming with JavaScript: Coursera",
      date: "Jul 2023",
      description:
        "I have completed the Programming with JavaScript course on Coursera. I have learned the basics of JavaScript, including variables, data types, operators, and control structures. I have also learned how to write functions, work with arrays and objects, and handle errors in JavaScript.",
    },
    {
      title: "Introduction to DataEngineering: Coursera",
      date: "Dec 2024",
      description:
        "I have completed the Introduction to Data Engineering course on Coursera. I have learned the basics of data engineering, including data modeling, data warehousing, and ETL processes. I have also learned how to work with databases, data pipelines, and big data technologies.",
    },
    {
      title: "Python for Data Science, AL & Development: Coursera",
      date: "Jan 2025",
      description:
        "I have completed the Python for Data Science, AI & Development course on Coursera. I have learned how to use Python for data analysis, machine learning, and web development. I have also learned how to work with libraries like NumPy, Pandas.",
    },
    {
      title: "Python Project for Data Engineering: Coursera",
      date: "Jan 2025",
      description:
        "I have completed the Python Project for Data Engineering course on Coursera. I have learned how to build a data pipeline using Python, including data extraction, transformation, and loading. I have also learned how to work with databases, APIs and webscraping.",
    },
    {
      title: "Introduction to Relational Database (RDBMS): Coursera",
      date: "present",
      description: "Still learning",
    },
  ];

  // Reverse the blogs array so that the latest entries appear first.
  const reversedBlogs: Blog[] = [...blogs].reverse();

  // Group blogs by year.
  // assume the year is the last word in the date string.
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

  // Sort the years in descending order.
  // Here, we place "present" (or ongoing) at the top.
  const sortedYears = Object.keys(groupedBlogs).sort((a, b) => {
    if (a === "present") return -1;
    if (b === "present") return 1;
    return Number(b) - Number(a);
  });

  return (
    <main className="flex items-center justify-center py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <section className="space-y-4 mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-4xl">
            Journey Blog
          </h1>
          <hr className="w-12 h-1 bg-primary border-0 rounded mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A quick overview of my learning journey and technical insights.
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
                    <div className="absolute -left-7 md:-left-8 top-4 h-4 w-4 bg-primary rounded-full border-4 border-white dark:border-gray-900 z-10" />

                    {/* Content Card */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {blog.date}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
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
