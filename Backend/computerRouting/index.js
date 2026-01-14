const express=require('express')
const laptops=require("./data/laptops")

const app=express()
app.get("/laptops",(req,res)=>{
    res.status(200).json(laptops)
})
//query 
app.get("/laptops/search",(req,res)=>{
    const q=req.query.q.toLowerCase()
    const laptop=laptops.filter((laptop)=>laptop.model.toLowerCase().includes(q))
console.log(q)
res.status(200).json(laptop)
})
//params
app.get('/laptops/:id',(req,res)=>{
    const id=req.params.id
    const laptop=laptops.find((laptop)=>laptop.id ==id)
    console.log(laptop)
    if(laptop == undefined){
        res.status(404).json({
            "massage":"Can not found the page"
        })
    }else{
 res.status(200).json(laptop)
    }
   
})




app.listen(8000,()=>{
    console.log('the server is listening port 8000')
})