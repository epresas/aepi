var Director = require('../models/Director');
var Movie = require('../models/Movie');
var generator = require('./NamesGenerator');

//CRUD

//CREATE
function createMovie(req, res) {
    for (let i = 0; i < 100; i++) {
        

        var count = 0;
        var director = new Director;
        director.name = generator.getName();
        director.surname = generator.getSurname();
        director.rating = Math.round(Math.random() * (10 - 1) + 1);
        director.save(function (err, director) {
            var movie = new Movie();
            movie.title = generator.getMovieName();
            movie.year = generator.randomYear();
            movie.cast = generator.randomNamesList();
            movie.rating = Math.round(Math.random() * (10 - 1) + 1);
            movie.director = director.id;
            movie.save(function (err, movie_result) {
                if (err) {
                    res.status(500).send({ "message": err.message });
                } else {
                    res.status(201).send({ "message":"Creadas correctamente."});
                }
            })
        });
        
    }

}

//READ
function findMovies(req, res) {

    Movie.find({}, function (err, movie) {
        if (err) {
            res.status(500).send({ "message": err.message });
        } else {
            res.status(201).send(movie);
        }

    });
}

function findMovie(req, res) {
    var movie_id = req.params.id;
    console.log(movie_id);
    Movie.findById(movie_id, function (err, movie) {
        if (err) {
            res.status(500).send({ "message": err.message });
        } else {
            res.status(200).send(movie);

        }
    }).populate({ path: 'director' })

}

//UPDATE


function updateMovie(req, res) {
    var movie_id = req.params.id; //(pide el id)
    var movie_obj = req.body; //recibe el objeto de postman (post put)

    Movie.findByIdAndUpdate(movie_id, movie_obj, function (err, movie) {
        if (err) {
            res.status(500).send({ "message": err.message });
        } else {
            console.log(movie);
            res.status(200).send(movie);

        }
    });

}

//DELETE
function deleteMovie(req, res) {
    var movie_id = req.params.id;
    Movie.findByIdAndRemove(movie_id, function (err, result) {
        res.status(200).send();
    })

}

module.exports = {
    createMovie,
    findMovies,
    findMovie,
    updateMovie,
    deleteMovie
}



