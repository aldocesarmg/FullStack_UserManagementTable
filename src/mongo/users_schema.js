const mongoose = require('mongoose');
// import { Mongoose } from 'mongoose';

const usersSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    user_role:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    social_profile:Array,
    promote:{
        type:Boolean,
        default:false
    },
    rating:{
        type:mongoose.Types.Decimal128
    },
    last_login:{
        type: Date,
        default: Date.now
    }
});

const Users = mongoose.model("User", usersSchema);

module.exports = Users;