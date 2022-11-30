const mongoose = require('mongoose');
const mongo_url = process.env.MONGODB_URI;

mongoose.connect(String(mongo_url), { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

