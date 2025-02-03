const Education = () => {
  const educationDetails = [
    {
      degree: "Computer Programming",
      institution: "Zero To Mastery Academy",
      duration: "2022",
      description: "Complete Web Development",
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <section className="space-y-4 mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-4xl">
            Education
          </h1>
          <hr className="w-12 h-1 bg-primary border-0 rounded mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A timeline showcasing my academic achievements and qualifications.
          </p>
        </section>

        {/* Timeline Section */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-6 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
          
          {/* Education Items */}
          <div className="space-y-8 ml-8 md:ml-12">
            {educationDetails.map((education, index) => (
              <div key={index} className="relative">
                {/* Timeline Marker */}
                <div className="absolute -left-7 md:-left-8 top-4 h-4 w-4 bg-primary rounded-full border-4 border-white dark:border-gray-900 z-10" />
                
                {/* Content Card */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
                    {education.degree}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {education.institution} • {education.duration}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    {education.description}
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


export default Education;
