const express = require("express");
const expressSession = require("express-session");
const { connectMongoose , Client, AqiRecord } = require("./db/conn.js");
const calculateAqi = require('./aqi');
const app = express();
const cors = require('cors');
const axios = require('axios');
// let pollutantsData = {};

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(expressSession({ secret: "secret", resave:false, saveUninitialized:false, cookie:{maxAge:600000}}
));

connectMongoose();

// app.get('/api/login', async(req,res)=>{

// })

app.post('/api/login', async(req, res) => {
  const userDetails = req.body;

  const user = await Client.findOne({email : userDetails.email}); 

        if(user!=null){
            if(user.password === userDetails.password){
                // console.log("welcome");
                res.status(200)
                .json({
                  success: true,
                  message: 'welcome, logged in successfully'
                })
              
            }
            else{   
            // console.log("Incorrect login details");
            res.status(400).json({
              success: false,
              message: 'Incorrect login details'
            })
          }
        }
        else{
        // console.log("user not found");
        res.status(404).json({
          success: false,
          message: 'user not found'
        })
       }
});

app.post('/api/signup', async(req, res) => {
  const userDetails = req.body;
  // console.log(userDetails);
  const user = await Client.findOne({email: userDetails.email});  
  // console.log(user);

  try{
    if(user!=null){
      // console.log("error","User already exists");
      res.status(400).json({
        success: false,
        message: 'User already exists'
      })
    }
    else{
      // const newUser = await User.create(req.body);
      const newUser = new Client({
      email: userDetails.email,
      password: userDetails.password,
      confirmPassword: userDetails.confirmPassword
      });
  
      await newUser.save();

      // console.log("success","Registered succesfully");
      res.status(201).json({
      success: true,
      message: 'Registered succesfully'
     })
    }
  }
  catch(error) {
    res.status(500).json({ success: false, message: 'Server error' });
    
  }
});

app.post('/gasData', calculateAqi, async (req, res) => {
  try {
    const {
      gasModule1Value,
      gasModule2Value,
      gasModule3Value,
      gasModule4Value,
      gasModule5Value,
      gasModule6Value,
      gasModule7Value,
      gasModule8Value,
      temperature,
      humidity,
      overallAQI,
      aqiDetails
    } = req.body;

    const getCurrentDateTime = () => {
      const now = new Date();
    
      const year = now.getFullYear();
      const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
      const day = now.getDate().toString().padStart(2, '0');
    
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
    
      const date = `${year}-${month}-${day}`;
      const time = `${hours}:${minutes}:${seconds}`;
    
      return { date, time };
    };
    
    const dateTime = getCurrentDateTime();
    const date= dateTime.date;
    const time= dateTime.time;
    // console.log(`Current Date: ${dateTime.date}`);
    // console.log(`Current Time: ${dateTime.time}`);    

  // console.log(req.body);

    // Create new AQI record based on the data from the request
    const newAqiRecord = new AqiRecord({
      date,
      time,
      gasModule1Value,
      gasModule2Value,
      gasModule3Value,
      gasModule4Value,
      gasModule5Value,
      gasModule6Value,
      gasModule7Value,
      gasModule8Value,
      temperature,
      humidity,
      overallAQI,
      aqiDetails
    });

    // Save the new AQI record to the database
    await newAqiRecord.save();

    // Send a success response
    res.status(201).json({
      message: 'Data received and saved successfully!',
      overallAQI,
      // aqiDetails
    });
  } catch (error) {
    console.error('Error saving AQI record:', error);
    res.status(500).send('Error saving AQI record');
  }
});

app.post('/testGasData', async (req, res) => {
  try {
    // Define dummy data
    const dummyData = {
      gasModule1Value: 30,
      gasModule2Value: 40,
      gasModule3Value: 50,
      gasModule4Value: 60,
      gasModule5Value: 70,
      gasModule6Value: 80,
      gasModule7Value: 90,
      gasModule8Value: 100,
      temperature: 22,
      humidity: 45,
    };

    // Send dummy data to /gasData
    const response = await fetch('http://localhost:5000/gasData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dummyData)
    });

    // Get response from /gasData
    const responseData = await response.json();
    res.status(response.status).json(responseData);
  } catch (error) {
    console.error('Error sending dummy data:', error);
    res.status(500).send('Error sending dummy data');
  }
});


// Route to fetch all AQI records
app.get('/api/aqiData', async (req, res) => {
  try {
    // Fetch all AQI records from the database
    const aqiRecords = await AqiRecord.find({}); 

    // Send the AQI records as a JSON response
    res.status(200).json({
      success: true,
      data: aqiRecords
    });
  } catch (error) {
    console.error('Error fetching AQI records:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching AQI records'
    });
  }
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App is running on port http://localhost:5000`);
});

