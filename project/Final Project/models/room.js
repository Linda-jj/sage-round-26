 const mongoose=require('mongoose');

 const roomSchema=mongoose.Schema({
    name:{
        type:String,
    },
    maxcount:{
        type:Number,

    },
    rentperday:{
   type:Number,
    },
    imgurls:[],
    currentbookings:[],
    type:{
    type:String,
    },
    description:{
        type:String,
    }
},
{
timestamps:true,
}
)

const roomModel= mongoose.model('rooms',roomSchema)
module.exports=roomModel