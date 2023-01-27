import React from "react";
import { useState, useEffect } from "react";
import Carousel from "react-grid-carousel";
import { Link } from "react-router-dom";

export default function FashionSlider({ text, image, type }) {
  const [data, setData] = useState([]);
  const getData = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(
      `https://node-api-vercel-5j8j.vercel.app/${type}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
    console.log("DAT", data);
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="mb-10 bg-white mt-10 pt-4 pb-10 bg-white mx-4">
      <div className="flex gap-6 pb-4">
        <div className="px-4 text-2xl font-bold">{text}</div>
        <div className="pt-1 text-cyan-600 font-semibold cursor-pointer hover:underline">
          <Link to={`/specificcontentpage/${type}`}>See all offers</Link>
        </div>
      </div>
      <Carousel cols={6} rows={1} gap={4} loop>
        {data.map((item) => (
          <Carousel.Item>
            <Link to={`/buyingpage/${item._id}`}>
              <div className="bg-gray-200 p-2 rounded-full h-full flex h-48 w-40">
                <img
                  width="100%"
                  className="rounded-full"
                  src={`https://drive.google.com/uc?export=view&id=${item.imglink.substring(
                    32,
                    65
                  )}`}
                />
              </div>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
