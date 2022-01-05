// mongoose setup
const mongoose=require('mongoose');

const User= new mongoose.Schema(
    {
    name:{type:String, required:true},
    email:{type:String,required:true,unique:true},
    
    password:{type:String, required:true},
    genre:{type:String,required:true}, // optional field
    uploads:Array // stores an array of image url's
},
    {collection:'user-data'}
)

//experimental feature:  sort of like a "like" feature

/*const Image=new mongoose.Schema(
    {
        name:{type:String,required:true},
        likes:{type:Number,default:0}
    },
    {collection:'image-data'}
) // the post function code which will fetch request and post the data to frontens
*/

/*
var images=require(path to image);
console.log("Like!!")
const url=req.body.url; //incase we're using image url instead of the name
const name=req.body.name;

app.post("/index/:id", function(req,res){
   images.findOne({name:name}, function(err, theUser){
        if(err){
            console.log(err);
        } else {
            Image.likes += 1;
            Image.save();
            console.log(Image.likes);
        }
    });
});
*/



const model=mongoose.model('UserData',User) // User is the schema associated with the model UserData
// new schema for image data
//const Image =new mongoose.Schema(
    
//)
module.exports=model