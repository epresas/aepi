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

function getMovies(req, res) {
    Movie.find({}, function (err, movies) {
        if (err) {
            res.status(500).send({ "message": err.message });
        } else {
            res.status(200).send(movies);
            
        } 
    })
    
}
function getMovie(req, res) {
    var movie_id = req.params.id;
    console.log(movie_id);
    Movie.findById(movie_id),function  (err, movie) {
        if (err) {
            res.status(500).send({ "message": err.message });
        } else {
            res.status(200).send(movie);

        }  
    }
    
}

function updateMovie (req, res) {
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
    Movie.findByIdAndRemove(movie_id,function (err, result) {
        res.status(200).send();
    })
    
}


module.exports = {
    createMovie,
    getMovies,
    getMovie,
    updateMovie,
    deleteMovie
}