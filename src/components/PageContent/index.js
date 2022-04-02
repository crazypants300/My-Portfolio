import React, { useState } from "react";

import Nav from "../Nav";
import Foot from "../Foot";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";

const PageContent = () => {
  const [currentPage, setCurrentPage] = useState("");

  const renderPage = () => {
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    } 
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="">
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
      {renderPage()}
      <Foot></Foot>
    </div>
  );
};

export default PageContent;
