import mongoose from "mongoose";
require('dotenv/config');

class DbConnection {
  constructor() {
    console.log(process.env.MONGODB_URL);
    const url =
      process.env.MONGODB_URL || `mongodb://localhost:27017/node-starter`;
    console.log("Establish new connection with url", url);
    
    mongoose.Promise = global.Promise;
    
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);
    mongoose.set("useUnifiedTopology", true);
    
    mongoose.connect(url);
  }
}

export default new DbConnection();