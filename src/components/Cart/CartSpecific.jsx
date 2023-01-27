import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, selectValue } from "../../redux/features/CounterSlice";
import { removeProduct, addProduct } from "../../redux/features/CounterSlice";

export default function CartSpecific({ id, value }) {
  const products = useSelector(selectProducts);
  const [count, setCount] = useState(0);
  const [fullData, setFullData] = useState({
    imglink: "",
    name: "",
    price: 0,
  });
  const dispatch = useDispatch();

  const handle = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(`https://node-api-vercel-5j8j.vercel.app/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setFullData(result))
      .catch((error) => console.log("error", error));
    console.log(id);
  };

  useEffect(() => {
    handle();
  }, []);

  useEffect(() => {
    let temp = 0;
    products.forEach((item) => {
      if (item.id == id) temp++;
    });
    console.log(id, temp);
    setCount(temp);
  }, [products]);

  const removeProductByOne = () => {
    dispatch(
      removeProduct({
        id: fullData._id,
        name: fullData.name,
        price: fullData.price,
      })
    );
  };
  const addProductByOne = () => {
    dispatch(
      addProduct({
        id: fullData._id,
        name: fullData.name,
        price: fullData.price,
      })
    );
  };

  return (
    <div>
      <div className="mb-10 bg-[#f2f2f2] py-4 rounded-3xl px-4 flex gap-10">
        <div className="h-48 w-48 justify-center">
          <img
            src={`https://drive.google.com/uc?export=view&id=${fullData.imglink.substring(
              32,
              65
            )}`}
            className="w-96 h-full rounded-3xl"
          />
        </div>
        <div className="pt-2 ">
          <div className="text-2xl">{fullData.name}</div>
          <div>Price</div>
          <div className="flex">
            <div
              className="mt-[5px] bg-amber-400 rounded-l-md h-8 w-8 flex justify-center items-center cursor-pointer hover:bg-amber-500"
              onClick={addProductByOne}
            >
              -
            </div>
            <div className="w-16 h-8 mt-[5px] flex justify-center items-center bg-[#146eb4] ">
              {count}
            </div>
            <div
              className="mt-[5px] bg-amber-400 rounded-r-md h-8 w-8 flex justify-center items-center cursor-pointer hover:bg-amber-500"
              onClick={removeProductByOne}
            >
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
