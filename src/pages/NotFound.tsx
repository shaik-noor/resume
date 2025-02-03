import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";

const NotFound: React.FC = () => {
  const [countdown, setCountdown] = useState<number>(10); // Countdown timer state
  const navigate = useNavigate(); // For programmatic navigation

  useEffect(() => {
    // Countdown interval
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // Redirect to "/" after 5 seconds
    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    // Cleanup intervals and timeouts on component unmount
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (

    <main className="flex items-center justify-center py-10">
        <div className="container mx-auto px-6 py-6">
            {/* How It Works Section */}
            <section className="space-y-12">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    {/* About Section */}
                    <div className="text-center md:text-left">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-4xl">
                            404 - Page Not Found
                        </h1>
                        <hr className="mb-2 mt-1 h-0.5 bg-primary border-none"/>
                        <p>Oops, the page you're looking for doesn't exist.</p>
                        <p>Redirecting to the homepage in {countdown} seconds...</p>
                        <div className="mt-4">
                        <Button onClick={() => navigate("/")}>
                            Go to Home
                        </Button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    </main>
)
    ;
};

export default NotFound;
