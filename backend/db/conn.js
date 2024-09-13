const mongoose = require("mongoose");
exports.connectMongoose = async ()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/VAAYU").then(() => {
        console.log(" connection successful");
    }).catch((e)=>{
        console.log(" no connection");
    });
}
const clientSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: String,
    confirmPassword: String
})

const AqiRecordSchema = new mongoose.Schema({
        date: String,
        time: String,
        gasModule1Value: String,
        gasModule2Value: String,
        gasModule3Value: String,
        gasModule4Value: String,
        gasModule5Value: String,
        gasModule6Value: String,
        gasModule7Value: String,
        gasModule8Value: String,
        temperature: String,
        humidity: String,
        overallAQI:  Number,
        aqiDetails: Object
  });

// const adminSchema = new mongoose.Schema({
//     firstName: String,
//     lastName: String,
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     password: String,
//     cnfrmpassword: String
// })

const uavSchema = new mongoose.Schema({
    uavId: String,               // UAV Identifier
    monitoringType: "String",           // Type of sensor (e.g., PM2.5, CO2, etc.)            
    timestamp: "Date",              // Time of the reading
    location: {
     latitude: Number,           // UAV's latitude
     longitude: Number,          // UAV's longitude
     altitude: Number            // UAV's altitude in meters
  },
})


exports.Client = mongoose.model("User",clientSchema);
// exports.Admin = mongoose.model("Admin",adminSchema);
exports.Uav = mongoose.model("UAV",uavSchema);
exports.AqiRecord = mongoose.model('Aqi_Record', AqiRecordSchema);