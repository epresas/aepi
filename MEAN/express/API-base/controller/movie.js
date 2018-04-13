var Movie = require("../models/Movie");

function createMovie(req, res) {
    var movie = new Movie();

    var title = req.body.title;
    var year = req.body.year;

    movie.title = title;
    movie.year = year;
    
    movie.save( function (err, movie_result) {
        if (err) {
            res.status(500).send({"message": err.message});
        } else {
            res.status(201);
        }
    })
    res.status(200).send()
}

module.exports = {
    createMovie
}