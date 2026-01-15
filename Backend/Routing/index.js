const express= require('express')
let books=require('./data/books')

const app=express()
app.use(express.json())
app.use((req,res,next)=>{
    if(req.query.key !=11){
        res.status(200).json({
            success:"false",
            massgge:"Key not found"

        })
    }else{
        next()
    }

})

app.post('/books',(req,res)=>{
    const body=req.body
    const id=books.length+1
    body.id=id
    console.log(body)
    books.push(body)
    res.status(201).json({
       success: "true",
       message:"you created new book"
})
}
)

app.put('/books/:id',(req,res)=>{
    const id =req.params.id
    const body=req.body
    books= books.map((book)=>{
        if(book.id== id){
            return{...book,...body}
        }else{
            return book
        }
    })
    res.status(200).json({
        success:"true",
        massgge:"edit book"
    })
})
app.delete('/books/:id',(req,res)=>{
    const id=req.params.id
    books=books.filter((book)=>book.id!=id)
    res.status(200).json({
        success:"true",
        massgge:"you delated"
    })



})
 
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