import React, { useEffect } from "react";
import FashionBody from "../FashionBody/FashionBody";
import FashionHeader from "../FashionHeader/FashionHeader";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

export default function FashionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <NavBar />
      <FashionHeader />
      <FashionBody />
      <Footer />
    </div>
  );
}
