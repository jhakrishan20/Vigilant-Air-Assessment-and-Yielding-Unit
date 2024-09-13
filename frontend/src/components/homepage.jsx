import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import GaugeChart from "react-gauge-chart";
import { Line } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../assets/bg.png";
import Logo from "../assets/LOGO.png";
import LoginSignUp from "./login";

// Set default marker icon for Leaflet
let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

// AQI Gauge Component
function AQIGauge({ value }) {
  return (
    <div className="flex flex-col items-center">
      <GaugeChart
        id="aqi-gauge"
        nrOfLevels={5}
        arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
        colors={["#00FF00", "#FFBF00", "#FF8C00", "#FF0000", "#8B0000"]}
        percent={value / 500}
        textColor="#000000"
        className="w-32 h-32"
      />
      <div className="text-center mt-2">
        <h2 className="text-2xl font-bold">{value}</h2>
        <p className="text-sm">AQI</p>
        <span className="text-xs text-green-600">Very Good</span>
      </div>
    </div>
  );
}

// Forecast Graph Component
const data = {
  labels: [
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
  ],
  datasets: [
    {
      label: "Air Quality Index",
      data: [20, 25, 30, 40, 35, 50, 55, 60, 45, 50, 60, 65, 70],
      borderColor: "#4CAF50",
      fill: true,
      backgroundColor: "rgba(76, 175, 80, 0.2)",
      pointBackgroundColor: "#4CAF50",
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: true,
        drawBorder: false,
      },
    },
  },
};

function ForecastGraph() {
  return (
    <div className="h-64 w-full">
      <Line data={data} options={options} />
    </div>
  );
}

// Main Dashboard Component
export default function HomePage() {
  const delhiCoordinates = [28.6139, 77.209];
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/LoginSignUp");
  };

  return (
    <div className="rounded-lg shadow-lg ml-14 w-end" style={{ backgroundColor: "#f6f6f4" }}>
      <div className="flex items-center justify-between">
        <div
          className="flex items-center bg-white border rounded-full ml-5 px-4 py-1 gap-5 shadow-md"
          style={{ width: "400px" }}
        >
          <button
            className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-600"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Enter Your Pincode"
            className="bg-transparent border-none outline-none text-gray-800 placeholder-gray-400 w-full"
          />
        </div>
        {/* <img src={Logo} className="w-44 h-16 ml-2" /> */}
        <h1 style={{ color: "#004953" }} className="text-7xl font-bold -ml-80">
          VAAYU
        </h1>
        <button
          className="text-white px-4 py-2 mr-5 rounded-md focus:outline-none focus:ring-2"
          style={{ backgroundColor: "#004953" }}
          onClick={handleClick}
        >
          Login
        </button>
      </div>

      {/* Map Section */}
      <MapContainer
        center={delhiCoordinates}
        zoom={12}
        zoomControl={false}
        style={{ height: "400px", width: "100%" }}
        className="mt-2"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={delhiCoordinates}>
          <Popup>Delhi, the capital of India.</Popup>
        </Marker>
      </MapContainer>

      <div className="rounded-lg shadow-lg">
        <div className="flex items-center justify-between space-x-8 ">
          <div
            className="flex flex-col items-center justify-center h-80 -mb-4 border-e-2 border-slate-200"
            style={{
              backgroundImage: `url(${BackgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold">New Delhi, DL</h3>
              <p className="text-gray-500">India</p>
            </div>
            <AQIGauge value={201} />
          </div>

          {/* Air Quality Forecast */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Air Quality Forecast</h3>
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-2">
                <button className="px-4 py-1 text-sm font-medium bg-gray-200 rounded-lg hover:bg-gray-300">
                  Hourly
                </button>
                <button className="px-4 py-1 text-sm font-medium bg-gray-200 rounded-lg hover:bg-gray-300">
                  Daily
                </button>
                <button className="px-4 py-1 text-sm font-medium bg-gray-200 rounded-lg hover:bg-gray-300">
                  Monthly
                </button>
                <button className="px-4 py-1 text-sm font-medium bg-gray-200 rounded-lg hover:bg-gray-300">
                  Yearly
                </button>
              </div>
              <div className="text-sm text-gray-600">
                11:29 Thu, Aug 11 2023 - AQI: 36
              </div>
            </div>
            <ForecastGraph />
          </div>
        </div>

        {/* Bottom Section */}
        {/* <div className="flex justify-between items-center">
        <button className="flex items-center px-4 py-2 text-blue-500 bg-gray-100 rounded-lg hover:bg-gray-200">
          <span>Watchlist</span>
          <i className="ml-2 fa fa-eye"></i>
        </button>
        <button className="flex items-center px-4 py-2 text-blue-500 bg-gray-100 rounded-lg hover:bg-gray-200">
          <span>Health Tips</span>
          <i className="ml-2 fa fa-heartbeat"></i>
        </button>
      </div> */}
      </div>
    </div>
  );
}
