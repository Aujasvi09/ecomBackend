const mongoose = require("mongoose")

const connectDb = async () => {
  try{
    await mongoose.connect( "mongodb+srv://aujaschaudhry:GFG1234@cluster0.ijro6bj.mongodb.net/gfg_ecom_db?retryWrites=true&w=majority")
  }
  catch(err){
    console.log("Failed To Connect To DB", err)
  }
  
}

module.exports = connectDb