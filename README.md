# Sky-Guardians Team ID - 49161

<h1>VAAYU - Vigillant Air Assessment and Yielding Unit</h1>

<p><img src="C:\Users\krishan\Desktop\expo\vaayu" alt="VAAYU Logo"></p>

<h3>Revolutionizing Air Quality Monitoring Through UAVs</h3>

<p><strong>VAAYU</strong> is an innovative UAV-based solution designed to monitor air pollution levels in real-time. It leverages cutting-edge IoT, environmental sensors, and edge computing technology to deliver precise AQI data across various regions. VAAYU aims to address the shortcomings of traditional air quality monitoring stations by offering flexibility, portability, and cost-efficiency.</p>

<h2>Table of Contents</h2>
<ul>
  <li><a href="#overview">Overview</a></li>
  <li><a href="#features">Features</a></li>
  <li><a href="#technology-stack">Technology Stack</a></li>
  <li><a href="#project-structure">Project Structure</a></li>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#license">License</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>

<h2 id="overview">Overview</h2>

<p>VAAYU is developed to tackle the environmental challenges posed by air pollution. Traditional AQI monitoring stations often lack mobility and density, leaving large areas uncovered. VAAYU addresses these gaps by deploying UAVs equipped with advanced sensors capable of measuring multiple air quality indicators such as PM2.5, PM10, CO, NO₂, O₃, and more.</p>

<p>The drone communicates with a ground-based server, transmitting data in real-time to a centralized dashboard, where users can view and analyze AQI metrics. The system offers a practical solution for governments, environmentalists, and urban planners looking to monitor air quality at high granularity.</p>

<h2 id="features">Features</h2>

<ul>
  <li><strong>Real-time AQI monitoring</strong> with detailed reports on various pollutants.</li>
  <li><strong>Autonomous UAV operation</strong> with configurable flight paths.</li>
  <li><strong>IoT and Edge Computing Integration</strong> for faster data acquisition and processing.</li>
  <li><strong>Wide Area Coverage</strong> via a network of UAVs.</li>
  <li><strong>High-resolution data acquisition</strong> using environmental sensors and GPS.</li>
  <li><strong>Continuous monitoring and reporting</strong> to ensure 24/7 operational capability.</li>
  <li><strong>Mobile and Web Dashboard</strong> for intuitive access to air quality data.</li>
  <li><strong>Portable and Scalable</strong> solution for urban and rural deployment.</li>
</ul>

<h2 id="technology-stack">Technology Stack</h2>

<ul>
  <li><strong>Hardware</strong>: UAVs (Quadcopter or Tilt Rotor), Environmental Sensors (PM2.5, PM10, etc.), GPS, LiDAR (Optional).</li>
  <li><strong>Backend</strong>: Node.js, Express, MongoDB</li>
  <li><strong>Frontend</strong>: React.js, Chart.js</li>
  <li><strong>Communication</strong>: IoT Protocols (MQTT/Custom low-latency protocol)</li>
  <li><strong>Drone Communication</strong>: MAVLink Protocol</li>
  <li><strong>Data Acquisition</strong>: Arduino, Raspberry Pi, Sensors</li>
  <li><strong>Machine Learning</strong>: TensorFlow.js for data analysis and prediction</li>
  <li><strong>Edge Computing</strong>: Raspberry Pi / Jetson Nano</li>
</ul>

<h2 id="project-structure">Project Structure</h2>

<pre>
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
</pre>

<h2 id="installation">Installation</h2>

<h3>Prerequisites</h3>

<ul>
  <li>Node.js and npm</li>
  <li>MongoDB</li>
  <li>React</li>
  <li>Arduino IDE</li>
  <li>MAVLink for drone communication</li>
</ul>

<h3>Steps</h3>

<ol>
  <li>Clone the repository:
    <pre><code>git clone https://github.com/jhakrishan20/VAAYU.git</code></pre>
  </li>

  <li>Navigate to the backend directory and install dependencies:
    <pre><code>cd VAAYU/backend
npm install</code></pre>
  </li>

  <li>Set up environment variables for the backend:
    <pre><code>cp .env.example .env
# Update the .env file with your MongoDB credentials and other configurations</code></pre>
  </li>

  <li>Start the backend server:
    <pre><code>npm start</code></pre>
  </li>

  <li>Navigate to the frontend directory and install dependencies:
    <pre><code>cd ../frontend
npm install</code></pre>
  </li>

  <li>Start the frontend server:
    <pre><code>npm start</code></pre>
  </li>

  <li>Connect your UAV with the Arduino board and run the MAVLink communication script from the <code>drone/</code> folder.</li>
</ol>

<h2 id="usage">Usage</h2>

<p>After installation, access the frontend dashboard at <code>http://localhost:3000</code> to view live AQI data. Set flight paths and start monitoring air quality in the configured region.</p>

<h2 id="contributing">Contributing</h2>

<p>We welcome contributions to VAAYU! Whether it’s improving documentation, writing code, or suggesting new features, you can help make VAAYU better.</p>

<ol>
  <li>Fork the repository.</li>
  <li>Create a new branch (<code>git checkout -b feature-branch</code>).</li>
  <li>Make your changes.</li>
  <li>Push to the branch (<code>git push origin feature-branch</code>).</li>
  <li>Create a Pull Request.</li>
</ol>

<p>Please ensure that your code follows the contribution guidelines in <code>CONTRIBUTING.md</code>.</p>

<h2 id="license">License</h2>

<p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

<h2 id="contact">Contact</h2>

<p>For any questions or inquiries, feel free to reach out to:</p>

<ul>
  <li><strong>Krishan Jha</strong> - Project Lead - <a href="mailto:krishanjha80@gmail.com">krishanjha80@gmail.com</a></li>
  <li><a href="https://github.com/jhakrishan20">GitHub</a></li>
  <li><a href="https://www.linkedin.com/in/krishan-jha/">LinkedIn</a></li>
</ul>
