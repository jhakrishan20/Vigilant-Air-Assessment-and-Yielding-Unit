import React from "react";
import Drone from "../assets/drone.png";
import Image1 from "../assets/1.png";
import Image2 from "../assets/2.png";
import Image3 from "../assets/3.png";
import Image4 from "../assets/4.png";
import Image5 from "../assets/5.png";
import Image6 from "../assets/6.png";

const aqiLevels = [
  {
    label: "Good",
    value: "0 - 50",
    description:
      "Air quality is considered satisfactory, and air pollution poses little or no risk.",
    color: "bg-green-500",
    image: Image1,
  },
  {
    label: "Moderate",
    value: "51 - 100",
    description:
      "Air quality is acceptable; however, some pollutants may pose a moderate health concern.",
    color: "bg-yellow-500",
    image: Image2,
  },
  {
    label: "Poor",
    value: "101 - 200",
    description:
      "Members of sensitive groups may experience health effects. The general public is less likely to be affected.",
    color: "bg-orange-600",
    image: Image3,
  },
  {
    label: "Unhealthy",
    value: "201 - 300",
    description:
      "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.",
    color: "bg-pink-600",
    image: Image4,
  },
  {
    label: "Severe",
    value: "301 - 400",
    description:
      "Health alert: everyone may experience more serious health effects.",
    color: "bg-purple-500",
    image: Image5,
  },
  {
    label: "Hazardous",
    value: "401 - 500+",
    description:
      "Health warnings of emergency conditions. The entire population is more likely to be affected.",
    color: "bg-red-700",
    image: Image6,
  },
];

const textColorMap = {
  "bg-green-500": "text-green-500",
  "bg-yellow-500": "text-yellow-500",
  "bg-orange-600": "text-orange-600",
  "bg-pink-600": "text-pink-600",
  "bg-purple-500": "text-purple-500",
  "bg-red-700": "text-red-700",
};

export default function About() {
  return (
    <div className="min-h-screen p-6 ml-14" style={{ backgroundColor: "#f6f6f4" }}>
      <div className="-mt-6">
        {/* Header Section */}
        <div className="text-center mb-12">
        <h1 
          style={{ color: "#004953" }} 
          className="text-7xl font-bold"
        >VAAYU</h1>
          <p className="text-lg text-gray-600 mt-4">
            Learn more about our mission and the people behind this project.
          </p>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="p-8 rounded-lg mb-12 shadow-2xl w-full md:w-1/2" style={{ backgroundColor: "" }}>
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#004953" }}>
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg">
              At skyGuardians, we are committed to leveraging cutting-edge
              technology to monitor and improve air quality across urban and
              rural areas. Our goal is to provide real-time data that empowers
              individuals, communities, and governments to make informed
              decisions to ensure a cleaner and healthier environment.
            </p>
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2">
            <img
              src={Drone}
              className="h-96 w-full object-cover"
              alt="Mission"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="p-8 rounded-lg shadow-2xl mb-12" style={{ backgroundColor: ""}}>
        <h2 className="text-3xl font-semibold mb-4" style={{ color: "#004953" }}>
          Key Features
        </h2>
        <ul className="list-disc pl-5 text-gray-600 text-lg">
          <li>Real-time Air Quality Index (AQI) monitoring</li>
          <li>Data visualization through interactive charts</li>
          <li>Personalized notifications based on local air quality</li>
          <li>Historical data analysis and trends</li>
          <li>User-friendly interface for easy access to information</li>
        </ul>
      </div>

      {/* Team Section */}
      <div className="p-8 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-semibold mb-4" style={{ color: "#004953" }}>Our Team</h2>
        <div className="flex items-center">
          <img
            src={Drone}
            alt="Our Team"
            className="w-40 h-40 rounded-full object-cover mr-6"
          />
          <p className="text-gray-600 text-lg">
            We are a team of passionate engineers, data scientists, and
            environmentalists dedicated to improving air quality monitoring
            through innovative solutions. Our diverse backgrounds allow us to
            tackle challenges from multiple perspectives, ensuring the highest
            quality of our product.
          </p>
        </div>
      </div>

      {/* Air Quality Index Cards */}
      <div className="p-4 mt-6">
        <h1 className="text-2xl font-bold text-center mb-6" style={{ color: "#004953" }}>
          Air Quality Index
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aqiLevels.map((level, index) => (
            <div
              key={index}
              className="flex p-4 rounded-lg shadow-lg items-center transition-transform duration-300 hover:shadow-xl hover:scale-105"
              style={{ backgroundColor: ""}}
            >
              <div className="flex flex-col items-center flex-1">
              <h2 className={`text-lg font-bold ${textColorMap[level.color]}`}>
                  {level.label}
                </h2>
                <p className="text-md">{level.value}</p>
                <div
                  className="rounded-full p-4 flex justify-center items-center"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={level.image}
                    alt="Face"
                    className="w-40 h-40 rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 ml-4">
                <p className="text-sm text-slate-900 font-medium">
                  {level.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center mt-3">
        <p className="text-lg" style={{ color: "#004953" }}>
          &copy; 2024 skyGuardians. All rights reserved.
        </p>
      </div>
    </div>
  );
}
