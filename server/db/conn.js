const mongoose = require('mongoose')

const DB = process.env.DATABASE;

// mongoose.connect(DB).then(()=>{
//     console.log("DB Connection Successful...");
// }).catch((err) => console.log("DB Not connected..."))

mongoose.connect(
    "mongodb://0.0.0.0:27017/newdb",
    {
      dbName: "newdb",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
   
).then(()=>console.log("connected succesfully"))
.catch((err)=>{console.error(err);})