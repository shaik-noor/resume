import React, { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopHeader from "./components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import NotFound from "./pages/NotFound";
import WorkExperience from "./pages/WorkExperience";
import Skills from "./pages/Skills";
import Certificates from "./pages/Certificates";
import Projects from "./pages/Projects.tsx";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import JourneyBlog from "@/pages/JourneyBlog .tsx";
import SimpleLoading from "@/components/SimpleLoading.tsx";
import Resume from "./pages/resume.tsx";

// Lazy load pages
const Home = React.lazy(() => import("./pages/About.tsx"));

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    const storedState = localStorage.getItem("sidebar-state");
    return storedState === "open";
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
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={toggleSidebar}
          isMobileSidebarOpen={isMobileSidebarOpen}
          setIsMobileSidebarOpen={setIsMobileSidebarOpen}
        />

        {/* Main Content */}
        <div
          className={`flex-1 transition-all duration-300 overflow-hidden ${
            isSidebarOpen ? "md:ml-64" : "md:ml-16"
          }`}
        >
          {/* Top Header */}
          <TopHeader
            isMobileSidebarOpen={isMobileSidebarOpen}
            setIsMobileSidebarOpen={toggleMobileSidebar}
          />

          {/* Main Content Area */}
          <main className="antialiased md:subpixel-antialiased flex items-center justify-center p-4 mt-[64px] min-h-[calc(100vh-64px)]">
            {/* Ensure content starts below the TopHeader */}
            <div className="w-full max-w-4xl rounded-lg shadow-lg">
              <Suspense fallback={<SimpleLoading />}>
                <Routes>
                  <Route path="*" element={<NotFound />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/work-experience" element={<WorkExperience />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/certificates" element={<Certificates />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/journey-blog" element={<JourneyBlog />} />
                  <Route path="/resume" element={<Resume />} />
                </Routes>
              </Suspense>
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
