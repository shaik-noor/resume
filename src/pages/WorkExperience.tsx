const WorkExperience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Informatica",
      duration: "Aug 2023 - Present",
      description: "As an Informatica Power Center Product Support Engineer, I provide expert-level technical assistance and \n" +
          "troubleshooting to clients utilizing the Informatica Power Center. My daily responsibilities involved \n" +
          "diagnosing, resolving, and preventing software issues, ensuring seamless operation for end-users. I handled \n" +
          "customer inquiries, resolve software bugs, and collaborate with cross-functional teams to deliver effective \n" +
          "solutions.",
    },
    {
      title: "Technical Support Engineer",
      company: "Informatica",
      duration: "Jul 2020 - Jul 2023 - 3 yrs 1 mo",
      description: "working with the Data as a Service team, and my task involved validating and verifying postal addresses, email addresses, and phone numbers. During this period, I interacted with clients and data analyst's to solve real-time problems.\n" +
          "\n" +
          "Other than that I speak with clients every day, assist with technical questions, help them with KB Articles if needed, respond to questions on the phone, assist with rising cases, schedule working sessions with the product engineer, and give the finest support.",
    },
    {
      title: "Senior Engineer",
      company: "F1 INFO SOLUTIONS & SERVICES PRIVATE LIMITED",
      duration: "Oct 2018 - May 2019 - 8 mos",
      description: "F1 Info Solutions is owned by Flipkart and I was a part of the refurbishing and servicing team, and my primary responsibility was to restore and service electronic devices such as laptops and smartphones, which are resold on Flipkart.",
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
                  Work Experience
                </h1>
                <hr className="mb-2 mt-1 h-0.5 bg-primary border-none" />
                <p className="text-lg leading-relaxed">
                  A timeline showcasing my professional journey and contributions.
                </p>
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="relative">
            <div className="relative border-l-4 border-gray-300 dark:border-gray-600">
              {experiences.map((experience, index) => (
                  <div key={index} className="flex items-start gap-6 mb-8 last:mb-0">
                    {/* Timeline Marker */}
                    <div className="relative">
                      <div className="absolute top-2 -left-[10px] h-4 w-4 bg-primary rounded-full border-2 border-white dark:border-gray-900"></div>
                    </div>

                    {/* Content */}
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                        {experience.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {experience.company} • {experience.duration}
                      </p>
                      <p className="mt-2 text-gray-700 dark:text-gray-300">
                        {experience.description}
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

export default WorkExperience;
