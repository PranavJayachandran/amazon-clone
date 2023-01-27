import React, { useEffect } from "react";
import BuyHere from "../BuyHere/BuyHere";
import FashionHeader from "../FashionHeader/FashionHeader";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

export default function BuyingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <NavBar />
      <FashionHeader />
      <BuyHere />
      <Footer />
    </div>
  );
}
