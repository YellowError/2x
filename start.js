// Import env variables coming from path option
require("dotenv").config({ path: '.variables.env' });


const initServer = async () => {

    //Connect to mongoose database
    const mongoose = require("mongoose");
    mongoose.Promise = global.Promise;
    try{
        await mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
        console.log(`Mongo is now connected with our app !`);
    }catch(e){
        if(e) throw e;
    }

    //load all models from mongoose
    require(`${process.cwd()}/models/user.js`);

    //Start our server
    const app = require(`./app`);
    app.set("port", process.env.PORT || 8001);
    
    const server = app.listen(app.get("port"), ()=>{
        console.log(`Express running on port ${server.address().port}`);
    })

}

initServer();
