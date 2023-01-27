import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import bags from "../../assets/bags.jpg";
import {
  addProduct,
  removeProduct,
  removeAllProduct,
} from "../../redux/features/CounterSlice";

export default function BuyHere() {
  const { id } = useParams();
  const [fullData, setFullData] = useState({
    imglink: "",
    name: "",
    price: 0,
  });

  const handle = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(`https://node-api-vercel-5j8j.vercel.app/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setFullData(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    handle();
  });

  useEffect(() => {
    console.log(fullData);
  }, [fullData]);

  const addingCart = () => {
    dispatch(
      addProduct({
        id: fullData._id,
        name: fullData.name,
        price: fullData.price,
      })
    );
  };
  const removeCart = () => {
    dispatch(
      removeProduct({
        id: fullData._id,
        name: fullData.name,
        price: fullData.price,
      })
    );
  };

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="py-10 px-24 gap-10 flex h-[500px]">
        <div className="flex-1 flex justify-center">
          <img
            src={`https://drive.google.com/uc?export=view&id=${fullData.imglink.substring(
              32,
              65
            )}`}
            className="w-96 h-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <div className="text-3xl font-semibold">{fullData.name}</div>
          <div className="-mt-1">From abc place</div>
          <div className="mt-10 flex gap-4 items-center">
            <div className="text-md">Price</div>
            <div className="text-xl text-red-600">Rs {fullData.price}</div>
          </div>
          <div className="mt-6">
            <div className="text-xl font-semibold">About this Item</div>
            <div className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              adipisci! Dolorem rerum explicabo voluptates, nihil eligendi atque
              cupiditate enim modi labore quos blanditiis, repellat quisquam
              alias eveniet! Reiciendis, esse iusto!
            </div>
          </div>
          <div className="mt-4 border w-96 flex flex-col py-10 px-10">
            <div
              className="py-2 flex justify-center bg-yellow-300 rounded-full hover:bg-yellow-400 cursor-pointer"
              onClick={addingCart}
            >
              Add to Cart
            </div>
            <div className="mt-4 pt-4  border-t-2 flex justify-center">
              <div
                className="bg-gray-200 py-2 flex justify-center rounded-full w-full hover:bg-gray-300 cursor-pointer"
                onClick={removeCart}
              >
                Remove from Cart
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
