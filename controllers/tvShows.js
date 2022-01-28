const {tvShows, actionTvShows,newTvShows} = require('../models/tvShows')



exports.tvShows =(req, res)=>{
    res.send(tvShows)
}

exports.actionTvShows =(req, res)=>{
    res.send(actionTvShows)
}

exports.newTvShows =(req, res)=>{
    res.send(newTvShows)
}

exports.getTvShow =(req, res)=>{
   const tvShowId = req.params.tvShowId
   const findTvShow = tvShows.find((item)=>item.id == tvShowId)
   res.send(findTvShow)

}

exports.getTvShowEpisode=(req, res)=>{
    const {tvShowId, seasonId,episodeId} = req.params
    const findTvShow = tvShows.find((item)=> item.id == tvShowId)
    const findSeason = findTvShow.seasons.find((item)=> item.id == seasonId)
    const findEpisode = findSeason.episodes.find((item)=>item.id == episodeId)
    res.send(findEpisode)
}

exports.getTvShowSeason=(req, res)=>{
    // const { tvShowId, seasonId } = req.params
    const tvShowId= req.params.tvShowId
    const seasonId= req.params.seasonId
    const findTvShow = tvShows.find((item)=> item.id == tvShowId)
    const findSeason = findTvShow.seasons.find((item)=> item.id == seasonId)
     res.send(findSeason)

}