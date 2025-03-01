import React from "react";
import NoorHD from "@/assets/Noor_HD.jpg";

const Resume: React.FC = () => {
  return (
    <main className="bg-gray-100 py-8" id="resumeContainer">
      <div className="max-w-5xl mx-auto bg-white shadow p-6 md:p-10">
        {/* HEADER */}
        <header className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4">
          {/* Left: Name, Title, Contact */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 uppercase tracking-wide">
              Shaik Noor Mohammad
            </h1>
            <p className="text-lg text-blue-600 font-semibold mt-1">
              Software Engineer
            </p>
            <p className="text-gray-700 mt-2">
              +91-7799477206, +91-9398627571 |{" "}
              <a
                href="mailto:s.noorink@gmail.com"
                className="text-blue-600 hover:underline"
              >
                s.noorink@gmail.com
              </a>
            </p>
            <p className="text-gray-700">
              <a
                href="https://resume.noruj.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Live Resume
              </a>{" "}
              |{" "}
              <a
                href="https://linkedin.com/in/shaik-noor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn Profile
              </a>{" "}
              |{" "}
              <a
                href="https://portfolio.noruj.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Portfolio
              </a>
            </p>
            <p className="text-gray-500 mt-1">Bangalore, India</p>
          </div>

          {/* Right: Photo */}
          <div className="flex-shrink-0">
            <img
              src={NoorHD}
              alt="Shaik Noor Mohammad"
              className="w-32 h-32 rounded-full object-cover border-2 border-gray-300 scale-125"
            />
          </div>
        </header>

        {/* HORIZONTAL LINE */}
        <hr className="my-5 border-gray-200" />

        {/* TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* LEFT COLUMN (2/3) */}
          <div className="md:col-span-2 space-y-8">
            {/* SUMMARY */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 uppercase border-b-2 border-gray-200 pb-1 tracking-wide">
                Summary
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                I am a seasoned Technical Support Engineer and Software Engineer
                with proven expertise in troubleshooting and resolving complex
                production issues within Linux/Unix/Windows environments. My
                full-stack expertise, combined with a deep understanding of data
                integration and orchestration, equips me to deliver
                cost-efficient, scalable solutions while embracing new
                technologies.
              </p>
            </section>

            {/* EXPERIENCE */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 uppercase border-b-2 border-gray-200 pb-1 tracking-wide">
                Experience
              </h2>

              {/* Current Role */}
              <div className="mt-4">
                <h3 className="font-semibold text-gray-800">
                  Software Engineer – Informatica
                </h3>
                <p className="text-sm text-gray-500">
                  Aug 2023 – Present | Bangalore
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm">
                  <li>
                    Provide expert-level technical assistance and
                    troubleshooting for Informatica PowerCenter and IICS
                    products.
                  </li>
                  <li>
                    Collaborate with cross-functional teams to diagnose issues
                    and implement rapid fixes.
                  </li>
                  <li>
                    Lead implementation of Emergency Bug Fix releases to ensure
                    system reliability.
                  </li>
                  <li>
                    Worked closely with Product Specialist teams to address and
                    resolve critical customer escalations.
                  </li>
                  <li>
                    Automated scripts for streamlined investigation of stack
                    traces and logs.
                  </li>
                </ul>
              </div>

              {/* Previous Role */}
              <div className="mt-4">
                <h3 className="font-semibold text-gray-800">
                  Technical Support Engineer – Informatica
                </h3>
                <p className="text-sm text-gray-500">
                  Jul 2020 – Jul 2023 | Bangalore, India
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm">
                  <li>
                    Served as a primary contact providing data integration
                    solutions to global clients.
                  </li>
                  <li>
                    Created automation scripts to streamline workflows and
                    improve efficiency.
                  </li>
                  <li>
                    Worked in Data as a Service team to validate and verify
                    postal and relevant services.
                  </li>
                </ul>
              </div>

              {/* Earlier Role */}
              <div className="mt-4">
                <h3 className="font-semibold text-gray-800">
                  Senior Engineer – F1 Info Solutions & Services Pvt Ltd
                </h3>
                <p className="text-sm text-gray-500">
                  Oct 2018 – May 2019 | Bangalore, India
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm">
                  <li>
                    F1 Info Solutions & Services provides IT support services.
                  </li>
                  <li>
                    Led technical training sessions and managed
                    refurbishing/servicing of electronic devices.
                  </li>
                  <li>
                    Optimized repair processes, reducing turnaround time by 25%.
                  </li>
                </ul>
              </div>
            </section>

            {/* SKILLS */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 uppercase border-b-2 border-gray-200 pb-1 tracking-wide">
                Skills
              </h2>
              <div className="mt-3 text-gray-700 text-sm space-y-1">
                <p>
                  <strong>Data Integration & Orchestration:</strong>{" "}
                  PowerCenter, IICS, Nifi, Pentaho Data Integration, Airflow
                </p>
                <p>
                  <strong>Languages & Frameworks:</strong> Python, JavaScript,
                  React, Django
                </p>
                <p>
                  <strong>Databases:</strong> Oracle, PostgreSQL, MongoDB, Redis
                </p>
                <p>
                  <strong>Other:</strong> SQL, Docker, Git, Linux/Unix/Windows
                </p>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN (1/3) */}
          <div className="md:col-span-1 space-y-8">
            {/* KEY ACHIEVEMENTS */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 uppercase border-b-2 border-gray-200 pb-1 tracking-wide">
                Key Achievements
              </h2>
              <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1 text-sm">
                <li>Resolved 95% of client inquiries within 24 hours.</li>
                <li>
                  Increased workflow efficiency by 40% developing automation
                  scripts.
                </li>
                <li>
                  Reduced turnaround time by 25% optimizing repair processes.
                </li>
                <li>Technical Training Leadership</li>
              </ul>
            </section>

            {/* CERTIFICATION */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 uppercase border-b-2 border-gray-200 pb-1 tracking-wide">
                Certification
              </h2>
              <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1 text-sm">
                <li>
                  Cloud Application Integration Services for Developers
                  (Informatica)
                </li>
                <li>
                  Informatica Platform Administration Fundamentals (Informatica)
                </li>
                <li>
                  PowerCenter Data Integration for Developers (Informatica)
                </li>
                <li>PowerCenter Developer Level 2 (Informatica)</li>
                <li>Linux Fundamentals (Coursera)</li>
                <li>Unix Essential Training (LinkedIn Learning)</li>
                <li>Learning SQL Programming (LinkedIn Learning)</li>
                <li>Programming with JavaScript (Coursera)</li>
                <li>
                  Web Development with HTML, CSS, JavaScript Essentials
                  (Coursera)
                </li>
              </ul>
            </section>

            {/* EDUCATION */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 uppercase border-b-2 border-gray-200 pb-1 tracking-wide">
                Education
              </h2>
              <div className="mt-3 text-gray-700 text-sm space-y-2">
                <p>
                  <strong>Complete Web Developer</strong> – Zero To Mastery
                  Academy (2022 – 2023)
                </p>
                <p>
                  <strong>B.Com</strong> – Sri Krishnadevaraya University (2014
                  – 2017)
                </p>
              </div>
            </section>
            <section>
              <h2 className="text-xl font-bold text-gray-800 uppercase border-b-2 border-gray-200 pb-1 tracking-wide">
                TRAINING / COURSES
              </h2>
              <div className="mt-3 text-gray-700 text-sm space-y-2">
                <p>
                  <strong>Zero To Mastery Academy</strong>
                </p>
                <p>Complete Web Developer</p>
                <p>
                  <strong>
                    Oracle DBA training from Tech360hub Software Solution
                  </strong>
                </p>
                <p>Oracle Database Administrator</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;
