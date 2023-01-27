import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import menfashion1 from "../../assets/menfashion1.jpeg";

export default function MenFashionContent() {
  const [data, setData] = useState([]);
  const { type } = useParams();
  const [header, setHeader] = useState("");
  const handle = async () => {
    console.log(type);
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
  };

  useEffect(() => {
    console.log(data, type);
  }, [data]);
  useEffect(() => {
    console.log(type);
    switch (type) {
      case "Men":
        setHeader("Get your Perfect Dress Here");
        break;
      case "Women":
        setHeader("Get your Perfect Dress Here");
        break;
      case "Footwear":
        setHeader("Pick your grooves here");
        break;
      case "Gromming":
        setHeader("Groom yourself for the perfect day");
        break;
      case "Smart-TV":
        setHeader("Its Time to Stream");
        break;
      case "Mobile":
        setHeader("Find Your Favourite Phone Here");
        break;
    }
    handle();
  }, []);

  return (
    <div className="-mb-10">
      <div className="bg-[#f2f2f2]">
        <div className="ml-24 pt-20 text-3xl font-semibold">{header}</div>
        <div className="flex justify-center gap-4 flex-wrap mx-10 my-10">
          {data.map((item) => (
            <div className="bg-white w-64 border mb-10">
              <Link to={`/buyingpage/${item._id}`}>
                <div className="py-2 border-b-2 rounded-full   flex justify-center items-center h-60 overflow-hidden">
                  <img
                    className="rounded-full w-full h-80"
                    src={`https://drive.google.com/uc?export=view&id=${item.imglink.substring(
                      32,
                      65
                    )}`}
                  />
                </div>
              </Link>
              <div className="text-center text-xl ">{item.name}</div>
              <div className="text-center text-3xl font-semibold">
                Rs {item.price}
              </div>
              <div className="flex justify-center py-4 ">
                <div className="text-center bg-[#ff9900] px-2 py-1 rounded-md text-blue-900">
                  Free Delivery by Amazon
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
