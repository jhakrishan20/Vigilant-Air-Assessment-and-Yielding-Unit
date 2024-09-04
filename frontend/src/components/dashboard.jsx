import React from "react";
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
import User from "../assets/profile1.png";
// import { useNavigate, Navigate } from "react-router-dom";

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
  maintainAspectRatio: false, // Allows the height to be set independently of the width
};

// Air quality data for cards
const airQualityData = [
  { label: "PM 2.5", value: 9, unit: "µg/m³", color: "bg-blue-400" },
  { label: "PM 10", value: 9, unit: "µg/m³", color: "bg-green-400" },
  { label: "TEMP", value: 27, unit: "°C", color: "bg-red-400" },
  { label: "Humidity", value: 94, unit: "%", color: "bg-yellow-400" },
  { label: "SO 2", value: 9, unit: "ppb", color: "bg-blue-400" },
  { label: "NO 2", value: 9, unit: "ppb", color: "bg-blue-400" },
  { label: "CO", value: 9, unit: "µg/m³", color: "bg-red-400" },
  { label: "CO", value: 9, unit: "µg/m³", color: "bg-red-400" },
  { label: "CO", value: 9, unit: "µg/m³", color: "bg-red-400" },
];

export default function App() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (true) {
  //     navigate("/about");
  //   }
  // }, [navigate]);

  // if (true) {
  //   return <Navigate to="/about" />;
  // }

  return (
    <div className="min-h-screen bg-gray-100 p-4 w-end ml-44">
      <div className="flex justify-end items-end gap-10 2xl:gap-20 -m-3">
        <div className="flex items-end gap-2">
          <img
            src={User}
            alt="User"
            className="w-10 md:w-12 h-10 md:h-12 rounded-full object-cover cursor-pointer"
          />
          <div className="cursor-pointer">
            <p className="text-lg font-medium text-black">skyGuardians</p>
            <span className="text-xs text-gray-70">skygaurdians@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden gap-4 mt-6 w-full">
        {/* AQI Card */}
        <div className="bg-yellow-200 p-6 rounded-lg shadow-md w-full">
          <div className="flex justify-between items-center">
            {/* Left Section with Date and Location */}
            <div>
              <p className="text-sm text-gray-600">18, AUG, 2022 | 6:00 PM</p>
              <h2 className="text-xl font-semibold text-gray-800">Taj Hotel</h2>
              <p className="text-sm text-gray-600">Floor 1, Sub-SubGroup 1</p>
            </div>

            {/* Character Image */}
            <img
              src={User}
              alt="Character"
              className="w-20 h-20 object-cover"
            />
          </div>

          {/* AQI Info */}
          <div className="mt-6">
            <p className="text-sm text-gray-600">AQI</p>
            <h3 className="text-6xl font-bold text-gray-800">87</h3>
            <p className="text-lg text-yellow-700">MODERATE</p>
          </div>

          {/* Real-Time Data Section */}
          <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
            <p className="text-sm font-medium text-gray-800">Real Time Data</p>
            <span className="text-xs text-gray-500">
              Last updated: Second ago
            </span>
          </div>
        </div>

        {/* Air Quality Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {airQualityData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between w-full"
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
        <div className="bg-white p-6 rounded-lg shadow-md" style={{width: "100%"}}>
          <h3 className="text-lg font-semibold mb-4">Historical Data</h3>
          <div style={{ height: "260px", width: "100%" }}>       {/* Set the height here */}
            <Bar data={data} options={option} />
          </div>
        </div>

        {/* Particles Count Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Particles Count</h3>
          <Pie data={pieData} options={options} />
        </div>

        {/* Comparison Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
          <h3 className="text-lg font-semibold mb-4">Comparison Chart</h3>
          <Line data={lineData} />
        </div>
      </div>
    </div>
  );
}
