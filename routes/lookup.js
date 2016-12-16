var itunes = require('../common/itunes');

exports.getActor = function (req, res) {
    itunes.lookup({
        id: req.params.id,
        entity: 'movieArtist'
    }, res, 'single');
};

exports.getActorMovies = function (req, res) {
    itunes.lookup({
        id: req.params.id,
        entity: 'movie'
    }, res, 'many');
};

exports.getMovie = function (req, res) {
    itunes.lookup({
        id: req.params.id,
        entity: 'movie'
    }, res, 'single');
};

exports.getTvShowSeason = function (req, res) {
    itunes.lookup({
        id: req.params.id,
        entity: 'tvSeason'
    }, res, 'single');
};

exports.getTvShowEpisodes = function (req, res) {
    itunes.lookup({
        id: req.params.id,
        entity: 'tvEpisode'
    }, res, 'many');
};

exports.getFeaturedMovies = function(req, res) {
    res.send({
            count: 3,
            trackId: ['265727087', '1078111961', '1134823596']
        })
};

exports.getFeaturedTvshows = function(req, res) {
    res.send({
        count: 3,
        trackId: ['465754521', '686765477', '168268985']
    })
};

exports.getFeaturedActors = function(req, res) {
    res.send({
        count: 3,
        trackId: ['272994458', '279372425', '628845', '189031776', '131136696', '427420961']
    })
};