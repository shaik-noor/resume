import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BriefcaseBusinessIcon,
  ChevronsLeft,
  ChevronsRight,
  GraduationCap,
  Home,
  Mail,
  Presentation,
  ShieldCheckIcon,
  UserCheck,
  Route,
  FileUser,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

type SidebarProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: () => void;
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: (open: boolean) => void;
};

export default function Sidebar({
  isSidebarOpen,
  setIsSidebarOpen,
  isMobileSidebarOpen,
  setIsMobileSidebarOpen,
}: SidebarProps) {
  const handleToggleSidebar = () => {
    setIsSidebarOpen();
  };

  return (
    <>
      {/* Mobile Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 transform dark:bg-gray-900 bg-white shadow-lg transition-transform duration-300 ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2">
            <h1 className="text-lg font-bold text-gray-400">Navigation</h1>
            <button
              onClick={() => setIsMobileSidebarOpen(false)}
              className="flex items-center justify-center p-2 text-gray-400"
            >
              <ChevronsLeft />
            </button>
          </div>
          <SidebarLinks
            isSidebarOpen={true}
            onClose={() => setIsMobileSidebarOpen(false)}
          />
        </div>
      </aside>

      {/* Desktop Sidebar */}
      <aside
        className={`fixed top-16 z-50 mt-2 hidden h-[calc(100vh-4rem)] shadow-lg transition-all duration-300 bg-white dark:bg-gray-900 dark:border-r md:block ${
          isSidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="relative h-full">
          {/* Sidebar links */}
          <SidebarLinks isSidebarOpen={isSidebarOpen} />

          {/* Collapse Toggle positioned at the center of the right border */}
          <button
            onClick={handleToggleSidebar}
            className="absolute right-[-12px] top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full p-2 shadow hover:shadow-md transition"
          >
            {isSidebarOpen ? (
              <ChevronsLeft size={16} />
            ) : (
              <ChevronsRight size={16} />
            )}
          </button>
        </div>
      </aside>
    </>
  );
}

function SidebarLink({
  to,
  icon,
  label,
  isSidebarOpen,
  onClick,
}: {
  to: string;
  icon: React.ReactNode;
  label: string;
  isSidebarOpen: boolean;
  onClick?: () => void;
}) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          to={to}
          onClick={onClick}
          className={`flex items-center px-4 py-3 ${
            isActive
              ? "bg-secondary"
              : "hover:bg-secondary text-gray-600 dark:text-gray-400"
          }`}
          style={{ height: "48px" }} // Fixed height for each item
        >
          <div
            className="flex justify-center items-center"
            style={{ width: "40px" }} // Fixed width for icons
          >
            {icon}
          </div>
          {isSidebarOpen && (
            <span
              className="ml-3 truncate"
              style={{ maxWidth: "160px" }} // Prevent labels from overflowing
            >
              {label}
            </span>
          )}
        </Link>
      </TooltipTrigger>
      {!isSidebarOpen && (
        <TooltipContent side="right" align="center">
          <p>{label}</p>
        </TooltipContent>
      )}
    </Tooltip>
  );
}

function SidebarLinks({
  isSidebarOpen,
  onClose,
}: {
  isSidebarOpen: boolean;
  onClose?: () => void;
}) {
  const handleLinkClick = () => {
    if (onClose) onClose();
  };

  return (
    <TooltipProvider>
      <nav className="flex flex-col">
        <SidebarLink
          to="/"
          icon={<Home className="text-gray-600 dark:text-gray-400" />}
          label="About"
          isSidebarOpen={isSidebarOpen}
          onClick={handleLinkClick}
        />
        <SidebarLink
          to="/resume"
          icon={<FileUser className="text-gray-600 dark:text-gray-400" />}
          label="Resume"
          isSidebarOpen={isSidebarOpen}
          onClick={handleLinkClick}
        />
        <SidebarLink
          to="/work-experience"
          icon={
            <BriefcaseBusinessIcon className="text-gray-600 dark:text-gray-400" />
          }
          label="Work Experience"
          isSidebarOpen={isSidebarOpen}
          onClick={handleLinkClick}
        />
        <SidebarLink
          to="/skills"
          icon={<UserCheck className="text-gray-600 dark:text-gray-400" />}
          label="Skills"
          isSidebarOpen={isSidebarOpen}
          onClick={handleLinkClick}
        />
        <SidebarLink
          to="/certificates"
          icon={
            <ShieldCheckIcon className="text-gray-600 dark:text-gray-400" />
          }
          label="Certificates"
          isSidebarOpen={isSidebarOpen}
          onClick={handleLinkClick}
        />
        <SidebarLink
          to="/projects"
          icon={<Presentation className="text-gray-600 dark:text-gray-400" />}
          label="Projects"
          isSidebarOpen={isSidebarOpen}
          onClick={handleLinkClick}
        />
        <SidebarLink
          to="/education"
          icon={<GraduationCap className="text-gray-600 dark:text-gray-400" />}
          label="Education"
          isSidebarOpen={isSidebarOpen}
          onClick={handleLinkClick}
        />
        <SidebarLink
          to="/contact"
          icon={<Mail className="text-gray-600 dark:text-gray-400" />}
          label="Contact"
          isSidebarOpen={isSidebarOpen}
          onClick={handleLinkClick}
        />
        <SidebarLink
          to="/journey-blog"
          icon={<Route className="text-gray-600 dark:text-gray-400" />}
          label="Journey Blog"
          isSidebarOpen={isSidebarOpen}
          onClick={handleLinkClick}
        />
      </nav>
    </TooltipProvider>
  );
}
