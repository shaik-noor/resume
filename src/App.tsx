import React, { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopHeader from "./components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import NotFound from "./pages/NotFound";
import WorkExperience from "./pages/WorkExperience";
import Skills from "./pages/Skills";
import Certificates from "./pages/Certificates";
import Training from "./pages/Training";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

// Lazy load pages
const Home = React.lazy(() => import("./pages/Home"));

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    const storedState = localStorage.getItem("sidebar-state");
    return storedState === "open" ? true : false;
  });
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    const newState = !isSidebarOpen;
    setIsSidebarOpen(newState);
    localStorage.setItem("sidebar-state", newState ? "open" : "collapsed");
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen((prev) => !prev);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={toggleSidebar}
          isMobileSidebarOpen={isMobileSidebarOpen}
          setIsMobileSidebarOpen={setIsMobileSidebarOpen}
        />

        {/* Main Content */}
        <div
          className={`flex-1 transition-all duration-300 ${
            isSidebarOpen ? "md:ml-64" : "md:ml-16"
          }`}
        >
          {/* Top Header */}
          <TopHeader
            isMobileSidebarOpen={isMobileSidebarOpen}
            setIsMobileSidebarOpen={toggleMobileSidebar}
          />

          {/* Main Content Area */}
          <main className="p-4 mt-[64px]">
            {/* Adjust mt-[64px] to match your TopHeader's height */}
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/work-experience" element={<WorkExperience />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/training" element={<Training />} />
                <Route path="/education" element={<Education />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
