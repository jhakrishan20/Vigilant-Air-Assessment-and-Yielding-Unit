import React from "react";
import FaceImage from "../assets/logo1.png";
import Image from "../assets/profile1.png";

const aqiLevels = [
  {
    label: "Good",
    value: "0 - 50",
    description:
      "Air quality is considered satisfactory, and air pollution poses little or no risk.",
    color: "bg-green-500",
    image: FaceImage,
  },
  {
    label: "Moderate",
    value: "51 - 100",
    description:
      "Air quality is acceptable; however, some pollutants may pose a moderate health concern.",
    color: "bg-yellow-500",
    image: FaceImage,
  },
  {
    label: "Poor",
    value: "101 - 200",
    description:
      "Members of sensitive groups may experience health effects. The general public is less likely to be affected.",
    color: "bg-orange-600",
    image: FaceImage,
  },
  {
    label: "Unhealthy",
    value: "201 - 300",
    description:
      "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.",
    color: "bg-pink-600",
    image: FaceImage,
  },
  {
    label: "Severe",
    value: "301 - 400",
    description:
      "Health alert: everyone may experience more serious health effects.",
    color: "bg-purple-500",
    image: FaceImage,
  },
  {
    label: "Hazardous",
    value: "401 - 500+",
    description:
      "Health warnings of emergency conditions. The entire population is more likely to be affected.",
    color: "bg-red-700",
    image: FaceImage,
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 ml-44">
      <div
        className="-mt-6"
        style={{
          // backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-7xl font-bold text-gray-800">VAAYU</h1>
          <p className="text-lg text-gray-600 mt-4">
            Learn more about our mission and the people behind this project.
          </p>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Mission Text */}
          <div className="p-8 rounded-lg shadow-lg mb-12 w-full md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
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

          {/* Image */}
          <div className="flex justify-center items-center w-full md:w-1/2">
            <img
              src={FaceImage}
              className="h-96 w-96 object-cover"
              alt="Mission"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
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
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Team</h2>
        <div className="flex items-center">
          <img
            src={Image}
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
      <div className="p-4">
        <h1 className="text-2xl font-bold text-center mb-6">
          Air Quality Index
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aqiLevels.map((level, index) => (
            <div
              key={index}
              className={`flex p-4 rounded-lg ${level.color} items-center`}
            >
              {/* Left Part */}
              <div className="flex flex-col items-center flex-1">
                <h2 className="text-lg font-bold">{level.label}</h2>
                <p className="text-md">{level.value}</p>
                <div
                  className="bg-yellow-300 rounded-full p-4 flex justify-center items-center"
                  style={{ width: "80px", height: "80px" }}
                >
                  <img
                    src={level.image}
                    alt="Face"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Right Part */}
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
      <div className="text-center mt-12">
        <p className="text-gray-600 text-lg">
          &copy; 2024 skyGuardians. All rights reserved.
        </p>
      </div>
    </div>
  );
}
