var express = require('express');
var graphqlHTTP = require('express-graphql');
let mongoose = require('mongoose')
var path = require('path')
import compression from 'compression'
import fileUpload from 'express-fileupload'
import Schema from './graphql/schema'
import graphQLResolver from './graphql/resolver'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

dotenv.config()
// import Upload from './routes/Upload'

var app = express();
app.use(cors())
app.use(fileUpload())
app.use(cookieParser())
app.use(bodyParser.json({extended: true}))
app.use(compression())
app.use(bodyParser.urlencoded({extended: true}))
//console.log("Hello")
//console.log(process.env.NODE_ENV, "SOmething else")
if(process.env.NODE_ENV === 'production') {
  // app.use(cors({
  //   origin: "https://curryviki.github.io"
  // }))
  app.use((req, res, next) => {
    //console.log("It should be forwarded")
    // if(req.header('host').indexOf("gamingstars") === -1 && req.header('host').indexOf("gaming-stars") === -1) {
    //   res.send({status: "success", message: "Welcome! admin you have access to server now."})
    // }
    if (req.header('x-forwarded-proto') !== 'https')
      res.redirect(`https://${req.header('host')}${req.url}`)
    else
      next()
  })
}else {
  // app.use(cors())
  // console.log("Hello")
}
app.use(express.static(path.join(__dirname, 'public')));
// app.use("/", Upload)

app.use('/graphql',
  graphqlHTTP(async (req, res, next) => ({
  schema: Schema,
  rootValue: graphQLResolver,
  graphiql: process.env.NODE_ENV === 'production' ? false : true
})));




app.use("/*", (req, res, next) => {
  // console.log("Here is final")
  res.sendFile(
    path.join(__dirname, 'public/index.html')
  )
  // res.send({message: "Page doesn't exist"}).status(404)
})

//console.log(config.url)
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(process.env.PORT || 5000, () => console.log('connected'));
  }).catch(err => {
    console.log(err)
  })