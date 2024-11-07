const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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

const UserModel = mongoose.model('User', userSchema);
UserModel.createIndexes();

module.exports = UserModel;