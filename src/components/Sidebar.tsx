// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   BriefcaseBusinessIcon,
//   ChevronsLeft,
//   ChevronsRight,
//   GraduationCap,
//   Home,
//   Mail,
//   NotebookPen,
//   ShieldCheckIcon,
//   UserCheck,
// } from "lucide-react";

// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "./ui/tooltip"; // Adjust path as needed

// type SidebarProps = {
//   isSidebarOpen: boolean;
//   setIsSidebarOpen: () => void;
//   isMobileSidebarOpen: boolean;
//   setIsMobileSidebarOpen: (open: boolean) => void;
// };

// export default function Sidebar({
//   isSidebarOpen,
//   setIsSidebarOpen,
//   isMobileSidebarOpen,
//   setIsMobileSidebarOpen,
// }: SidebarProps) {
//   const handleToggleSidebar = () => {
//     setIsSidebarOpen();
//   };

//   return (
//     <>
//       {/* Mobile Sidebar */}
//       <aside
//         className={`fixed inset-y-0 left-0 z-50 transform bg-secondary text-gray-400 shadow-lg transition-transform duration-300 ${
//           isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:hidden`}
//       >
//         <div className="flex h-full flex-col">
//           <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2">
//             <h1 className="text-lg font-bold leading-none text-gray-400">
//               Navigation
//             </h1>
//             <button
//               onClick={() => setIsMobileSidebarOpen(false)}
//               className="flex items-center justify-center p-2 text-gray-400"
//             >
//               <ChevronsLeft className="h-5 w-5" />
//             </button>
//           </div>

//           <SidebarLinks
//             isSidebarOpen={true}
//             onClose={() => setIsMobileSidebarOpen(false)}
//           />
//         </div>
//       </aside>

//       {/* Desktop Sidebar */}
//       <aside
//         className={`fixed top-16 z-50 mt-4 hidden h-[calc(100vh-4rem)] shadow-lg transition-all duration-300 dark:border-r md:block ${
//           isSidebarOpen ? "w-64" : "w-16"
//         }`}
//       >
//         <div className="flex h-full flex-col">
//           <SidebarLinks isSidebarOpen={isSidebarOpen} />
//           <div
//             className={`flex items-center justify-${
//               isSidebarOpen ? "between" : "center"
//             } border-t px-4 py-4`}
//           >
//             {isSidebarOpen && (
//               <span className="font-medium text-gray-600 dark:text-gray-400">
//                 Collapse
//               </span>
//             )}
//             <button
//               onClick={handleToggleSidebar}
//               className="p-2 text-gray-600 dark:text-gray-400"
//             >
//               {isSidebarOpen ? <ChevronsLeft /> : <ChevronsRight />}
//             </button>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// }

// function SidebarLinks({
//   isSidebarOpen,
//   onClose,
// }: {
//   isSidebarOpen: boolean;
//   onClose?: () => void;
// }) {
//   const handleLinkClick = () => {
//     if (onClose) onClose();
//   };

//   return (
//     <TooltipProvider>
//       <nav className="flex flex-col gap-1">
//         <SidebarLink
//           to="/"
//           icon={<Home className={"text-gray-600 dark:text-gray-400"} />}
//           label="Home"
//           isSidebarOpen={isSidebarOpen}
//           onClick={handleLinkClick}
//         />
//         <SidebarLink
//           to="/work-experience"
//           icon={
//             <BriefcaseBusinessIcon
//               className={"text-gray-600 dark:text-gray-400"}
//             />
//           }
//           label="Work Experience"
//           isSidebarOpen={isSidebarOpen}
//           onClick={handleLinkClick}
//         />
//         <SidebarLink
//           to="/skills"
//           icon={<UserCheck className={"text-gray-600 dark:text-gray-400"} />}
//           label="Skills"
//           isSidebarOpen={isSidebarOpen}
//           onClick={handleLinkClick}
//         />
//         <SidebarLink
//           to="/self-learning-certificates"
//           icon={
//             <ShieldCheckIcon className={"text-gray-600 dark:text-gray-400"} />
//           }
//           label="Self-Learning & Certificates"
//           isSidebarOpen={isSidebarOpen}
//           onClick={handleLinkClick}
//         />
//         <SidebarLink
//           to="/training"
//           icon={<NotebookPen className={"text-gray-600 dark:text-gray-400"} />}
//           label="Training"
//           isSidebarOpen={isSidebarOpen}
//           onClick={handleLinkClick}
//         />
//         <SidebarLink
//           to="/education"
//           icon={
//             <GraduationCap className={"text-gray-600 dark:text-gray-400"} />
//           }
//           label="Education"
//           isSidebarOpen={isSidebarOpen}
//           onClick={handleLinkClick}
//         />
//         <SidebarLink
//           to="/contact"
//           icon={<Mail className={"text-gray-600 dark:text-gray-400"} />}
//           label="Contact"
//           isSidebarOpen={isSidebarOpen}
//           onClick={handleLinkClick}
//         />
//       </nav>
//     </TooltipProvider>
//   );
// }

// function SidebarLink({
//   to,
//   icon,
//   label,
//   isSidebarOpen,
//   onClick,
// }: {
//   to: string;
//   icon: React.ReactNode;
//   label: string;
//   isSidebarOpen: boolean;
//   onClick?: () => void;
// }) {
//   return (
//     <Tooltip>
//       <TooltipTrigger asChild>
//         <Link
//           to={to}
//           className="flex items-center px-4 py-3 hover:bg-secondary"
//           onClick={onClick}
//         >
//           <div className="flex w-6 justify-center">{icon}</div>
//           {isSidebarOpen && (
//             <span className="ml-3 text-gray-600 dark:text-gray-400">
//               {label}
//             </span>
//           )}
//         </Link>
//       </TooltipTrigger>
//       {!isSidebarOpen && (
//         <TooltipContent side="right" align="center" className="ml-2">
//           <p>{label}</p>
//         </TooltipContent>
//       )}
//     </Tooltip>
//   );
// }


// 
import React from "react";
import { Link } from "react-router-dom";
import {
  BriefcaseBusinessIcon,
  ChevronsLeft,
  ChevronsRight,
  GraduationCap,
  Home,
  Mail,
  NotebookPen,
  ShieldCheckIcon,
  UserCheck,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"; // Adjust path as needed

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
        className={`fixed inset-y-0 left-0 z-50 transform bg-secondary text-gray-400 shadow-lg transition-transform duration-300 ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2">
            <h1 className="text-lg font-bold leading-none text-gray-400">
              Navigation
            </h1>
            <button
              onClick={() => setIsMobileSidebarOpen(false)}
              className="flex items-center justify-center p-2 text-gray-400"
            >
              <ChevronsLeft className="h-5 w-5" />
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
        className={`fixed top-16 z-50 mt-4 hidden h-[calc(100vh-4rem)] shadow-lg transition-all duration-300 dark:border-r md:block ${
          isSidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="flex h-full flex-col">
          <SidebarLinks isSidebarOpen={isSidebarOpen} />
          <div
            className={`flex items-center justify-${
              isSidebarOpen ? "between" : "center"
            } border-t px-4 py-4`}
          >
            {isSidebarOpen && (
              <span className="font-medium text-gray-600 dark:text-gray-400">
                Collapse
              </span>
            )}
            <button
              onClick={handleToggleSidebar}
              className="p-2 text-gray-600 dark:text-gray-400"
            >
              {isSidebarOpen ? <ChevronsLeft /> : <ChevronsRight />}
            </button>
          </div>
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
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          to={to}
          className={`flex items-center px-4 py-3 hover:bg-secondary`}
          onClick={onClick}
          style={{
            height: "48px", // Fixed height for each item
          }}
        >
          {/* Icon Container with Fixed Width */}
          <div
            className="flex justify-center items-center"
            style={{ width: "40px" }} // Fixed width for icons
          >
            {icon}
          </div>

          {/* Label */}
          {isSidebarOpen && (
            <span
              className="ml-3 truncate text-gray-600 dark:text-gray-400"
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
          label="Home"
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
          to="/training"
          icon={<NotebookPen className="text-gray-600 dark:text-gray-400" />}
          label="Training"
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
      </nav>
    </TooltipProvider>
  );
}