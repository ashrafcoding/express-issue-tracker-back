var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
const mongoose = require("mongoose");
var cors = require("cors");
const {graphqlHTTP} = require('express-graphql')


const connection = async () => {
  await mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  console.log("db connected");
};
connection()

const {schema} = require('./graphql/graphql-schema')
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var testAPIRouter = require("./routes/bugs");



var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// app.use("/users", usersRouter);
// app.use("/bugs", testAPIRouter);

app.use('/graphql', graphqlHTTP({
  schema, 
  graphiql:true
}))


module.exports = app;
