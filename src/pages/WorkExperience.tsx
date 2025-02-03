const WorkExperience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Informatica",
      duration: "Aug 2023 - Present",
      description:
        "Providing expert-level technical assistance and troubleshooting for Informatica Power Center. Diagnosing, resolving, and preventing software issues to ensure seamless operations for clients.",
    },
    {
      title: "Technical Support Engineer",
      company: "Informatica",
      duration: "Jul 2020 - Jul 2023",
      description:
        "Worked with the Data as a Service team to validate and verify postal addresses, emails, and phone numbers. Assisted clients with technical issues, documentation, and case escalations.",
    },
    {
      title: "Senior Engineer",
      company: "F1 Info Solutions & Services (Flipkart Subsidiary)",
      duration: "Oct 2018 - May 2019",
      description:
        "Part of the refurbishing and servicing team, responsible for restoring and servicing electronic devices like laptops and smartphones resold on Flipkart.",
    },
  ];

  return (
    <main className="flex items-center justify-center py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <section className="space-y-4 mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-4xl">
            Work Experience
          </h1>
          <hr className="w-12 h-1 bg-primary border-0 rounded mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A timeline showcasing my professional journey and contributions.
          </p>
        </section>

        {/* Timeline Section */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-6 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />

          {/* Experience Items */}
          <div className="space-y-8 ml-8 md:ml-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                {/* Timeline Marker */}
                <div className="absolute -left-7 md:-left-8 top-4 h-4 w-4 bg-primary rounded-full border-4 border-white dark:border-gray-900 z-10" />

                {/* Content Card */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
                    {experience.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {experience.company} • {experience.duration}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkExperience;
