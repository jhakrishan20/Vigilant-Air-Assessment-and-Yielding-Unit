const express = require("express");
const expressSession = require("express-session");
const { connectMongoose , User } = require("./db/conn.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(expressSession({ secret: "secret", resave:false, saveUninitialized:false, cookie:{maxAge:600000}}
));

connectMongoose();

const port = process.env.PORT || 4500;
app.listen(port, () => {
  console.log(`App is running on port http://localhost:4500`);
});
