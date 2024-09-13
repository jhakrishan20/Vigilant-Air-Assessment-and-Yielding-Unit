import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import Drone from "../assets/drone.png";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Sample data for bar and line charts
const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "AQI",
      data: [50, 100, 150, 200, 250, 300, 350],
      backgroundColor: "#4CAF50",
    },
    {
      label: "Temp",
      data: [20, 22, 23, 24, 25, 26, 27],
      backgroundColor: "#FF5722",
    },
  ],
};

const lineData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "This Device",
      data: [100, 110, 90, 130, 140, 120, 150],
      borderColor: "#42A5F5",
      fill: false,
    },
    {
      label: "Outdoor",
      data: [150, 160, 140, 170, 180, 160, 190],
      borderColor: "#66BB6A",
      fill: false,
    },
  ],
};

// Sample data for the pie chart
const pieData = {
  labels: ["0.3µm Microne", "0.5µm Microne", "1µm Microne", "2.5µm Microne"],
  datasets: [
    {
      label: "Particle Count",
      data: [50, 30, 20, 10],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // Disable aspect ratio maintenance
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return tooltipItem.label + ": " + tooltipItem.raw + "%";
        },
      },
    },
  },
};

const option = {
  responsive: true,
  maintainAspectRatio: false,
};

// Air quality data for cards
const airQualityData = [
  { label: "PM 2.5", value: 9, unit: "µg/m³", color: "bg-blue-400" },
  { label: "PM 10", value: 9, unit: "µg/m³", color: "bg-green-400" },
  { label: "SO 2", value: 9, unit: "ppb", color: "bg-blue-400" },
  { label: "NO 2", value: 9, unit: "ppb", color: "bg-blue-400" },
  { label: "CO", value: 9, unit: "µg/m³", color: "bg-red-400" },
  { label: "NH3", value: 9, unit: "µg/m³", color: "bg-red-400" },
];

const datas = [
  {
    label: "AQI Measure",
    amount: "50",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-gauge text-yellow-500"
      >
        <path d="m12 14 4-4" />
        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
      </svg>
    ),
  },
  {
    label: "Temperature",
    amount: "25°C",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-thermometer-sun"
      >
        <path d="M12 9a4 4 0 0 0-2 7.5" />
        <path d="M12 3v2" />
        <path d="m6.6 18.4-1.4 1.4" />
        <path d="M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
        <path d="M4 13H2" />
        <path d="M6.34 7.34 4.93 5.93" />
      </svg>
    ),
  },
  {
    label: "Humidity",
    amount: "60%",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-droplets text-blue-400"
      >
        <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
        <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
      </svg>
    ),
  },
  {
    label: "Wind Speed",
    amount: "15 km/h",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-wind text-green-400"
      >
        <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
        <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
        <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
      </svg>
    ),
  },
];

const ICON_STYLES = [
  "bg-blue-300 text-blue-800",
  "bg-emerald-300 text-emerald-800",
  "bg-rose-300 text-rose-800",
  "bg-yellow-300 text-yellow-800",
];

export default function App() {
  return (
    <div
      className="min-h-screen p-4 w-end ml-14"
      style={{ backgroundColor: "#f6f6f4" }}
    >
      <div className="flex justify-between items-center gap-10 2xl:gap-20 -m-3">
        {/* Search Bar */}
        <div
          className="flex items-center bg-white border rounded-full ml-5 px-4 py-1 gap-5 shadow-md"
          style={{ width: "600px" }}
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

        {/* Notification and Help Icons */}
        <div className="flex items-center gap-4">
          <button
            className="hover:cursor-pointer"
            aria-label="Notifications"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-600"
            >
              <path d="M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              <circle cx="18" cy="8" r="3" />
            </svg>
          </button>

          <button
            className="hover:cursor-pointer"
            aria-label="Help"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-600"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
          </button>

          {/* User Profile */}
          <div className="flex items-end gap-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-circle-user"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="10" r="3" />
              <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
            </svg>
            <div className="cursor-pointer">
              <p className="text-md font-medium text-black">skyGuardians</p>
              <span className="text-xs text-gray-700">
                skygaurdians@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between 2xl:gap-30 my-5">
        {datas.map((item, index) => (
          <div
            key={index + item.label}
            className="w-80 2xl:min-w-60 h-12 flex items-center justify-between px-4 py-8 rounded-lg bg-gray-100 border-2 border-slate-500"
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full ${ICON_STYLES[index]}`}
              >
                {item.icon}
              </div>
              <div>
                <span className="text-gray-600 text-base md:text-base">
                  {item.label}
                </span>
                <p className="text-base 2xl:text-2xl font-medium text-black ">
                  {item.amount}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden gap-4 mt-6 w-full">
        {/* AQI Card */}
        <div className="bg-yellow-200 p-6 rounded-lg shadow-md h-72 w-full">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">18, AUG, 2022 | 6:00 PM</p>
              <h2 className="text-xl font-semibold text-gray-800">Taj Hotel</h2>
              <p className="text-sm text-gray-600">Floor 1, Sub-SubGroup 1</p>
            </div>
            <img
              src={Drone}
              alt="Character"
              className="w-20 h-20 object-cover"
            />
          </div>
          <div>
            <p className="text-sm text-gray-600">AQI</p>
            <h3 className="text-2xl font-bold text-gray-800">87</h3>
            <p className="text-base text-yellow-700">MODERATE</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-sm font-medium text-gray-800">Real Time Data</p>
            <span className="text-xs text-gray-500">
              Last updated: Second ago
            </span>
          </div>
        </div>

        {/* Air Quality Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-0 gap-x-4">
          {airQualityData.map((item, index) => (
            <div
              key={index}
              className="bg-white px-4 rounded-lg shadow-sm flex items-center gap-y-0 justify-between h-28 w-full"
            >
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {item.label}
                </p>
                <div className="flex items-end space-x-2">
                  <h4 className="text-2xl font-semibold text-gray-800">
                    {item.value}
                  </h4>
                  <span className="text-sm text-gray-500">{item.unit}</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className={`h-16 w-2 rounded-lg ${item.color}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Historical Data Bar Chart */}
        <div
          className="bg-white p-6 rounded-lg shadow-md"
          style={{ width: "100%" }}
        >
          <h3 className="text-lg font-semibold mb-4">Historical Data</h3>
          <div style={{ height: "160px", width: "100%" }}>
            <Bar data={data} options={option} />
          </div>
        </div>

        {/* Particles Count Pie Chart */}
        <div
          className="bg-white p-6 rounded-lg shadow-md"
          style={{ height: "300px" }}
        >
          <h3 className="text-lg font-semibold -mt-3">Particles Count</h3>
          <Pie data={pieData} options={options} />
        </div>

        {/* Comparison Chart */}
        <div
          className="bg-white p-6 rounded-lg shadow-md col-span-2"
          style={{ height: "300px" }}
        >
          <h3 className="text-lg font-semibold -mt-2">Comparison Chart</h3>
          <Line data={lineData} options={options} />
        </div>
      </div>
    </div>
  );
}