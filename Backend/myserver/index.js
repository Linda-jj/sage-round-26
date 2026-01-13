const express= require('express')
const users= require ("./data/users")

 const app =express()
 app.set("view engine",'ejs')


 app.get('/post',(req,res) =>{
   res.render("index")
 })

 app.get("/about",(req,res)=>{
res.render("about",{users:users})
 })

 app.get('/',(req,res)=>{
    res.send('Home page')
 })
 app.get('/posts',(req,res)=>{
    res.send('this is the posts...')
 })
 app.get('/delated',(req,res)=>{
    res.send('pls delated')
 })
app.get('/users',(req,res)=>{
   res.json({
      "name":"Lideya",
      "age":"33",
      "genger":"F"
   })
})


 app.listen(8000,()=>{
    console.log('the srver is lisining 8000');
    
 })