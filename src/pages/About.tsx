import { Button } from "@/components/ui/button";
import { Contact, DownloadIcon, GithubIcon, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { experiences, calculateTotalExperience } from "@/utils/experience";

export default function About() {
  // Calculate total experience using the shared util.
  const totalExperience = useMemo(
    () => calculateTotalExperience(experiences),
    []
  );

  const goToGithub = () => {
    window.open("https://github.com/shaik-noor", "_blank");
  };

  const goToLinkedin = () => {
    window.open("https://www.linkedin.com/in/shaik-noor/", "_blank");
  };

  const DownloadResume = () => {
    window.open(
      "https://github.com/shaik-noor/resume/tree/main/src/assets/Noor-Resume.pdf",
      "_blank"
    );
  };

  return (
    <main className="flex items-center justify-center py-10">
      <div className="container mx-auto px-6 py-8">
        {/* Header Section */}
        <section className="space-y-8 mb-10 text-left">
          <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
            About
          </h1>
          <hr className="mb-4 mt-2 h-0.5 bg-primary border-none" />
        </section>

        <section className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* About Text */}
          <div className="md:w-1/2 space-y-5">
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              Hi, I&apos;m{" "}
              <span className="font-semibold">Shaik Noor Mohammad</span>, a
              software engineer with over{" "}
              <span className="font-semibold">{totalExperience}</span> of
              experience. I currently work at{" "}
              <span className="text-orange-500 font-bold">Informatica</span>,
              focusing on the PowerCenter and IICS products. My expertise
              includes{" "}
              <span className="font-semibold">
                technical assistance, troubleshooting, and software issue
                resolution
              </span>
              . I collaborate with cross-functional teams to deliver{" "}
              <span className="font-semibold">
                efficient and scalable solutions
              </span>
              .
            </p>

            {/* Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                variant="outline"
                onClick={goToGithub}
                className="flex items-center gap-2"
              >
                <GithubIcon className="h-4 w-4" />
                <span className="whitespace-normal break-words">Github</span>
              </Button>
              <Button
                variant="outline"
                onClick={goToLinkedin}
                className="flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4" />
                <span className="whitespace-normal break-words">Linkedin</span>
              </Button>

              <Button variant="outline" className="flex items-center gap-2">
                <Contact className="h-4 w-4" />
                <Link to="/resume" className="whitespace-normal break-words">
                  Read Resume
                </Link>
              </Button>
              <Button
                variant="outline"
                onClick={DownloadResume}
                className="flex items-center gap-2"
              >
                <DownloadIcon className="h-4 w-4" />
                <span className="whitespace-normal break-words">
                  Download Resume
                </span>
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <div className="rounded-lg shadow-md overflow-hidden max-w-[250px]">
              <img
                className="w-full h-auto object-cover rounded-md scale-105"
                src="./Noor_HD.jpg"
                alt="Shaik Noor"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
