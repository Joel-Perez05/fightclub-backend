const mongoose = require('mongoose');
const mongo_url = String(process.env.MONGODB_URI);

mongoose.connect("mongodb+srv://BeefyNinjaFGC:m19gghzxoDZWSdJV@fightclubdb.uoiovyn.mongodb.net/?retryWrites=true&w=majority", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

