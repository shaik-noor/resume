const Skills = () => {
  const skills = [
    {
      name: "PowerCenter",
      image: "https://companieslogo.com/img/orig/INFA-c4767c1c.png",
    },
    {
      name: "Spark",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg",
    },
    {
      name: "Hadoop",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Hadoop_logo_new.svg/1280px-Hadoop_logo_new.svg.png",
    },
    {
      name: "Airflow",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/AirflowLogo.png/800px-AirflowLogo.png",
    },
    {
      name: "Python",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
    {
      name: "JavaScript",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      name: "SQL",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
    },
    {
      name: "PostgreSQL",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    },
    {
      name: "Oracle Database",
      image: "https://www.svgrepo.com/show/354152/oracle.svg",
    },
    {
      name: "MongoDB",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    },
    {
      name: "Redis",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Redis_logo.svg/1280px-Redis_logo.svg.png",
    },
    {
      name: "Docker",
      image: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
    },
    {
      name: "GitHub",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
    },
  ];

  return (
    <main className="flex items-center justify-center py-10">
      <div className="container mx-auto px-6 py-8">
        {/* Header Section */}
        <section className="space-y-8 mb-10 text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
            Skills
          </h1>
          <hr className="mb-4 mt-2 h-0.5 bg-primary border-none" />
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            A showcase of technologies and tools I have worked with.
          </p>
        </section>

        {/* Skills Section */}
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-md shadow-md p-5 hover:shadow-lg transition duration-300"
            >
              {/* Skill Logo */}
              <img
                src={skill.image}
                alt={skill.name}
                className="h-14 w-14 object-contain mb-3"
              />
              {/* Skill Name */}
              <h3 className="text-sm font-medium text-gray-800 dark:text-gray-100">
                {skill.name}
              </h3>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Skills;
