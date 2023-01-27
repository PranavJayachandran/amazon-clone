import React from "react";
import FashionSlider from "./FashionSlider";
import womenfashion from "../../assets/women-fashion.jpg";
import mensfashion from "../../assets/men-fashion.jpg";
import gromming from "../../assets/gromming.jpg";

export default function FashionBody() {
  return (
    <div className="px-20 py-10">
      <div className="bg-gray-100 py-6">
        <FashionSlider
          image={womenfashion}
          text="Women's Fashion"
          type="Women"
        />
        <FashionSlider image={mensfashion} text="Men's Fashion" type="Men" />
      </div>
    </div>
  );
}
