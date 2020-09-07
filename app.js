// load modules
const express = require('express');
const dotenv = require("dotenv")/** install */
const connectDB = require('./config/db');
const fileUpload = require("express-fileupload"); /** install */
const cors = require('cors'); /** install */

// load env vars
dotenv.config({ path: './config/config.env' });
const productRouter = require('./routes/product');

const app = express();

// Set up mongoose connection
connectDB()


// set up bodyparser middleware
app.use(fileUpload())
app.use(express.json());

// Enable cors
app.use(cors());

// Set static folder
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', productRouter);

const PORT = 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);