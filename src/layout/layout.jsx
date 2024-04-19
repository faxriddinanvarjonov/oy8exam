import React, { useEffect, useState, useRef } from "react";
import Header from "../components/header/header";
import Eye from "../assets/imgs/png/Eye.png";
import EyeGreen from "../assets/imgs/png/EyeGreen.png";
import { Link } from "react-router-dom";
function layout() {
  let [data, setData] = useState([
    {
      id: "bitcoin",
      symbol: "btc",
      name: "Bitcoin",
      image:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
      current_price: 62924,
      market_cap: 1238674678354,
      market_cap_rank: 1,
      fully_diluted_valuation: 1321408236834,
      total_volume: 27332257515,
      high_24h: 64414,
      low_24h: 61773,
      price_change_24h: 142.73,
      price_change_percentage_24h: 0.22734,
      market_cap_change_24h: 8138274242,
      market_cap_change_percentage_24h: 0.66136,
      circulating_supply: 19685187,
      total_supply: 21000000,
      max_supply: 21000000,
      ath: 73738,
      ath_change_percentage: -14.71682,
      ath_date: "2024-03-14T07:10:36.635Z",
      atl: 67.81,
      atl_change_percentage: 92639.98693,
      atl_date: "2013-07-06T00:00:00.000Z",
      roi: null,
      last_updated: "2024-04-17T11:01:37.721Z",
      price_change_percentage_24h_in_currency: 0.2273362026947894,
    },
    {
      id: "ethereum",
      symbol: "eth",
      name: "Ethereum",
      image:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
      current_price: 3060.99,
      market_cap: 367438878470,
      market_cap_rank: 2,
      fully_diluted_valuation: 367438878470,
      total_volume: 15890284163,
      high_24h: 3121.37,
      low_24h: 3003.93,
      price_change_24h: -8.070807488516948,
      price_change_percentage_24h: -0.26297,
      market_cap_change_24h: 3445019103,
      market_cap_change_percentage_24h: 0.94645,
      circulating_supply: 120071733.925221,
      total_supply: 120071733.925221,
      max_supply: null,
      ath: 4878.26,
      ath_change_percentage: -37.29087,
      ath_date: "2021-11-10T14:24:19.604Z",
      atl: 0.432979,
      atl_change_percentage: 706427.45854,
      atl_date: "2015-10-20T00:00:00.000Z",
      roi: {
        times: 64.05800372361934,
        currency: "btc",
        percentage: 6405.800372361934,
      },
      last_updated: "2024-04-17T11:01:40.577Z",
      price_change_percentage_24h_in_currency: -0.2629736003675152,
    },
    {
      id: "ripple",
      symbol: "xrp",
      name: "XRP",
      image:
        "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
      current_price: 0.491551,
      market_cap: 27138339163,
      market_cap_rank: 8,
      fully_diluted_valuation: 49229048307,
      total_volume: 1570796259,
      high_24h: 0.505566,
      low_24h: 0.482491,
      price_change_24h: 0.00272801,
      price_change_percentage_24h: 0.55808,
      market_cap_change_24h: 443596633,
      market_cap_change_percentage_24h: 1.66174,
      circulating_supply: 55119895152,
      total_supply: 99987695075,
      max_supply: 100000000000,
      ath: 3.4,
      ath_change_percentage: -85.53608,
      ath_date: "2018-01-07T00:00:00.000Z",
      atl: 0.00268621,
      atl_change_percentage: 18199.00376,
      atl_date: "2014-05-22T00:00:00.000Z",
      roi: null,
      last_updated: "2024-04-17T11:00:41.526Z",
      price_change_percentage_24h_in_currency: 0.5580777261055022,
    },
    {
      id: "solana",
      symbol: "sol",
      name: "Solana",
      image:
        "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756",
      current_price: 136.73,
      market_cap: 61198100659,
      market_cap_rank: 5,
      fully_diluted_valuation: 78653983380,
      total_volume: 5101213423,
      high_24h: 141.89,
      low_24h: 126.94,
      price_change_24h: 2.83,
      price_change_percentage_24h: 2.11563,
      market_cap_change_24h: 2140014367,
      market_cap_change_percentage_24h: 3.62358,
      circulating_supply: 446709488.076684,
      total_supply: 574126978.980587,
      max_supply: null,
      ath: 259.96,
      ath_change_percentage: -47.18663,
      ath_date: "2021-11-06T21:54:35.825Z",
      atl: 0.500801,
      atl_change_percentage: 27314.72043,
      atl_date: "2020-05-11T19:35:23.449Z",
      roi: null,
      last_updated: "2024-04-17T11:01:52.808Z",
      price_change_percentage_24h_in_currency: 2.1156254657872817,
    },
    {
      id: "binancecoin",
      symbol: "bnb",
      name: "BNB",
      image:
        "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
      current_price: 537.5,
      market_cap: 82679060092,
      market_cap_rank: 4,
      fully_diluted_valuation: 82679060092,
      total_volume: 1511849468,
      high_24h: 547.54,
      low_24h: 524.83,
      price_change_24h: -5.555078848677226,
      price_change_percentage_24h: -1.02294,
      market_cap_change_24h: -281333253.53338623,
      market_cap_change_percentage_24h: -0.33912,
      circulating_supply: 153856150,
      total_supply: 153856150,
      max_supply: 200000000,
      ath: 686.31,
      ath_change_percentage: -21.69987,
      ath_date: "2021-05-10T07:24:17.097Z",
      atl: 0.0398177,
      atl_change_percentage: 1349498.32525,
      atl_date: "2017-10-19T00:00:00.000Z",
      roi: null,
      last_updated: "2024-04-17T11:02:04.763Z",
      price_change_percentage_24h_in_currency: -1.0229392612279025,
    },
    {
      id: "dogecoin",
      symbol: "doge",
      name: "Dogecoin",
      image:
        "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
      current_price: 0.154964,
      market_cap: 22311417063,
      market_cap_rank: 9,
      fully_diluted_valuation: 22317287925,
      total_volume: 2134652339,
      high_24h: 0.158298,
      low_24h: 0.147435,
      price_change_24h: 0.00024904,
      price_change_percentage_24h: 0.16097,
      market_cap_change_24h: 506597508,
      market_cap_change_percentage_24h: 2.32333,
      circulating_supply: 143881816383.705,
      total_supply: 143919676383.705,
      max_supply: null,
      ath: 0.731578,
      ath_change_percentage: -78.82544,
      ath_date: "2021-05-08T05:08:23.458Z",
      atl: 0.0000869,
      atl_change_percentage: 178152.83606,
      atl_date: "2015-05-06T00:00:00.000Z",
      roi: null,
      last_updated: "2024-04-17T11:01:46.859Z",
      price_change_percentage_24h_in_currency: 0.1609677396595182,
    },
    {
      id: "cardano",
      symbol: "ada",
      name: "Cardano",
      image:
        "https://assets.coingecko.com/coins/images/975/large/cardano.png?1696502090",
      current_price: 0.452287,
      market_cap: 15966506325,
      market_cap_rank: 11,
      fully_diluted_valuation: 20352920214,
      total_volume: 433722177,
      high_24h: 0.465611,
      low_24h: 0.440234,
      price_change_24h: -0.01122023557867602,
      price_change_percentage_24h: -2.42072,
      market_cap_change_24h: -304679006.8646221,
      market_cap_change_percentage_24h: -1.87251,
      circulating_supply: 35301704967.837,
      total_supply: 45000000000,
      max_supply: 45000000000,
      ath: 3.09,
      ath_change_percentage: -85.35649,
      ath_date: "2021-09-02T06:00:10.474Z",
      atl: 0.01925275,
      atl_change_percentage: 2247.88343,
      atl_date: "2020-03-13T02:22:55.044Z",
      roi: null,
      last_updated: "2024-04-17T11:01:44.572Z",
      price_change_percentage_24h_in_currency: -2.420724405684054,
    },
    {
      id: "chainlink",
      symbol: "link",
      name: "Chainlink",
      image:
        "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1696502009",
      current_price: 13.48,
      market_cap: 7911264944,
      market_cap_rank: 18,
      fully_diluted_valuation: 13475158117,
      total_volume: 395554713,
      high_24h: 13.61,
      low_24h: 12.85,
      price_change_24h: 0.062333,
      price_change_percentage_24h: 0.46473,
      market_cap_change_24h: 52310324,
      market_cap_change_percentage_24h: 0.66561,
      circulating_supply: 587099971.3083414,
      total_supply: 1000000000,
      max_supply: 1000000000,
      ath: 52.7,
      ath_change_percentage: -74.43519,
      ath_date: "2021-05-10T00:13:57.214Z",
      atl: 0.148183,
      atl_change_percentage: 8991.30383,
      atl_date: "2017-11-29T00:00:00.000Z",
      roi: null,
      last_updated: "2024-04-17T11:01:23.089Z",
      price_change_percentage_24h_in_currency: 0.46472830260535275,
    },
    {
      id: "polkadot",
      symbol: "dot",
      name: "Polkadot",
      image:
        "https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1696512008",
      current_price: 6.6,
      market_cap: 8941705472,
      market_cap_rank: 17,
      fully_diluted_valuation: 9476366929,
      total_volume: 209577961,
      high_24h: 6.76,
      low_24h: 6.39,
      price_change_24h: -0.052866408147346,
      price_change_percentage_24h: -0.79465,
      market_cap_change_24h: 32217626,
      market_cap_change_percentage_24h: 0.36161,
      circulating_supply: 1353797456.82785,
      total_supply: 1434746591.57863,
      max_supply: null,
      ath: 54.98,
      ath_change_percentage: -87.95407,
      ath_date: "2021-11-04T14:10:09.301Z",
      atl: 2.7,
      atl_change_percentage: 145.52618,
      atl_date: "2020-08-20T05:48:11.359Z",
      roi: null,
      last_updated: "2024-04-17T11:00:33.779Z",
      price_change_percentage_24h_in_currency: -0.7946533379194513,
    },
    {
      id: "stellar",
      symbol: "xlm",
      name: "Stellar",
      image:
        "https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1696501482",
      current_price: 0.108512,
      market_cap: 3137856339,
      market_cap_rank: 36,
      fully_diluted_valuation: 5433208563,
      total_volume: 81129596,
      high_24h: 0.110056,
      low_24h: 0.105286,
      price_change_24h: 0.00054258,
      price_change_percentage_24h: 0.50253,
      market_cap_change_24h: 55412321,
      market_cap_change_percentage_24h: 1.79767,
      circulating_supply: 28877673750.0933,
      total_supply: 50001786998.8932,
      max_supply: 50001786998.8932,
      ath: 0.875563,
      ath_change_percentage: -87.61226,
      ath_date: "2018-01-03T00:00:00.000Z",
      atl: 0.00047612,
      atl_change_percentage: 22680.32661,
      atl_date: "2015-03-05T00:00:00.000Z",
      roi: null,
      last_updated: "2024-04-17T11:02:06.087Z",
      price_change_percentage_24h_in_currency: 0.502533251228435,
    },
  ]);
  let [data2, setData2] = useState([]);
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
