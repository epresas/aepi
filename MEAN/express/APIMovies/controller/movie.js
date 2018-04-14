var Director = require('../models/Director');
var Movie = require('../models/Movie');
var generator = require('./NamesGenerator');

//CRUD

//CREATE
function createMovie(req, res) {
    for (let i = 0; i < 10; i++) {
        


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
            console.log(director.id)
            movie.save(function (err, movie_result) {
                if (err) {
                    res.status(500).send({ "message": err.message });
                } else {
                    res.status(201).send(movie_result);
                }
            })
            //res.status(200).send()
        });
        
    }

}

//READ
function findMovies() {

    Movie.find({}, function (err, movie) {
        if (err) throw err;

        console.log(movie);

    });
}

function findMovie(req, res) {
    var movie_id = req.params.id;
    console.log(movie_id);
    Movie.findById(movie_id), function (err, movie) {
        if (err) {
            res.status(500).send({ "message": err.message });
        } else {
            res.status(200).send(movie);

        }
    }

}

//UPDATE


function updateMovie(req, res) {
    var movie_id = req.params.id; //(pide el id)
    var movie_obj = req.body; //recibe el objeto de postman (post put)

    Movie.findByIdAndUpdate(movie_id, movie_obj, function (err, movie) {
        if (err) {
            res.status(500).send({ "message": err.message });
        } else {
            res.status(200).send(movie);

        }
    });

    /*   Movie.find({"_id": movie_id}, function (err, movie) { 
          movie_id = movie.id;
          Movie.update()//falta el resto de mongoose
      }) */
}
function deleteMovie(req, res) {
    var movie_id = req.params.id;
    Movie.findByIdAndRemove(movie_id, function (err, result) {
        res.status(200).send();
    })

}

module.exports = {
    createMovie: createMovie,
    findMovie: findMovies,
    findMovie: findMovie,
    // updateMovie: updateMovie
    // deleteMovie: deleteMovie
}



