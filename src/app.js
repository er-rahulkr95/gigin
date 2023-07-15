const express = require("express");
const cors = require("cors");
const httpStatus = require("http-status");
const app = express();
const catalogRouter = require("./routes/catalog.route")



app.use(express.json());
app.use(express.urlencoded());



const corsConfig = {
    origin: true,
    credentials:true,
}


app.use(cors(corsConfig));
app.options("*", cors());

app.use("/", catalogRouter )

app.use((err,req, res, next)=>{
    console.log(" Something went wrong" + err)
})

module.exports = app;