import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  selectValue,
  selectPrice,
  removeAllProduct,
} from "../../redux/features/CounterSlice";

import CartSpecific from "./CartSpecific";
import { BsFillPatchCheckFill } from "react-icons/bs";

function Payment({ payment, setPayment }) {
  switch (payment) {
    case 0:
      return <div></div>;
    case 1:
      return (
        <div className="flex justify-center">
          <svg
            aria-hidden="true"
            class="w-16 h-16 mr-2 text-gray-200 animate-spin fill-blue-300"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      );
    case 2:
      return (
        <div>
          <div className="flex gap-2">
            <BsFillPatchCheckFill className="text-green-500 h-6 w-6" />
            <div>Successfull Placed The Order</div>
          </div>
        </div>
      );
  }
}

export default function Cart() {
  const value = useSelector(selectValue);
  const products = useSelector(selectProducts);
  const price = useSelector(selectPrice);
  const dispatch = useDispatch();
  let renderProducts = [];
  const [productshow, setProductShow] = useState([]);
  const [payment, setPayment] = useState(0);
  const [priceZero, setPriceZero] = useState(0);
  let mappingforProducts = new Map();

  //   const handle = async (key, value) => {
  //     var requestOptions = {
  //       method: "GET",
  //       redirect: "follow",
  //     };

  //     await fetch(`http://localhost:5000/${value}`, requestOptions)
  //       .then((response) => response.json())
  //       .then((result) => setFullData(result))
  //       .catch((error) => console.log("error", error));
  //   };

  useEffect(() => {
    renderProducts = [];
    console.log(value, products);
    products.map((item) => {
      if (!mappingforProducts.has(item.id)) {
        mappingforProducts.set(item.id, 1);
      } else
        mappingforProducts.set(item.id, mappingforProducts.get(item.id) + 1);
    });
    console.log(mappingforProducts);
    mappingforProducts.forEach((key, value) => {
      renderProducts.push(value);
    });
    setProductShow(renderProducts);
    console.log(mappingforProducts);
  }, []);

  useEffect(() => {
    console.log(productshow.length);
    products.forEach((item, index) => {
      console.log("G", index, mappingforProducts.get(item));
    });
  }, [productshow]);

  const handle = () => {
    if (price === 0) {
      setPriceZero(1);
      return;
    } else {
      setPriceZero(0);
    }
    setPayment(1);
    setTimeout(() => {
      setPayment(2);
    }, 3000);
  };
  const emptyMyCart = () => {
    dispatch(removeAllProduct());
    setProductShow([]);
  };

  return (
    <div className="pt-[40px] bg-[#f2f2f2]  ">
      <div className="flex">
        <div className="w-9/12 px-10 py-16 min-h-[400px] ">
          <div className="bg-white px-10 py-10">
            <div className="text-4xl font-semibold text-blank mb-10">
              Shopping Cart
            </div>
            {productshow.map((element, index) => (
              <div>
                <CartSpecific id={element} />
              </div>
            ))}
            <div
              className="w-40 text-center py-2 text-white text-xl rounded-xl font-semibold cursor-pointer transition hover:bg-amber-500 hover:text-blue-900 text-amber-400 bg-blue-900 "
              onClick={emptyMyCart}
            >
              Empty My Cart
            </div>
          </div>
        </div>
        <div className="w-3/12 pt-16 bg-[#f2f2f2] ">
          <div className="bg-white py-10 flex flex-col gap-6 px-10  rounded-lg ">
            <div className="flex gap-2">
              <div className="text-lg pt-1">Your Total Price : </div>
              <div className="text-2xl font-semibold">{price}</div>
            </div>
            <div
              className="flex justify-center bg-amber-300 px-4 py-4 rounded-3xl text-lg cursor-pointer hover:bg-amber-400"
              onClick={handle}
            >
              Proceed to Payment
            </div>
            <Payment payment={payment} setPayment={setPayment} />
            {priceZero === 1 ? (
              <div className="-mt-8 text-red-500 font-semibold">
                Please Choose At Least One Product
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
