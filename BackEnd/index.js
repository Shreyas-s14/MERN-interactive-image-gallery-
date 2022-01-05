//module setup
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors')
const signupRoute = require('./routes/signup.route')

const logInUser = require('./routes/login.route')
 const addImage = require('./routes/addimage.route')
 const getImage = require('./routes/getImages.route')
// user schema
 //var User = require('../models/user.model')
const bcrypt = require('bcryptjs')
// to connect mongo to the server
mongoose.connect('mongodb://localhost:27017/wt-proj', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {
    console.log("succcessfully connected to mongo")
}) 

mongoose.connection.on(
    'error',
    console.error.bind(console, 'MongoDB Connection Error...')
);


//will create 27017/wt-proj is not present

const app = express();

app.use(cors({
    origin: "*",
    optionsSuccessStatus: 200
}));

// to let chrome allow to communicate with the servers
app.use(express.json()) // to let the app know json will be used to parse
app.use('/signup', signupRoute)
app.use('/login', logInUser)
 app.use('/addImage', addImage)
app.use('/getimages', getImage) // nonoon at l east get login function bac wait one sec ok
const port=5000; //3000 is for the react frontend port
//var count=User.count();
app.listen(port,()=>{
    console.log("Server started");
})

//cors install via npm to linl these ports
//npm i mongoose --save
//npm i jsonwebtoken --save
// above one for authentication of password 