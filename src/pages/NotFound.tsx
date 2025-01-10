import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const [countdown, setCountdown] = useState<number>(5); // Countdown timer state
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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops, the page you're looking for doesn't exist.</p>
      <p>Redirecting to the homepage in {countdown} seconds...</p>
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
