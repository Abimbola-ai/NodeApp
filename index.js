const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = 9000;
const url = "mongodb://localhost:27017";

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;
app.use(express.json());

try {
  con.on('open', () => {
    console.log('connected');
  });
} catch (error) {
  console.log("Error: " + error);
}

app.use((req, res, next) => {
  console.log(`Received ${req.method} request at ${req.url}`);
  next();
});

const userRouter = require("./routes/user_routes");
app.use('/users', userRouter); // Update the path to '/users'

app.listen(port, () => {
  console.log('Server started and listening on ' + port);
});
