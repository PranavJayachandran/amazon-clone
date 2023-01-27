import React from "react";

export default function FashionHeader() {
  return (
    <div>
      <div className="pt-16 border-b-2 border-gray-300 items-center flex gap-10 py-2 px-10">
        <div className="w-2/12 text-2xl font-bold">
          <div>Amazon Fashion</div>
        </div>
        <div className="w-10/12 flex ">
          <div className="text-sm flex-1 flex items-center justify-center decoration-orange-400 underline-offset-2 decoration-2 hover:underline cursor-pointer">
            <div className="">Women</div>
          </div>
          <div className="text-sm flex-1 flex items-center justify-center decoration-orange-400 underline-offset-2 decoration-2 hover:underline cursor-pointer">
            <div className="">Men</div>
          </div>
          <div className="text-sm flex-1 flex items-center justify-center decoration-orange-400 underline-offset-2 decoration-2 hover:underline cursor-pointer">
            <div className="">Kids</div>
          </div>
          <div className="text-sm flex-1 flex items-center justify-center decoration-orange-400 underline-offset-2 decoration-2 hover:underline cursor-pointer">
            <div className="">Bags and Luggage</div>
          </div>
        </div>
      </div>
    </div>
  );
}
