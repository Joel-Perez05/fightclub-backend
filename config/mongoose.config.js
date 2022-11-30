const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connection to the database is good to go!"))
    .catch(err => console.log("Something went wrong when connecting to the database", err))