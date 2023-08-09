const mongoose = require('mongoose');
//W1kBGGH9XWqWPCe4
//egffMgwB8dDpJnii
//mean_db
const dbConnection = async () => {

    try{
        await mongoose.connect(process.env.DB_CNN,{
        

        });

        console.log('DB Online');
    }catch(error){
        console.log(error);
        throw new Error("Error mongol");
    }  
    
}

module.exports = {
    dbConnection
}