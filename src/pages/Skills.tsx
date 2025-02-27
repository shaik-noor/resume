
interface Skill {
  name: string;
  image: string;
}

const Skills = () => {
  // Grouping the skills into sections
  const dataIntegrationSkills: Skill[] = [
    {
      name: "PowerCenter & IICS",
      image: "https://companieslogo.com/img/orig/INFA-c4767c1c.png",
    },
    {
      name: "Apache Nifi",
      image: "https://cms.acte.ltd/storage/app/uploads/public/665/2e2/814/6652e28144ba5040936680.png",
    },
    {
      name: "Pentaho Data Integration",
      image: "https://miro.medium.com/v2/resize:fit:532/1*EMEANIXZP2H55rTm_S1FCQ.png",
    },
    {
      name: "Airflow",
      image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/AirflowLogo.png/800px-AirflowLogo.png",
    },

  ];


  const programmingLanguages :Skill[]= [
    {
      name: "Python",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
    {
      name: "JavaScript",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
  ];

  const databases :Skill[]= [
    {
      name: "SQL",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
    },
    {
      name: "PostgreSQL",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    },
    {
      name: "Oracle Database",
      image: "https://www.svgrepo.com/show/354152/oracle.svg",
    },
    {
      name: "MongoDB",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    },
    {
      name: "Redis",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Redis_logo.svg/1280px-Redis_logo.svg.png",
    },
  ];

  const tools:Skill[] = [
    {
      name: "Docker",
      image: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
    },
    {
      name: "GitHub",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
    },
  ];

  // A helper function to render each skill card
  const renderSkillCard = (skill:Skill, index:number) => (
      <div
          key={index}
          className="flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-md shadow-md p-5 hover:shadow-lg transition duration-300"
      >
        <img
            src={skill.image}
            alt={skill.name}
            className="h-14 w-14 object-contain mb-3"
        />
        <h3 className="text-sm font-medium text-gray-800 dark:text-gray-100">
          {skill.name}
        </h3>
      </div>
  );

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

          {/* Data Integration & Orchestration */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Data Integration & Orchestration
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {dataIntegrationSkills.map(renderSkillCard)}
            </div>
          </section>

          {/* Programming Languages */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Programming Languages
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {programmingLanguages.map(renderSkillCard)}
            </div>
          </section>

          {/* Databases */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Databases
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {databases.map(renderSkillCard)}
            </div>
          </section>

          {/* Tools */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Tools
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {tools.map(renderSkillCard)}
            </div>
          </section>
        </div>
      </main>
  );
};

export default Skills;
