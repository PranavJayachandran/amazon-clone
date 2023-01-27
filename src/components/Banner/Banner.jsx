import React, { useEffect } from "react";
import bg from "../../assets/amazon-bg.jpg";
import bags from "../../assets/bags.jpg";
import clothing from "../../assets/clothing.jpg";
import footwear from "../../assets/footwear.jpg";
import watches from "../../assets/watches.jpg";
import mobile1 from "../../assets/mobile1.jpg";
import mobile2 from "../../assets/mobile2.jpg";
import mobile3 from "../../assets/mobile3.jpg";
import mobile4 from "../../assets/mobile4.jpg";
import smartTVs from "../../assets/smartTVs.jpg";
import home1 from "../../assets/home1.jpg";
import home2 from "../../assets/home2.jpg";
import home3 from "../../assets/home3.jpg";
import home4 from "../../assets/home4.jpg";
import grooming from "../../assets/gromming.jpg";
import womenfashion from "../../assets/women-fashion.jpg";
import Slider from "./Slider";
import { Link } from "react-router-dom";

export default function Banner() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <div className="h-14"></div>
      <div className="pt-20 flex w-full flex-col  bg-neutral-200 amazon-bg">
        <div className=" w-full mt-64">
          <div className="px-4 flex gap-5">
            <div className="bg-white flex-1 px-4 py-8">
              <div className="font-bold text-2xl pb-4">
                50-80% off | Fashion
              </div>
              <div>
                <div className="flex flex-col justify-center gap-6 flex-wrap">
                  <div className="">
                    <Link to={`/specificcontentpage/Men`}>
                      <img
                        src={clothing}
                        className="w-full h-full cursor-pointer"
                      />
                      <div className="text-xs text-blue-800 font-semibold">
                        Men's Clothing
                      </div>
                    </Link>
                  </div>

                  <div className=" ">
                    <Link to={`/specificcontentpage/Women`}>
                      <div className="h-48 overflow-hidden">
                        <img
                          src={womenfashion}
                          className="w-full h-80 cursor-pointer"
                        />
                      </div>
                      <div className="text-xs text-blue-800 font-semibold">
                        Women's clothing
                      </div>
                    </Link>
                  </div>

                  <div className="flex-1 text-cyan-600 mt-6 font-semibold cursor-pointer hover:underline">
                    <Link to="/fashion"> See all offers</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white flex-1 h-[450px] px-4 py-6">
              <div className="font-bold text-2xl pb-4">
                Upto 60% Offer for Smart TVs
              </div>
              <div>
                <img src={smartTVs} className="h-[280px]" />
              </div>
              <div className="flex-1 text-cyan-600 mt-6 font-semibold cursor-pointer hover:underline">
                <Link to="/specificcontentpage/Smart-TV"> See all offers</Link>
              </div>
            </div>
            <div className="bg-white flex-1 h-[450px] px-4 py-6">
              <div className="font-bold text-2xl pb-4">
                Latest and upcoming launches on Amazon
              </div>
              <div>
                <div className="flex justify-center gap-6 flex-wrap">
                  <div className="w-5/12">
                    <Link to="/specificcontentpage/Mobile">
                      <img
                        src={mobile1}
                        className="w-full h-24 cursor-pointer"
                      />
                      <div className="text-xs text-blue-800 font-semibold">
                        ABC series Starting 17,999
                      </div>
                    </Link>
                  </div>
                  <div className="w-5/12">
                    <Link to="/specificcontentpage/Mobile">
                      <img
                        src={mobile2}
                        className="w-full h-24 cursor-pointer"
                      />
                      <div className="text-xs text-blue-800 font-semibold">
                        ABC series Starting 17,999
                      </div>
                    </Link>
                  </div>
                  <div className="w-5/12">
                    <Link to="/specificcontentpage/Mobile">
                      <img
                        src={mobile3}
                        className="w-full h-24 cursor-pointer"
                      />
                      <div className="text-xs text-blue-800 font-semibold">
                        ABC series Starting 17,999
                      </div>
                    </Link>
                  </div>
                  <div className="w-5/12">
                    <Link to="/specificcontentpage/Mobile">
                      <img
                        src={mobile4}
                        className="w-full h-24 cursor-pointer"
                      />
                      <div className="text-xs text-blue-800 font-semibold">
                        ABC series Starting 17,999
                      </div>
                    </Link>
                  </div>
                  <div className="flex-1 text-cyan-600 font-semibold cursor-pointer hover:underline">
                    <Link to="/specificcontentpage/Mobile">
                      {" "}
                      See all offers
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white h-[450px] flex-1 px-4 py-6">
              <div className="font-bold text-2xl pb-4">
                Up to 70% off | Home, kitchen & more
              </div>
              <div>
                <div className="flex justify-center gap-6 flex-wrap">
                  <div className="w-5/12">
                    <img src={home1} className="w-full h-24 cursor-pointer" />
                    <div className="text-xs text-blue-800 font-semibold">
                      Up to 80% off | Home & decor
                    </div>
                  </div>
                  <div className="w-5/12">
                    <img src={home2} className="w-full h-24 cursor-pointer" />
                    <div className="text-xs text-blue-800 font-semibold">
                      Up to 70% off | Home & Kitchen
                    </div>
                  </div>
                  <div className="w-5/12">
                    <img src={home3} className="w-full h-24 cursor-pointer" />
                    <div className="text-xs text-blue-800 font-semibold">
                      Up to 80% off | Furniture
                    </div>
                  </div>
                  <div className="w-5/12">
                    <img src={home4} className="w-full h-24 cursor-pointer" />
                    <div className="text-xs text-blue-800 font-semibold">
                      Up to 80% off | Home Improv....
                    </div>
                  </div>
                  <div className="flex-1 text-cyan-600  font-semibold cursor-pointer hover:underline">
                    <Link to="/specificcontentpage/Decor"> See all offers</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center p-2 -mt-32 h-32 ml-[350px] w-[870px] bg-[#146eb4] rounded-md">
            <div className="text-2xl">Amazon Ads Here</div>
          </div>
        </div>
        <div>
          <Slider
            type="Gromming"
            header="Up to 40% off | Great offers on Grooming Products"
          />
          <Slider
            type="Footwear"
            header="Up to 40% off | Great offers on FootWears"
          />
        </div>
      </div>
    </div>
  );
}
