import { useState } from "react";
import UnixEssentialImage from "@/assets/Unix-Essential-Training.png";
import PlatformAdminFundamentals from "@/assets/certificates/platform_admin_fundamentals.png";
import pcDataIntegrationDeveloper from "@/assets/certificates/pc_data_integration_for_developers.png";
import pcDeveloper02 from "@/assets/certificates/pc_developer_level_02.png";
import pcAdminFundamentals from "@/assets/certificates/pc_admin_fundamentals.png";
import caiDeveloper from "@/assets/certificates/cai_for_developers.png";
interface Certificate {
  title: string;
  image: string;
  link?: string;
  description: string;
  skills: string[];
}

const Certificates = () => {
  // List of Informatica certificates
  const informaticaCertificates: Certificate[] = [
    {
      title: "Informatica Platform Administration Fundamentals",
      image: PlatformAdminFundamentals,
      description:
        "Learned the configuring, managing, securing, and monitoring the Informatica PowerCenter domain. ",
      skills: ["ETL", "Administration", "PowerCenter"],
    },
    {
      title: "PowerCenter Data Integration for Developers",
      image: pcDataIntegrationDeveloper,
      description:
        "Learned to design, build, test, and maintain real-world data integration systems with PowerCenter’s workbench tools. learned to create and combine PowerCenter objects such as source and target definitions, data transformations, mappings, sessions, and workflows using best-practice methodology. ",
      skills: ["Data Integration", "ETL", "PowerCenter"],
    },
    {
      title: "PowerCenter Developer Level 2",
      image: pcDeveloper02,
      description:
        "PowerCenter connection architecture, high availability, and session and workflow recovery. ",
      skills: ["Data Integration", "ETL", "PowerCenter"],
    },
    {
      title: "PowerCenter Administration Fundamentals",
      image: pcAdminFundamentals,
      description:
        "Configuring, managing, securing, and monitoring the Informatica PowerCenter domain. ",
      skills: ["Administration", "PowerCenter"],
    },
    {
      title: "Cloud Application Integration Services for Developers",
      image: caiDeveloper,
      description:
        "Integrate applications and systems, implement business processes using process designer that can access data from on-premise as well as cloud, and expose them as composite APIs. ",
      skills: ["Informatica", "ETL", "Data Integration", "CAI"],
    },
  ];

  // List of other certificates
  const otherCertificates: Certificate[] = [
    {
      title: "Unix Essential Training",
      image: UnixEssentialImage,
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
    {
      title: "Python Project for Data Engineering",
      image:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~06OVSXNRSE2K/CERTIFICATE_LANDING_PAGE~06OVSXNRSE2K.jpeg",
      link: "https://www.coursera.org/account/accomplishments/verify/06OVSXNRSE2K",
      description:
        "Gained a strong foundation in Python programming, including functions, objects, loops, and classes.",
      skills: ["Python", "Data Engineering", "Flask", "SQL"],
    },
    {
      title: "Introduction to Back-End Development",
      image:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~NETUFMJJTYBA/CERTIFICATE_LANDING_PAGE~NETUFMJJTYBA.jpeg",
      link: "https://www.coursera.org/account/accomplishments/verify/NETUFMJJTYBA",
      description:
        "Learned the basics of back-end development, including server-side scripting, database management, and API design.",
      skills: ["Backend", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Introduction to Cloud Computing",
      image:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~92PBMQLY7YF3/CERTIFICATE_LANDING_PAGE~92PBMQLY7YF3.jpeg",
      link: "https://www.coursera.org/account/accomplishments/verify/92PBMQLY7YF3",
      description:
        "Learned the basics of cloud computing, including cloud services, cloud architecture, and cloud security.",
      skills: ["DevOps", "Serverless", "Microservices", "HybridMulticloud"],
    },
    {
      title: "Getting Started with Git and GitHub",
      image:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~T8Z2BHCZZSFD/CERTIFICATE_LANDING_PAGE~T8Z2BHCZZSFD.jpeg",
      link: "https://www.coursera.org/account/accomplishments/verify/T8Z2BHCZZSFD",
      description:
        "Learned the basics of Git and GitHub, including creating repositories, committing changes, and collaborating with others.",
      skills: ["GitHub", "Git"],
    },
  ];

  // State to track the certificate selected to display in the dialog
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  // Helper function to render each certificate card
  const renderCertificateCard = (certificate: Certificate, index: number) => (
    <div
      key={index}
      className="bg-white dark:bg-gray-800 rounded-md shadow-md p-3 hover:shadow-lg transition duration-300 cursor-pointer"
      onClick={() => setSelectedCert(certificate)}
    >
      <img
        src={certificate.image}
        alt={certificate.title}
        className="w-full h-32 object-cover rounded-md mb-3"
      />
      <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100">
        {certificate.title}
      </h3>
      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
        {certificate.description}
      </p>
      <div className="mt-2">
        <h4 className="text-xs font-medium text-gray-800 dark:text-gray-100">
          Skills Gained:
        </h4>
        <ul className="flex flex-wrap gap-1 mt-1">
          {certificate.skills.map((skill, i) => (
            <li
              key={i}
              className="text-[10px] px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded-full"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <main className="flex items-center justify-center py-10">
      <div className="container mx-auto px-6 py-8">
        {/* Header Section */}
        <section className="space-y-8 mb-10 text-center md:text-left">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
              Certificates
            </h1>
          </div>
          <hr className="mb-4 mt-2 h-0.5 bg-primary border-none" />
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            A showcase of my professional certifications, along with the skills
            and knowledge gained.
          </p>
        </section>

        {/* Informatica Certificates Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Informatica Certificates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {informaticaCertificates.map(renderCertificateCard)}
          </div>
        </section>

        {/* Other Certificates Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Other Certificates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherCertificates.map(renderCertificateCard)}
          </div>
        </section>

        {/* Dialog/Modal */}
        {selectedCert && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className="absolute inset-0 bg-black opacity-50"
              onClick={() => setSelectedCert(null)}
            ></div>
            <div className="bg-white dark:bg-gray-800 rounded-md shadow-lg z-10 p-6 max-w-4xl mx-4">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full max-h-[60vh] object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {selectedCert.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {selectedCert.description}
              </p>
              <div className="mt-4 flex justify-end gap-2">
                {/* Only render the "Go to Link" button if a link exists */}
                {selectedCert.link && (
                  <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
                  >
                    Go to Link
                  </a>
                )}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-3 py-1 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-100 text-xs rounded hover:bg-gray-400"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Certificates;
