import "./header.css";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function header() {
  const [user, setUser] = useState("Jesse Hall");

  let [data, setData] = useState([]);
  let [loader, setLoader] = useState(true);
  let USDollar = new Intl.NumberFormat("en-US", {});
  let currency = [
    "btc",
    "eth",
    "ltc",
    "bch",
    "bnb",
    "eos",
    "xrp",
    "xlm",
    "link",
    "dot",
    "yfi",
    "usd",
    "aed",
    "ars",
    "aud",
    "bdt",
    "bhd",
    "bmd",
    "brl",
    "cad",
    "chf",
    "clp",
    "cny",
    "czk",
    "dkk",
    "eur",
    "gbp",
    "gel",
    "hkd",
    "huf",
    "idr",
    "ils",
    "inr",
    "jpy",
    "krw",
    "kwd",
    "lkr",
    "mmk",
    "mxn",
    "myr",
    "ngn",
    "nok",
    "nzd",
    "php",
    "pkr",
    "pln",
    "rub",
    "sar",
    "sek",
    "sgd",
    "thb",
    "try",
    "twd",
    "uah",
    "vef",
    "vnd",
    "zar",
    "xdr",
    "xag",
    "xau",
    "bits",
    "sats",
  ];
  let SelectRef = useRef();

  function handleChange() {
    console.log(SelectRef.current.value);
    localStorage.setItem("currency", JSON.stringify(SelectRef.current.value));
  }

  console.log(data);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h"
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
      .finally(setLoader(false));
  }, []);

  return (
    <div className="mx-auto py-[16px] px-[20px] xl:px-0">
      <div className="flex justify-between items-center max-w-[1280px] mx-auto container">
        <Link to={"/"} className="sm:text-[20px] Montserrat text-[#87CEEB] ">
          CRYPTOFOLIO
        </Link>
        <div className="flex sm:gap-4">
          <select
            defaultValue={
              localStorage.getItem("currency")
                ? localStorage.getItem("currency")
                : "usd"
            }
            ref={SelectRef}
            onChange={handleChange}
            className="select bg-inherit text-white max-w-xs uppercase"
          >
            {currency.map((el, index) => {
              return (
                <option key={index} className="text-black " value={el}>
                  {el}
                </option>
              );
            })}
          </select>
          <label
            className="btn bg-[#87CEEB] text-[#000000DE] border-none sm:w-[133px]"
            htmlFor="my-drawer-4"
          >
            WATCH LIST
          </label>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden bg-header h-[400px]">
        <div className="flex mx-auto mt-[70px] flex-col">
          <h1 className="Montserrat text-[#87CEEB] text-[35px] lg:text-[60px] tracking-[-0.5px] text-center leading-none">
            CRYPTOFOLIO WATCH LIST
          </h1>
          <p className="Montserrat text-center text-[#A9A9A9] text-[10px] sm:text-[14px]">
            Get all the Info regarding your favorite Crypto Currency
          </p>
        </div>
        <div className="mx-auto mt-[60px] logos">
          {loader == false ? (
            <div className="logo-slide text-8xl flex gap-[80px] sm:gap-[228px] font-bold ">
              {data.length > 0 &&
                data.map((el, index) => {
                  return (
                    <div
                      className="flex flex-col justify-center items-center gap-[10px] w-[120px]"
                      key={index}
                    >
                      <img
                        className=" max-w-[80px]"
                        src={el.image}
                        alt="logo"
                      />
                      <p className="text-[16px] uppercase text-white flex items-center gap-[4px]">
                        {el.symbol}
                        {el.price_change_percentage_24h > 0 ? (
                          <span className="text-[#0ECB81] text-sm leading-none">
                            +{el.price_change_percentage_24h.toFixed(2)}%
                          </span>
                        ) : (
                          <span className="text-[#FF0000] text-sm leading-none">
                            {el.price_change_percentage_24h.toFixed(2)}%
                          </span>
                        )}
                      </p>
                      <p className=" text-white text-[21px] leading-none">
                        ₹ {USDollar.format(el.current_price)}
                      </p>
                    </div>
                  );
                })}
              {data.length > 0 &&
                data.map((el, index) => {
                  return (
                    <div
                      className="flex flex-col justify-center items-center gap-[10px] w-[120px]"
                      key={index}
                    >
                      <img
                        className=" max-w-[80px]"
                        src={el.image}
                        alt="logo"
                      />
                      <p className="text-[16px] uppercase text-white flex items-center gap-[4px]">
                        {el.symbol}
                        {el.price_change_percentage_24h > 0 ? (
                          <span className="text-[#0ECB81] text-sm leading-none">
                            +{el.price_change_percentage_24h.toFixed(2)}%
                          </span>
                        ) : (
                          <span className="text-[#FF0000] text-sm leading-none">
                            {el.price_change_percentage_24h.toFixed(2)}%
                          </span>
                        )}
                      </p>
                      <p className=" text-white text-[21px] leading-none">
                        ₹ {USDollar.format(el.current_price)}
                      </p>
                    </div>
                  );
                })}
            </div>
          ) : (
            <span className="loading loading-spinner loading-lg text-white"></span>
          )}
          {data.length <= 0 && (
            <div>
              <div className="text-[#87CEEB] text-center Montserrat text-3xl">
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
  );
}

export default header;
