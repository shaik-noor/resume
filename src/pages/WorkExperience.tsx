import React from "react";
import { format } from "date-fns";
import {
  experiences,
  calculateDuration,
  calculateTotalExperience,
} from "@/utils/experience";

const WorkExperience: React.FC = () => {
  const totalExperience = calculateTotalExperience(experiences);

  return (
    <main className="flex items-center justify-center py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <section className="space-y-4 mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-4xl">
            Work Experience
          </h1>
          <hr className="mb-4 mt-2 h-0.5 bg-primary border-none" />
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A timeline showcasing my professional journey and contributions.
            <span className="font-semibold">
              {" "}
              Total Experience: {totalExperience}
            </span>
          </p>
        </section>

        {/* Timeline Section */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-6 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />

          {/* Experience Items */}
          <div className="space-y-8 ml-8 md:ml-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                {/* Timeline Marker */}
                <div className="absolute -left-7 md:-left-8 top-4 h-4 w-4 bg-primary rounded-full border-4 border-white dark:border-gray-900" />
                {/* Content Card */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
                    {experience.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {experience.company} •{" "}
                    {format(experience.startDate, "MMM yyyy")} -{" "}
                    {experience.endDate
                      ? format(experience.endDate, "MMM yyyy")
                      : "Present"}{" "}
                    •
                    <span className="italic">
                      {" "}
                      {calculateDuration(
                        experience.startDate,
                        experience.endDate || new Date()
                      )}
                    </span>
                  </p>
                  <div className="space-y-4">
                    {experience.description.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-gray-600 dark:text-gray-300 text-base leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkExperience;
