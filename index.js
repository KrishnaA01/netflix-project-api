require('dotenv').config();
const cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.PORT;
const {movies, actionMovies, newMovies, getMovies } = require("./controllers/movies");
const { actionTvShows,newTvShows,tvShows,getTvShow,getTvShowEpisode, getTvShowSeason} = require('./controllers/tvShows');


app.use(cors());

//1. all movies route
app.get('/movies',movies);

//2. new movies routes
app.get('/new-movies',newMovies);


//3. action movies routes
app.get('/action-movies',actionMovies);


//4. find movies by id
// params ==> /:id
// queries ==> ?id=123

app.get("/movie/:id", getMovies);



/********************TV Shows************ */

//1. all tv shows
app.get('/tv-shows', tvShows)

//2. action tv shows
app.get('/action-tv-shows', actionTvShows)

//3. new tv shows
app.get('/new-tv-shows', newTvShows)


//4. find by tv show by id

app.get('/tv-show/:tvShowId', getTvShow)

//5 find episode by Id => /:TvShowId/:season/:episodeId

app.get('/tv-show-episode/:tvShowId/:seasonId/:episodeId', getTvShowEpisode)

app.get('/tv-show-season/:tvShowId/:seasonId', getTvShowSeason)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})