import { Button } from "@/components/ui/button";
import {Contact, DownloadIcon, GithubIcon, User} from "lucide-react";
import { Link } from "react-router-dom";

const goToGithub = () => {
  window.open("https://noruj.com/contact", "_blank");
};

export default function About() {
  return (
      <>
        <main className=" flex items-center justify-center overflow-auto">
          <div className="container mx-auto px-6 py-12">
            <section className="flex flex-col md:flex-row items-center justify-between gap-12 ">
              {/* About Section */}
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                  About
                </h1>
                <hr className="mb-2 mt-1 h-0.5 bg-primary border-none"/>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  Hi, I&apos;m Shaik Noor Mohammad, a software engineer with over 5 years of experience currently
                  working at{" "}
                  <span className="text-orange-500">Informatica</span> on the
                  PowerCenter product. I specialize in providing expert-level
                  technical assistance and troubleshooting to clients, ensuring
                  the seamless operation of their systems. My role involves
                  diagnosing and resolving complex software issues and
                  collaborating with cross-functional teams to deliver effective
                  solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <User/>
                    <Link target="_blank" to={"https://portfolio.noruj.com"}>Portfolio</Link>
                  </Button>
                  <Button
                      variant="outline"
                      onClick={goToGithub}
                      className="flex items-center gap-2"
                  >
                    <GithubIcon/>
                    Github
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <DownloadIcon/>
                    Download Resume
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Contact/>
                    <Link to={"/contact"}>Contact</Link>
                  </Button>
                </div>
              </div>
              {/* Image Section */}
              <div className="md:w-1/2 flex justify-center">
                <div className="rounded-lg shadow-xl overflow-hidden max-w-[300px]">
                  <img
                      className="w-full h-auto object-cover scale-105"
                      src="./Noor_HD.jpg"
                      alt="Shaik Noor"
                  />
                </div>
              </div>
            </section>
          </div>
        </main>
      </>
  );
}
