import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";

function CryptoView(props) {
  let [data, setData] = useState(
    localStorage.getItem("view") ? JSON.parse(localStorage.getItem("view")) : []
  );
  let SelectRef = useRef();
  function handleChange() {
    console.log(SelectRef.current.value);
    localStorage.setItem("currency", JSON.stringify(SelectRef.current.value));
  }
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
  let currencyMod = localStorage.getItem("curency");
  let dataApex = {
    series: [
      {
        name: "XYZ MOTORS",
        data: [208, 2902, 3129],
      },
    ],
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: "zoom",
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      title: {
        text: "Stock Price Movement",
        align: "left",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0);
          },
        },
        title: {
          text: "Price",
        },
      },
      xaxis: {
        type: "datetime",
      },
      tooltip: {
        shared: false,
      },
    },
    y: {
      formatter: function (val) {
        return (val / 1000000).toFixed(0);
      },
    },
  };

  return (
    <>
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
      </div>
      <div className="flex mt-[25px] justify-center">
        <div className="flex flex-col gap-[20px] items-center w-full max-w-[547px] px-[25px] border-r-2 border-[#808080] min-h-[783px] mr-[40px]">
          <img
            className="max-w-[200px] flex"
            src={data.image.large}
            alt="img"
          />
          <h3 className="Montserrat text-[48px] text-white">{data.name}</h3>
          <p className="text-white Montserrat ">
            {data.description.en.slice(0, data.description.en.indexOf("."))}.
          </p>
          <div className="flex flex-col gap-[20px] justify-start max-w-[547px] w-full">
            <p className="Montserrat text-[#FFFFFF] text-[24px] ">
              Rank: {data.market_cap_rank}
            </p>
            <p className="Montserrat text-[#FFFFFF] text-[24px] ">
              Current Price: ₹{" "}
              {USDollar.format(data.market_data.current_price.aed)}
            </p>
            <p className="Montserrat text-[#FFFFFF] text-[24px] ">
              Market Cap: ₹ {USDollar.format(data.market_data.market_cap.aed)}
            </p>
          </div>
        </div>

        <div className="max-w-[1290px] w-full" id="chart">
          <ReactApexChart
            options={dataApex.options}
            series={dataApex.series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </>
  );
}

export default CryptoView;
