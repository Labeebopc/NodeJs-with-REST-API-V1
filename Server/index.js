import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './src/Routes/contactRoute.js'


const app =express();

// bodyParser and cors setup
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

routes(app);


const CONNECTION_URL = 'mongodb://localhost:27017';
const PORT = process.env.PORT || 5000;

// mongoose connection setup
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})
.then(()=> app.listen(PORT,()=>console.log(`Server running on port :${PORT}`)))
.catch((error)=> console.log(error.message));



