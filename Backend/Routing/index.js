const express= require('express')
const books= require("./data/books")

const app=express()
 
app.get('/books',(req, res)=>{
    res.status(200).json(books)
});

//query
app.get("/books/search",(req,res)=>{
    const q =req.query.q.toLowerCase()
    const book =books.filter((book)=> book.title.toLowerCase().includes(q))
    console.log(q)
    res.status(200).json(book)
})


//params
app.get('/books/:id',(req,res)=>{
const id=req.params.id
const book=books.find((book)=>book.id ==id)
console.log(book)

if (book == undefined){
    res.status(404).json({
        success:"false",
        massgge:"book not found"

    })
}else{
    res.status(200).json(book)
}
})
// app.post("/",(req, res)=>{
//     res.send("Home page from post method")
// });
// app.delete("/",(req, res)=>{
//     res.send("Home page from delete method")
// });
// app.put("/",(req, res)=>{
//     res.send("Home page from put method")
// });




app.listen(8000,()=>{
    console.log("server is listening port ")
})