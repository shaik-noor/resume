import UnixEssentialImage from "@/assets/Unix-Essential-Training.png"
import { Badge } from "@/components/ui/badge"

const Certificates = () => {
  const certificates = [
    {
      title: "Unix Essential Training",
      image:UnixEssentialImage,
      link: "https://www.linkedin.com/learning/certificates/cf4c365df01bca16733b77fdf2bc677a06d979acb3788a3f99a085e5a6741294?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BPmDhBcr9RJKUgW0zwGu1Ng%3D%3D",
      description:
        "Learned the basics of working in Linux OS and using it for daily activities.",
      skills: ["Unix", "Linux"],
    },
    {
      title: "Programming with JavaScript",
      image:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~QL5K32N2R2BY/CERTIFICATE_LANDING_PAGE~QL5K32N2R2BY.jpeg",
      link: "https://coursera.org/share/9cf2c0e12fb114548bc544deca3ad5c0",
      description:
        "Learned the basics of JavaScript and how it is used to build web applications.",
      skills: ["JavaScript", "Web Development"],
    },
    {
      title: "Python for Data Science, AI & Development",
      image:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~MS5SBOSEKEF0/CERTIFICATE_LANDING_PAGE~MS5SBOSEKEF0.jpeg",
      link: "https://coursera.org/share/e3b62b29e6198c25263c839ebc6464eb",
      description:
        "Gained a strong foundation in Python programming, including functions, objects, loops, and classes.",
      skills: ["Python", "Data Engineering"],
    },
  ];

  return (
    <main className="flex items-center justify-center py-10">
      <div className="container mx-auto px-6 py-8">
        {/* Header Section */}

        <section className="space-y-8 mb-10 text-center md:text-left">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
              Certificates
            </h1>
            <Badge className="justify-end" variant="destructive">Still updating this page</Badge>
          </div>
          <hr className="mb-4 mt-2 h-0.5 bg-primary border-none"/>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            A showcase of my professional certifications, along with the skills
            and knowledge gained.
          </p>
        </section>

        {/* Certificates Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-md shadow-md p-5 hover:shadow-lg transition duration-300"
            >
              {/* Certificate Image */}
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              </a>

              {/* Certificate Details */}
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {certificate.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {certificate.description}
              </p>

              {/* Skills */}
              <div className="mt-3">
                <h4 className="text-sm font-medium text-gray-800 dark:text-gray-100">
                  Skills Gained:
                </h4>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {certificate.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Certificates;
