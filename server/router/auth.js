const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Visitor = require('../model/visitorSchema');
const Security = require('../model/securitySchema');
const cors = require("cors")
const authenticate=require("../middleware/authenticate")
router.use(cors())
router.get("/",cors(),(req,res)=>{

})

require('../db/conn');
const Student = require('../model/studentSchema');

router.get('/', (req,res) => {
    res.send("Hello from server router.js..");
});

// Async-Await
router.post('/student-register', async (req, res) => {

    const { fullname, username, password, confirmpassword, registrationnumber, rollnumber, email, mobilenumber } = req.body;

    if(!fullname || !username || !password || !confirmpassword || !registrationnumber || !rollnumber || !email || !mobilenumber ){
        return res.status(400).json({ error: "Please fill all the fields..."})
    }

    try {
        const userExist = await Student.findOne({ username: username, email:email })

        if(userExist){
            return res.status(400).json({ error: "User already exist..."})
        } else if (password != confirmpassword) {
            return res.status(400).json({ error: "Passwords are not matching..."})
        } else {
            const student = new Student({ fullname, username, password, confirmpassword, registrationnumber, rollnumber, email, mobilenumber });


        
            const studentRegister = await student.save();
    
            if (studentRegister) {
                res.status(201).json({ message: "Student registered successfully..." })
            } else {
                res.status(500).json({ error: "Failed to register..." })
            }
        }

        
    }catch(err) {
        console.log(err);
    }
    
    
});

//security-register

// security-register
router.post('/security-register', async (req, res) => {

    const { fullName, userName, Password, confirmPassword, employeeid, Email, gender, mobileNumber } = req.body;

    if(!fullName || !userName || !Password || !confirmPassword || !employeeid || !gender || !Email || !mobileNumber ){
        return res.status(400).json({ error: "Please fill all the fields..."})
    }

    try {
        const userExist = await Student.findOne({ userName: userName, Email:Email })

        if(userExist){
            return res.status(400).json({ error: "User already exist..."})
        } else if (Password != confirmPassword) {
            return res.status(400).json({ error: "Passwords are not matching..."})
        } else {
            const security = new Security({ fullName, userName, Password, confirmPassword, employeeid, Email, gender, mobileNumber });
            const securityRegister = await security.save();
    
            if (securityRegister) {
                res.status(201).json({ message: "Security registered successfully..." })
            } else {
                res.status(500).json({ error: "Failed to register..." })
            }
        }        
    }catch(err) {
        console.log(err);
    }
});

//visitor-enroll
router.post('/visitor-enroll', async (req, res) => {

    const { fullname, mobilenumber,city,anyrelation,student,reason } = req.body;

    if(!fullname || !mobilenumber|| !city|| !anyrelation || !reason ){
        return res.status(400).json({ error: "Please fill all the fields..."})
    }
    console.log("outsoide the ctry block")

    try {
            const visitor = new Visitor({ fullname, mobilenumber,city,anyrelation,student,reason });
            const visitorEnroll = await visitor.save().then(result=>{
                res.json({visitor:result})
            });
            if (visitorEnroll) {
                res.status(201).json({ message: "visitor registered successfully..." })
            } else {
                res.status(500).json({ error: "Failed to register..." })
            }
        }catch(err) {
            console.log(err);
        }
});

// security login
router.post('/security-login', async (req, res) => {
    try {
      let token;
      const { userName, Password } = req.body

      if(!userName || !Password){
        return res.status(400).json({ error: "Please fill all the details..." })
      }

      const securityLogin = await Security.findOne({userName: userName})

    //   console.log(studentLogin);
      

      
      if(!securityLogin) {
        res.status(400).json({ error: "User not found..." })
      }else {
        const isMatch = await bcrypt.compare(Password, securityLogin.Password);

        token = await securityLogin.generateAuthToken();
        console.log(token);

        res.cookie("jwtoken", token, {
            expires:new Date(Date.now() + 2592000000),
            httpOnly:true
        });

        if(!isMatch){
            res.status(400).json({ error: "Invalid Password..." })
          }else {
            const {password,confirmpassword,...newD} = securityLogin._doc
            res.json(newD)
            res.json({ message: "Security Login successful..." })
          }
      }

      

    }catch(err) {
        console.log(err);
    }
})

// login route

router.post('/student-login', async (req, res) => {
    try {
      let token;
      const { username, password } = req.body

      if(!username || !password){
        return res.status(400).json({ error: "Please fill allthe details..." })
      }

      const studentLogin = await Student.findOne({username: username})

    //   console.log(studentLogin);
      

      
      if(!studentLogin) {
        res.status(400).json({ error: "User not found..." })
      }else {
        const isMatch = await bcrypt.compare(password, studentLogin.password);

        token = await studentLogin.generateAuthToken();
        console.log(token);

        res.cookie("jwtoken", token, {
            expires:new Date(Date.now() + 2592000000),
            httpOnly:true
        });

        if(!isMatch){
            res.status(400).json({ error: "Invalid Password..." })
          }else {
            const {password,confirmpassword,...newD} = studentLogin._doc
            res.json(newD)
            res.json({ message: "Security Login successful..." })
            
          }
      }

      

    }catch(err) {
        console.log(err);
    }
    
})


// router.post("/student-login", async (req,res)=>{
//     const {username, password} = req.body;
//     try{
//         const check = await register.findOne({username:username})
        
//         if (check){
//             if (check.password === password){
//                 console.log("Succesfull")
//                 const {password,confirmpassword,...newD} = studentLogin._doc
//                 res.json(newD)
//             }else{
//                 res.json("notexist")
//             }
//         }else{
//             res.json("notexist");
//         }
//     }catch(e){
//         res.json("notexist");
//     }
// });

// router.get("/student-home",async(req,res)=>{
//     console.log("hi")
//     try{
//         // req.
//         // const user=await Student.findById(req.query.id);
//         // const rootUser=await User.findOne({_id:verifyToken._id,"tokens.token":token})
//         // if(!user){
//         //     return res.status(404).json({msg:"iser not found"})
//         // }
//         // res.send({status:"ok",data:user})
//         // const id = req.params.id;
//         // const data = req.body;
//         // console.log(id)
//         // register.findById(id)
//         console.log(req.data.nuser)
//         // student.findOne(email:req.data.nuser)
//         // res.send(data)
//     }catch(err){
//         console.log(err)
//     }
    
// })
router.put("/edit-student-profile/:id", async (req,res)=>{
    const id = req.params.id;
    const data = req.body;
    console.log(id)
    Student.findByIdAndUpdate(id,data)
    res.send("Done")
})



module.exports = router;