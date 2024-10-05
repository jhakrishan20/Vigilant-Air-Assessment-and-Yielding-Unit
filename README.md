# Sky-Guardians Team ID - 49161

Revolutionizing Air Quality Monitoring Through UAVs
VAAYU is an innovative UAV-based solution designed to monitor air pollution levels in real-time, delivers precise AQI data across various regions. VAAYU aims to address the shortcomings of traditional air quality monitoring stations by offering flexibility, portability, and cost-efficiency.

Table of Contents
Overview
Features
Technology Stack
Project Structure
Installation
Usage
Contributing
License
Contact
Overview
VAAYU is developed to tackle the environmental challenges posed by air pollution. Traditional AQI monitoring stations often lack mobility and density, leaving large areas uncovered. VAAYU addresses these gaps by deploying UAVs equipped with advanced sensors capable of measuring multiple air quality indicators such as PM2.5, PM10, CO, NO₂, O₃, and more.

The drone communicates with a ground-based server, transmitting data in real-time to a centralized dashboard, where users can view and analyze AQI metrics. The system offers a practical solution for governments, environmentalists, and urban planners looking to monitor air quality at high granularity.

Features
Real-time AQI monitoring with detailed reports on various pollutants.
Autonomous UAV operation with configurable flight paths.
IoT and Edge Computing Integration for faster data acquisition and processing.
Wide Area Coverage via a network of UAVs.
High-resolution data acquisition using environmental sensors and GPS.
Continuous monitoring and reporting to ensure 24/7 operational capability.
Mobile and Web Dashboard for intuitive access to air quality data.
Portable and Scalable solution for urban and rural deployment.
Technology Stack
Hardware: UAVs (Quadcopter or Tilt Rotor), Environmental Sensors (PM2.5, PM10, etc.), GPS, LiDAR (Optional).
Backend: Node.js, Express, MongoDB
Frontend: React.js, Chart.js
Communication: IoT Protocols (MQTT/Custom low-latency protocol)
Drone Communication: MAVLink Protocol
Data Acquisition: Arduino, Raspberry Pi, Sensors
Machine Learning: TensorFlow.js for data analysis and prediction
Edge Computing: Raspberry Pi / Jetson Nano
Project Structure
bash
Copy code
VAAYU/
├── backend/              # Node.js backend
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   └── controllers/      # Controllers for business logic
├── frontend/             # React.js dashboard for visualizing AQI data
│   ├── components/       # Reusable UI components
│   ├── pages/            # Frontend pages
│   └── services/         # API service calls
├── drone/                # UAV firmware and communication scripts
│   ├── calibration/      # Sensor calibration scripts
│   └── mavlink/          # MAVLink communication scripts
└── docs/                 # Project documentation
Installation
Prerequisites
Node.js and npm
MongoDB
React
Arduino IDE
MAVLink for drone communication
Steps
Clone the repository:
bash
Copy code
git clone https://github.com/jhakrishan20/VAAYU.git
Navigate to the backend directory and install dependencies:
bash
Copy code
cd VAAYU/backend
npm install
Set up environment variables for the backend:
bash
Copy code
cp .env.example .env
# Update the .env file with your MongoDB credentials and other configurations
Start the backend server:
bash
Copy code
npm start
Navigate to the frontend directory and install dependencies:
bash
Copy code
cd ../frontend
npm install
Start the frontend server:
bash
Copy code
npm start
Connect your UAV with the Arduino board and run the MAVLink communication script from the drone/ folder.
Usage
After installation, access the frontend dashboard at http://localhost:3000 to view live AQI data.
Set flight paths and start monitoring air quality in the configured region.
Contributing
We welcome contributions to VAAYU! Whether it’s improving documentation, writing code, or suggesting new features, you can help make VAAYU better.

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Push to the branch (git push origin feature-branch).
Create a Pull Request.
Please ensure that your code follows the contribution guidelines in CONTRIBUTING.md.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For any questions or inquiries, feel free to reach out to:

Krishan Jha - krishanjha80@gmail.com
GitHub
LinkedIn 
