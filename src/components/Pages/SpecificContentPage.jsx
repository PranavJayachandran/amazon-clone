import React, { useEffect } from "react";
import FashionBody from "../FashionBody/FashionBody";
import FashionHeader from "../FashionHeader/FashionHeader";
import Footer from "../Footer/Footer";
import FashionContent from "../Fashion/FashionContent";
import NavBar from "../NavBar/NavBar";
import { useParams } from "react-router-dom";

export default function SpecificContentPage() {
  const { type } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <NavBar />
      {type == "Men" || type == "Women" ? <FashionHeader /> : <></>}

      <FashionContent />
      <Footer />
    </div>
  );
}
