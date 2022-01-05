var express = require('express')
var router = express.Router()
var User = require('../models/user.model')

router.route('/').post(async (req, res) => {
    try {
        console.log("Adding image..."); //doesn't run yet

        //fuck you error.
        const url = req.body.url
        const email = req.body.email
        console.log(email);
        var uploadsList = []
        User.findOne({ email: email }, async (err, docs) => {
            if (!err) {
                uploadsList = JSON.parse(JSON.stringify(docs.uploads))
                const list = [...uploadsList, url]
                await User.updateOne({ email: email }, { uploads: list }) 
                console.log("Done adding...")
            }
            else
                throw err
        })
    

    }
    catch (e) {
        throw e
    }
})
module.exports = router