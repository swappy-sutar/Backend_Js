import express from 'express'

const app = express();
const port  = process.env.PORT || 3000

app.get('/' , (req,res)=>{
    res.send('Hello World')
})

app.get("/api/students", (req, res)=>{
    const allStudents = [
        {id: 1, name: "John" , collage: "JJM"},
        {id: 2, name: "Jane" , collage: "DKT"},
        {id: 3, name: "Bob" , collage: "SGU"},
        {id: 4, name: "Alice" , collage: "KIT"},
        {id: 5, name: "Eve" , collage: "JJM"},
        ];

        res.send(allStudents);
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
 