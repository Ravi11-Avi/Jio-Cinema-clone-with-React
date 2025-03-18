const express = require("express");
const movies =require("./db.json");

const app = express();
const PORT = 8000;

const cors = require("cors");
// Allow requests from frontend
app.use(cors());


//ROUTES
app.get("/api/movies", (req, res)=>{
    return res.json(movies);
});

app.get("/api/movies/:id", (req, res)=>{
    const id = Number(req.params.id);
    const movie = movies.find((movie)=>movie.id=== id);
    return res.json(movie);
})


app.listen(PORT,()=> console.log(`Server started at ${PORT}`));



