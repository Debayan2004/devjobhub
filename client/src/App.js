import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => {
        console.error("Failed to fetch:", err);
        setMessage("Error connecting to backend.");
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">DevJobHub 💼</h1>
      <p className="text-lg text-gray-700">{message}</p>
    </div>
  );
}

export default App;

