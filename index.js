require("dotenv").config()
const express = require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const { resolve } = require('path');

const app = express();
const port = process.env.port || 3010;

app.use(express.static('static'));
app.use(cors())
mongoose
     .connect(process.env.db_URL,{ useNewUrlParser:true,useUnifiedTopology:true})
     .then(()=> console.log("Connected to database"))
     .catch((err)=> console.error("Error connecing to daatabase:",err))

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
