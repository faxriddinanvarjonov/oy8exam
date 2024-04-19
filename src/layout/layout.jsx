import React, { useEffect, useState, useRef } from "react";
import Header from "../components/header/header";
import Eye from "../assets/imgs/png/Eye.png";
import EyeGreen from "../assets/imgs/png/EyeGreen.png";
import { Link } from "react-router-dom";
function layout() {

  let [data, setData] = useState([]);
  let [loader, setLoader] = useState(true);
  let USDollar = new Intl.NumberFormat("en-US", {});
  let [api, setApi] = useState(
    localStorage.getItem("currency")
      ? localStorage.getItem("currency")
      : "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h"
  );
  let [pagination, setPagination] = useState(1);

  let [storage, setStorage] = useState(
    localStorage.getItem("eyes") ? JSON.parse(localStorage.getItem("eyes")) : []
  );
  let SearchRef = useRef(null);

  console.log(api);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
      .finally(setLoader(false));
    console.log(data);
  }, [api]);

  function handleSubmit(e) {
    e.preventDefault();
    SearchRef &&
      setApi(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h&search?query=${SearchRef.current.value}`
      );
  }

  function linkChange(e) {
    setPagination(e);
    console.log(e);
    setApi(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${
        localStorage.getItem("currency")
          ? localStorage.getItem("currency")
          : "btc"
      }&order=gecko_desc&per_page=10&page=${e}&sparkline=false&price_change_percentage=24h`
    );
  }
  pagination < 1 && setPagination(1);

  function handleClick(e) {
    let controler = JSON.parse(JSON.stringify(storage));
    controler.push(e);
    localStorage.setItem("eyes", JSON.stringify(controler));
    setStorage(controler);
  }

  function handleDelete(e) {
    let controler = storage;
    let FilteredArray = controler.filter(function (item) {
      console.log(item.id);
      console.log(e);
      return item.id != e;
    });
    localStorage.setItem("eyes", JSON.stringify(FilteredArray));
    setStorage(FilteredArray);
  }

  return (
    <div>
      <Header></Header>
      <div className="mx-auto container max-w-[1280px] px-[24px] mb-7">
        <h2 className="Montserrat text-[32px] font-normal text-white text-center tracking-[0.25px] mb-[13px]">
          Cryptocurrency Prices by Market Cap
        </h2>
        <form onSubmit={handleSubmit} className="mb-5">
          <input
            ref={SearchRef}
            type="text"
            placeholder="Search For a Crypto Currency.."
            className="input bg-inherit w-full rounded border-[#FFFFFF3B] h-[56px] text-white"
          />
        </form>
        <div className="w-full rounded overflow-hidden">
          <div className="bg-[#87CEEB] w-full flex py-5 px-4">
            <p className="w-full max-w-[445px] Montserrat text-black">Coin</p>
            <p className="w-full max-w-[260px] Montserrat text-end text-black">
              Price
            </p>
            <p className="w-full max-w-[260px] Montserrat text-end text-black">
              24h Change
            </p>
            <p className="w-full max-w-[260px] Montserrat text-end text-black">
              Market cap
            </p>
          </div>
          <div>
            {data.length > 0 && loader == false
              ? data.map((el, index) => {
                  return (
                    <div key={index} className="drawer drawer-end">
                      <input
                        id="my-drawer-4"
                        type="checkbox"
                        className="drawer-toggle"
                      />
                      <div className="drawer-content">
                        <Link
                          onClick={() => {
                            fetch(
                              `https://api.coingecko.com/api/v3/coins/${el.id}`
                            )
                              .then((res) => res.json())
                              .then((data) =>
                                localStorage.setItem(
                                  "view",
                                  JSON.stringify(data)
                                )
                              )
                              .catch((err) => console.log(err))
                              .finally(setLoader(false));
                            console.log(data);
                          }}
                          to={"/view"}
                          className="flex border-b border-[#515151] items-center text-white px-4 "
                        >
                          <div className="w-full max-w-[445px] flex gap-4">
                            <img
                              className="max-h-[50px]"
                              src={el.image}
                              alt="logos"
                            />
                            <div>
                              <h4 className="text-[22px] uppercase">
                                {el.symbol}
                              </h4>
                              <p className="text-[#A9A9A9]">{el.name}</p>
                            </div>
                          </div>
                          <p className="w-full max-w-[260px] text-end py-[38px] text-white ">
                            ₹ {USDollar.format(el.current_price)}
                          </p>
                          <p className="w-full max-w-[260px] flex justify-end py-[38px] gap-[18px] items-center">
                            <label htmlFor="my-drawer-4">
                              <img
                                onClick={(e) => {
                                  handleClick(el);
                                  e.stopPropagation();
                                }}
                                className="max-w-[27px] cursor-pointer hover:opacity-80 duration-300"
                                src={storage.includes(el) ? EyeGreen : Eye}
                                alt="Eye"
                              />
                            </label>
                            <span>
                              {el.price_change_percentage_24h > 0 ? (
                                <span className="text-[#0ECB81] text-sm leading-none font-medium">
                                  +{el.price_change_percentage_24h.toFixed(2)}%
                                </span>
                              ) : (
                                <span className="text-[#FF0000] text-sm leading-none font-medium">
                                  {el.price_change_percentage_24h.toFixed(2)}%
                                </span>
                              )}
                            </span>
                          </p>
                          <p className="w-full max-w-[260px] text-end py-[38px] text-white">
                            ₹ {USDollar.format(el.market_cap)}
                          </p>
                        </Link>
                      </div>
                      <div className="drawer-side z-10">
                        <label
                          htmlFor="my-drawer-4"
                          aria-label="close sidebar"
                          className="drawer-overlay"
                        ></label>
                        <div className="menu p-9 w-[300px] sm:w-[511px] min-h-full bg-[#515151] text-base-content">
                          <h3 className="text-center flex justify-center text-[30px] text-white font-medium mb-9">
                            WATCHLIST
                          </h3>
                          {/* HERE SIDEBAR */}
                          <div className="flex flex-wrap gap-[41px]">
                            {storage.length > 0 &&
                              storage.map((el, index) => {
                                return (
                                  <div
                                    key={index}
                                    className="rounded-[25px] bg-[#14161A] w-[198px] py-[18px] flex flex-col items-center gap-[20px] sm:gap-[38px] justify-center"
                                  >
                                    <img
                                      className=" max-w-[80px]"
                                      src={el.image}
                                      alt="logo"
                                    />
                                    <div className="flex items-center flex-col gap-[15px]">
                                      <p className=" text-white text-[21px] leading-none">
                                        ₹ {USDollar.format(el.current_price)}
                                      </p>
                                      <button
                                        onClick={() => {
                                          handleDelete(el.id);
                                        }}
                                        className="bg-[#FF0000] rounded-none text-white text-[20px] items-center py-[4px] px-[18px]"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : ""}
            {data.length <= 0 && (
              <div>
                <div className="text-[#87CEEB] text-center Montserrat text-3xl mt-9">
                  ERROR NO LIMIT!!!
                </div>
                <div role="alert" className="alert alert-error mt-4 bg-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Error! Task failed...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* PAGINATION */}
      <div className=" flex justify-center gap-2 items-center select-none">
        <svg
          onClick={() => {
            linkChange(pagination - 1);
          }}
          className="mr-[15px]"
          width="7"
          height="11"
          viewBox="0 0 7 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.84167 1.65498L5.66667 0.47998L0.666672 5.47998L5.66667 10.48L6.84167 9.30498L3.025 5.47998L6.84167 1.65498Z"
            fill="#87CEEB"
          />
        </svg>

        <button className="border-none rounded-full text-[#87CEEB] w-8 h-8 bg-[#FFFFFF29] duration-300">
          {pagination}
        </button>
        <button
          onClick={() => {
            linkChange(pagination + 1);
          }}
          className="bg-inherit border-none rounded-full text-[#87CEEB] w-8 h-8 hover:bg-[#FFFFFF29] duration-300"
        >
          {pagination + 1}
        </button>
        <button
          onClick={() => {
            linkChange(pagination + 2);
          }}
          className="bg-inherit border-none rounded-full text-[#87CEEB] w-8 h-8 hover:bg-[#FFFFFF29] duration-300"
        >
          {pagination + 2}
        </button>
        <button
          onClick={() => {
            linkChange(pagination + 3);
          }}
          className="bg-inherit border-none rounded-full text-[#87CEEB] w-8 h-8 hover:bg-[#FFFFFF29] duration-300"
        >
          {pagination + 3}
        </button>
        <button
          onClick={() => {
            linkChange(pagination + 4);
          }}
          className="bg-inherit border-none rounded-full text-[#87CEEB] w-8 h-8 hover:bg-[#FFFFFF29] duration-300"
        >
          {pagination + 4}
        </button>
        <button
          disabled
          className="bg-inherit border-none rounded-full text-[#87CEEB] w-8 h-8 "
        >
          ...
        </button>
        <button
          onClick={() => {
            linkChange(pagination + 9);
          }}
          className="bg-inherit border-none rounded-full text-[#87CEEB] w-8 h-8 hover:bg-[#FFFFFF29] duration-300"
        >
          {pagination + 9}
        </button>
        <svg
          onClick={() => {
            linkChange(pagination + 1);
          }}
          className="rotate-180 ml-[16px]"
          width="7"
          height="11"
          viewBox="0 0 7 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.84167 1.65498L5.66667 0.47998L0.666672 5.47998L5.66667 10.48L6.84167 9.30498L3.025 5.47998L6.84167 1.65498Z"
            fill="#87CEEB"
          />
        </svg>
      </div>
    </div>
  );
}

export default layout;
