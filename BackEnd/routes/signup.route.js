var express = require('express')
var router = express.Router()
var User = require('../models/user.model')

// async function signInUser(req,res){
//     console.log("Signing in user") 
//     console.log(req.body) // undefined in the console
//     try
//     {
//         const user=await User.create({
//             name: req.body.name,
//             email:req.body.email,
//             password: req.body.password
//           })
//         user.save()
//         console.log(user);
//         return res.status(200).json({status:200, user: user})
//     }
//     catch(err)
//     {
//         return res.json({status:'error',error:'Duplicate email'})
//     } 
// }

router.route('/').post(async(req, res)=>{
    console.log("Signing in user") 
    console.log(req.body) // undefined in the console
    try
    {
        const user=User.create({
            name: req.body.name,
            email:req.body.email,
            password: req.body.password,
            genre: req.body.genre,
          })
        user.save()
        console.log(user);
        return res.status(200).json({status:200, user: user})
    }
    catch(err)
    {
        return res.json({status:'error',error:'Duplicate email'})
    } 
})
// .post(signInUser)

module.exports = router
