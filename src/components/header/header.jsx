import "./header.css";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function header() {
  const [user, setUser] = useState("Jesse Hall");
  let [data2, setData2] = useState([
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
