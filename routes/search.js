var itunes = require('../common/itunes');

exports.search = function (req, res) {
    itunes.search({
        term: req.query.q,
        media: 'movie,tvShow',
        entity: 'movie,tvSeason',
        limit: req.query.limit || 10
    }, res);
};

exports.searchMovie = function (req, res) {
    itunes.search({
        term: req.query.q,
        media: 'movie',
        entity: 'movie',
        genreId: req.query.genre || '',
        limit: req.query.limit || 10
    }, res);
};

exports.searchTvShowEpisode = function (req, res) {
    itunes.search({
        attribute : 'tvEpisodeTerm',
        term: req.query.q,
        media: 'tvShow',
        entity: 'tvEpisode',
        limit: req.query.limit || 10
    }, res);
};

exports.searchTvShowSeason = function (req, res) {
    itunes.search({
        term: req.query.q,
        media: 'tvShow',
        entity: 'tvSeason',
        genreId: req.query.genre || '',
        limit: req.query.limit || 10
    }, res);
};

exports.searchActor = function (req, res) {
    itunes.search({
        attribute : 'movieArtistTerm',
        term: req.query.q,
        media: 'movie',
        entity: 'movieArtist',
        limit: req.query.limit || 10
    }, res);
};

exports.getFeaturedActionMovies = function (req, res) {
    itunes.search({
        term: 'movie',
        media: 'movie',
        genreId: 4401,
        limit: 3
    }, res);
};

exports.getFeaturedHorrorMovies = function (req, res) {
    itunes.search({
        term: 'movie',
        media: 'movie',
        genreId: 4408,
        limit: 3
    }, res);
};

exports.getFeaturedRealityTvshows = function (req, res) {
    itunes.search({
        term: 'tvShow',
        genreId: 4007,
        limit: 3
    }, res);
};

exports.getFeaturedCommedyTvshows = function (req, res) {
    itunes.search({
        term: 'tvShow',
        genreId: 4000,
        limit: 3
    }, res);
};