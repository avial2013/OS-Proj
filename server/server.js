const express = require('express');
// mongoose:
const mongoose = require('mongoose');
// cors:
const cors = require('cors')

// import the router:
const QuestionModel = require('./routes/QuestionRoute');
const RestaurantModel = require('./routes/RestaurantRoute');


const app = express();
const PORT = 3000;

app.use(cors())

// middleware - מתווך
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// use the router for students:
app.use('/restaurantModel', RestaurantModel);
app.use('/questionModel', QuestionModel);

// Connect to MongoDB using mongoose - to University database. 
mongoose.connect('mongodb://localhost:27017/Sanitation', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

app.listen(PORT, () => console.log(`Listening in port ${PORT}`));
