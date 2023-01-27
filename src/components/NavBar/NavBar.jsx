import React from "react";
import amazonlogo from "../../assets/amazon-logo.png";
import { FiSearch } from "react-icons/fi";
import { FaFlag } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { selectValue, selectUserName } from "../../redux/features/CounterSlice";
import { useState } from "react";

function SearchComponent({
  item,
  setSearchInput,
  setSearchData,
  setSearchItem,
}) {
  const handle = () => {
    setSearchInput(item.name);
    setSearchData([]);
    setSearchItem(item._id);
  };
  return (
    <div
      className="px-4 border py-1 border-white hover:border-black hover:bg-gray-100 cursor-pointer"
      onClick={handle}
    >
      {item.name}
    </div>
  );
}

export default function NavBar() {
  const value = useSelector(selectValue);
  const userName = useSelector(selectUserName);
  const [searchInput, setSearchInput] = useState("");
  const [searchMode, setSearchMode] = useState("all");
  const [searchData, setSearchData] = useState([]);
  const [searchItem, setSearchItem] = useState(0);

  const box = useRef(null);
  useOutsideAlerter(box, setSearchData);

  const handle = async (e) => {
    setSearchInput(e.target.value);
    if (e.target.value == "") {
      setSearchData([]);
      return;
    }
    var raw = "";

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://node-api-vercel-5j8j.vercel.app/search/${searchMode}/${e.target.value}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setSearchData(result))
      .catch((error) => console.log("error", error));
  };
  const setMode = (e) => {
    setSearchMode(e.target.value);
  };

  return (
    <div
      ref={box}
      className="sm:fixed z-50 font-sans  py-2 flex flex-col sm:flex-row w-full bg-[#131A22] text-white items-center"
    >
      <Link to="/home">
        <div className="flex justify-center items-center pt-2  w-36">
          <img src={amazonlogo} className="h-9 w-24" />
        </div>
      </Link>
      <div className="px-10">
        <div className="text-xs">Hello</div>
        <div className="-mt-1  -ml-4 flex w-44 ">
          <HiOutlineLocationMarker className=" h-5 w-5 " />
          <div className="text-sm font-bold">Select your Address</div>
        </div>
      </div>
      <div className="-ml-4">
        <div className="flex justify-center items-center">
          <div className="text-black rounded-l-lg px-1 bg-gray-200">
            <select
              className="text-center text-sm bg-gray-200 h-10 rounded-l-lg"
              onChange={setMode}
            >
              <option value="all">All</option>
              <option value="name">Name</option>
              <option value="type">Type</option>
            </select>
          </div>
          <input
            className="px-4 h-10 w-40 sm:w-[410px]  text-black"
            placeholder="Enter something to search"
            value={searchInput}
            onChange={handle}
          />
          <Link to={`/buyingpage/${searchItem}`}>
            <div className="bg-amber-400 flex justify-center items-center rounded-r-lg px-2  h-10">
              <FiSearch className="h-5 text-black w-5" />
            </div>
          </Link>
        </div>
        <div className="overflow-y-auto max-h-[300px] min-h-[0px] -mt-2 bg-white text-black rounded-b-lg absolute w-[410px] pb-2 mr-[36px] ml-[67px]">
          {searchData.map((item) => (
            <div>
              <SearchComponent
                item={item}
                setSearchInput={setSearchInput}
                setSearchData={setSearchData}
                setSearchItem={setSearchItem}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-14 px-4 flex gap-2 pt-3">
        <div className="pt-1">
          <FaFlag />
        </div>
        <div className="font-bold">EN</div>
      </div>
      <div className="ml-2 w-36 flex flex-col justify-center items-center">
        <div className="text-xs font-semibold">
          Hello,{userName.substring(0, 8)}
        </div>
        <div className="font-bold text-sm">Nice to have you</div>
      </div>
      <div className="w-16 text-sm">
        <div className="-mb-1 ">Returns</div>
        <div className=" font-bold">& Orders</div>
      </div>
      <div className="ml-6 flex gap-2">
        <div className="">
          <Link to="/cart">
            <FaShoppingCart className="h-8 w-8 text-amber-400" />
            <div className="text-[#131A22] font-bold -mt-[30px] ml-[15px] text-sm">
              {" "}
              {value}
            </div>
          </Link>
        </div>
        <div className="text-sm pt-3 font-bold">Cart</div>
      </div>
    </div>
  );
}

function useOutsideAlerter(ref, setSeachData) {
  useEffect(() => {
    function handleOutsideClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setSeachData([]);
      }
    }

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [ref]);
}
