import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="">
      <NavBar />
      <Banner />
      <Footer />
    </div>
  );
}
