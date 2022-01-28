const {movies, newMovies, actionMovies} = require("../models/movies")



// export 
exports.movies=(req,res)=>{
    res.send(movies)
}
exports.newMovies=(req,res)=>{
    res.send(newMovies)
}
exports.actionMovies=(req,res)=>{
    res.send(actionMovies)
}
exports.getMovies = (req, res)=>{
    const movieId = req.params.id;

    const findMovie = movies.find(movie=> movie.id === movieId);
    res.send(findMovie)
}