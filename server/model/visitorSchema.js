const mongoose = require('mongoose'),
Schema=mongoose.Schema;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Security = require('../model/securitySchema');
const Student = require('../model/studentSchema');
const visitorSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    mobilenumber: {
        type: Number,
        required: true
    },
    
    anyrelation:{
        type:String,
        required:true
    },
    student:{
        type:Schema.Types.ObjectId, ref: 'Student'

    },
    onduty:{
        type:Schema.Types.ObjectId, ref: 'Security'

    },
    reason:{
        type:String,
        required:true
    },
    
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]

})



// hashing the password
visitorSchema.pre('save', async function (next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.confirmpassword =await bcrypt.hash(this.confirmpassword, 12);
    }
    next();
})

// generating token
visitorSchema.methods.generateAuthToken = async function () {
    try {
      
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token

    }catch (err){
        console.log(err);
    }
}

const Visitor = mongoose.model('VISITOR', visitorSchema);

module.exports = Visitor;