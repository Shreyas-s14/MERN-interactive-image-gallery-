var express = require('express')
var router = express.Router()
var User = require('../models/user.model')


// router.route('/').get((req, res)=>{
//     try{
//         console.log("hello");
//         console.log(req.body);
//         //const user = User.findOne({email: u.email}, (err, docs)=>{
//         //    if(!err){
//         //        console.log(docs.uploads); // was logged before does doc work??
//             //     return res.status(200).json({
//             //         status:200,
//             //         docs:docs.uploads
//             // })
//        // }
    
//          // })
//     }
// catch(err){
//     console.log("Error");
//     return res.status(500).json({
//         status:500,
//         message:err
//     })
// }
// })

router.route('/').post(async (req, res)=>{
    const u = req.body
    const user = User.findOne({email: u.email}, (err, docs)=>{
           if(!err){
               console.log(docs.uploads); // was logged before does doc work??
               return res.status(200).json({status: 200, uploads: docs.uploads})
        }
        else
            console.log("User not found!!!")
    })
})
    


module.exports = router
