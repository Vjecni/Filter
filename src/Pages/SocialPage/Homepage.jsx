import React from "react";

// components
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";

const Homepage = () => {
  return (
    <>
      <Navbar />

      <main>
        <Sidebar />
      </main>
    </>
  );
};

export default Homepage;
