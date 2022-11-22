import React from "react";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import Bluebanner from "./Bluebanner/Bluebanner";
import Footer from "./Footer/Footer";
import Ethos from "./Ethos/Ethos";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Main />
      <Bluebanner />
      <Ethos />
      <Footer />
    </div>
  );
}
export default HomePage;
