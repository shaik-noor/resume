// src/utils/experience.ts

export interface Experience {
  title: string;
  company: string;
  startDate: Date;
  endDate?: Date;
  totalTime: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Informatica",
    startDate: new Date(2023, 7), // August 2023 (0-indexed)
    endDate: undefined, // Present
    totalTime: "6 months",
    description: [
      "Providing expert-level technical assistance and troubleshooting for Informatica PowerCenter and IICS products, ensuring optimal performance and customer satisfaction.",
      "Collaborating with Product Specialist teams to analyze and resolve complex technical issues through detailed investigation of stack traces, logs, and system configurations.",
      "Working closely with R&D teams to identify, document, and address product bugs and vulnerabilities, contributing to enhanced product stability and security.",
      "Leading the implementation and testing of Emergency Bug Fix (EBF) releases, ensuring rapid deployment of critical fixes to maintain system reliability.",
      "Developing and implementing efficient debugging strategies to minimize customer downtime and optimize issue resolution processes.",
    ],
  },
  {
    title: "Technical Support Engineer",
    company: "Informatica",
    startDate: new Date(2020, 6), // July 2020
    endDate: new Date(2023, 6), // July 2023
    totalTime: "3 years",
    description: [
      "Worked with the Data as a Service team to validate and verify postal addresses, emails, and phone numbers.",
      "Assisted clients with technical issues, documentation, and case escalations.",
      "Developed automation scripts to improve workflow efficiency.",
    ],
  },
  {
    title: "Senior Engineer",
    company: "F1 Info Solutions & Services (Flipkart Subsidiary)",
    startDate: new Date(2018, 9), // October 2018
    endDate: new Date(2019, 4), // May 2019
    totalTime: "8 months",
    description: [
      "Part of the refurbishing and servicing team, responsible for restoring and servicing electronic devices.",
      "Led technical training sessions for new team members.",
      "Optimized repair processes reducing turnaround time by 25%.",
    ],
  },
];

// Calculate the number of months between two dates.
export const calculateDurationInMonths = (
  startDate: Date,
  endDate: Date = new Date()
): number => {
  const years = endDate.getFullYear() - startDate.getFullYear();
  const months = endDate.getMonth() - startDate.getMonth();
  return years * 12 + months;
};

// Format a duration (in months) to a readable string.
export const calculateDuration = (
  startDate: Date,
  endDate: Date = new Date()
): string => {
  const totalMonths = calculateDurationInMonths(startDate, endDate);
  if (totalMonths >= 12) {
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return `${years} year${years > 1 ? "s" : ""}${
      months ? ` ${months} month${months > 1 ? "s" : ""}` : ""
    }`;
  }
  return `${totalMonths} month${totalMonths > 1 ? "s" : ""}`;
};

// Calculate total experience across all jobs.
export const calculateTotalExperience = (exps: Experience[]): string => {
  const totalMonths = exps.reduce((acc, exp) => {
    const endDate = exp.endDate ? exp.endDate : new Date();
    return acc + calculateDurationInMonths(exp.startDate, endDate);
  }, 0);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  return `${years} year${years !== 1 ? "s" : ""}${
    months ? ` ${months} month${months !== 1 ? "s" : ""}` : ""
  }`;
};
