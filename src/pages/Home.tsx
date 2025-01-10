import { Button } from "@/components/ui/button";
import { Contact, DownloadIcon, GithubIcon } from "lucide-react";
import { Link } from "react-router-dom";

const goToGithub = () => {
  window.open("https://github.com/shaik-noor", "_blank");
};
export default function Home() {
  return (
    <>
      <main className="flex items-center justify-center py-10">
        <div className="container mx-auto px-6 py-6">
          {/* How It Works Section */}
          <section className="space-y-12">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              {/* About Section */}
              <div className="text-center md:text-left">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  About
                </h1>
                <hr className="mb-2 mt-1" />
                <p className="text-lg leading-relaxed">
                  Hi, I&apos;m Shaik Noor Mohammad, a software engineer
                  currently working at{" "}
                  <span className="text-orange-500">Informatica</span> on the
                  PowerCenter product. I specialize in providing expert-level
                  technical assistance and troubleshooting to clients, ensuring
                  the seamless operation of their systems. My role involves
                  diagnosing and resolving complex software issues and
                  collaborating with cross-functional teams to deliver effective
                  solutions.
                </p>
                <div className="flex gap-4 mt-4">
                  <Button variant="outline" className="mt-4"><Contact/><Link to={"/contact"}>Contact</Link></Button>
                  <Button variant="outline" onClick={goToGithub} className="mt-4"><GithubIcon/>Github</Button>
                  <Button variant="outline" className="mt-4"><DownloadIcon/>Download Resume</Button>
                </div>
              </div>
              {/* Rounded Image Container */}
              <div className="inline-block rounded-lg shadow-xl">
                <div className="overflow-hidden rounded-lg">
                  <img
                    className="min-w-[250px] scale-110 object-cover"
                    src="./Noor_HD.jpg"
                    alt="Shaik Noor"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
