// import { Link } from "react-router-dom"; // React Router Link
// import { ModeToggle } from "@/components/mode-toggle"; // Adjust path to your ModeToggle component
// import { Button } from "./ui/button";

// export default function TopHeader({
//   isMobileSidebarOpen,
//   setIsMobileSidebarOpen,
// }: {
//   isMobileSidebarOpen: boolean;
//   setIsMobileSidebarOpen: (open: boolean) => void;
// }) {
//   const goToWebsite = () => {
//     window.open("https://noruj.com", "_blank");
//   };
//   return (
//     <header className="fixed left-0 top-0 flex w-full items-center justify-between p-4 shadow-md dark:border-b">
//       <div className="flex items-center">
//         {/* Mobile Sidebar Toggle */}
//         <button
//           onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
//           className="text-gray-600 md:hidden"
//         >
//           ☰
//         </button>
//         {/* Logo */}
//         <Link to="/" className="ml-4 flex items-center space-x-2">
//           <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
//             Shaik Noor Resume
//           </h1>
//         </Link>
//       </div>

//       {/* Show ModeToggle only on medium screens and above */}
//       <div>
//         <Button onClick={goToWebsite} variant="outline" className="mb:hidden">My Website</Button>
//         <ModeToggle />
//       </div>
//     </header>
//   );
// }


// 
import { Link } from "react-router-dom"; // React Router Link
import { ModeToggle } from "@/components/mode-toggle"; // Adjust path to your ModeToggle component
import { Button } from "./ui/button";

export default function TopHeader({
  isMobileSidebarOpen,
  setIsMobileSidebarOpen,
}: {
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: (open: boolean) => void;
}) {
  const goToWebsite = () => {
    window.open("https://noruj.com", "_blank");
  };

  return (
    <header className="fixed left-0 top-0 z-10 flex w-full items-center justify-between bg-white p-4 shadow-md dark:bg-gray-900 dark:border-b">
      <div className="flex items-center">
        {/* Mobile Sidebar Toggle */}
        <button
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="text-gray-600 dark:text-gray-300 md:hidden"
          aria-label="Toggle Sidebar"
        >
          ☰
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="ml-4 flex items-center space-x-2 text-gray-900 dark:text-gray-100"
        >
          <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
            Shaik Noor
          </h1>
        </Link>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        {/* Website Button - Hidden on smaller screens */}
        <Button
          onClick={goToWebsite}
          variant="outline"
          className="hidden md:block"
        >
          My Website
        </Button>

        {/* Mode Toggle - Visible on all screens */}
        <ModeToggle />
      </div>
    </header>
  );
}
