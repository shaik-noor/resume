const Certificates = () => {
    const certificates = [
        {
            title: "Unix Essential Training",
            image: "https://media.licdn.com/dms/image/v2/C561FAQFu1lxImX03fw/feedshare-document-cover-images_1280/feedshare-document-cover-images_1280/0/1659644691818?e=1737777600&v=beta&t=-XOrrGTbNY4BlB26gb1Q7p6bTjDOChuyNXsjd8cxfX0",
            link: "https://www.linkedin.com/learning/certificates/cf4c365df01bca16733b77fdf2bc677a06d979acb3788a3f99a085e5a6741294?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BPmDhBcr9RJKUgW0zwGu1Ng%3D%3D",
            description: "Learned the basic of working in linux os and using linux for daily activities.",
            skills: ["Unix", "Linux"],
        },
        {
            title: "Programming with JavaScript",
            image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~QL5K32N2R2BY/CERTIFICATE_LANDING_PAGE~QL5K32N2R2BY.jpeg",
            link: "https://coursera.org/share/9cf2c0e12fb114548bc544deca3ad5c0",
            description: "Learned the basics of JavaScript and how it is used to build web applications.",
            skills: ["JavaScript", "Web Development"],
        },
        {
            title: "Python for Data Science, AI & Development",
            image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~MS5SBOSEKEF0/CERTIFICATE_LANDING_PAGE~MS5SBOSEKEF0.jpeg",
            link: "https://coursera.org/share/e3b62b29e6198c25263c839ebc6464eb",
            description: "Gained a strong foundation in Python programming, delving into functions, objects, loops, classes, and other core concepts.",
            skills: ["Python", "Data Engineering"],
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
                                Certificates
                            </h1>
                            <hr className="mb-2 mt-1 h-0.5 bg-primary border-none" />
                            <p className="text-lg leading-relaxed">
                                A showcase of my professional certifications, along with the skills and knowledge gained.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Certificates Section */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {certificates.map((certificate, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:scale-105"
                        >
                            {/* Certificate Image */}
                            <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={certificate.image}
                                    alt={certificate.title}
                                    className="w-full object-cover rounded-t-lg mb-4"
                                />
                            </a>
                            {/* Certificate Details */}
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                                {certificate.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">{certificate.description}</p>
                            <div className="mt-4">
                                <h4 className="font-medium text-gray-800 dark:text-gray-100">Skills Gained:</h4>
                                <ul className="list-disc ml-5 text-gray-600 dark:text-gray-400">
                                    {certificate.skills.map((skill, i) => (
                                        <li key={i}>{skill}</li>
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
