var express = require('express')
var router = express.Router()
var User = require('../models/user.model')
const bcrypt = require('bcryptjs')

async function logInUser(req,res){
    console.log("Logging in user") 
    console.log(req.body) // undefined in the console
    
    try{
        const user= await User.findOne({
            email:req.body.email,
            password:req.body.password,
        })
        
        return res.status(200).json({status:'ok', user:user})
    }
    catch(error){
        console.log(error);
    }
    /*
    const isPasswordValid=await bcrypt.compare(
        req.body.password,
        user.password
    )
    if(isPasswordValid)
    {
        // const token = jwt.sign(
		// 	{
		// 		name: user.name,
		// 		email: user.email,
		// 	},
		// 	'secret123'
		// )

		return res.json({ status: 'ok', user: token })
    }  
    else
    {
        return res.json({ status: 'error', user: false })
    }     
    */
}

router.route('/')
.post(logInUser)

module.exports = router
