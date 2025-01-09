import { Link } from "react-router-dom"; // React Router Link
import { ModeToggle } from "@/components/mode-toggle"; // Adjust path to your ModeToggle component

export default function TopHeader({
  isMobileSidebarOpen,
  setIsMobileSidebarOpen,
}: {
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: (open: boolean) => void;
}) {
  return (
    <header className="fixed left-0 top-0 flex w-full items-center justify-between p-4 shadow-md dark:border-b">
      <div className="flex items-center">
        {/* Mobile Sidebar Toggle */}
        <button
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="text-gray-600 md:hidden"
        >
          ☰
        </button>
        {/* Logo */}
        <Link to="/" className="ml-4 flex items-center space-x-2">
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
            Shaik Noor Resume
          </h1>
        </Link>
      </div>

      {/* Show ModeToggle only on medium screens and above */}
      <div>
        <ModeToggle />
      </div>
    </header>
  );
}
