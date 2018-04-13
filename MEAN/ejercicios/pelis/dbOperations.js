
var Director = require('./Director');
var Movie = require('./Movie');
var generator = require('./NamesGenerator');

function createMovie() {

    var movie = new Movie();
    movie.title = generator.getMovieName();
    movie.year = generator.randomYear();
    movie.cast = generator.randomNamesList();
    movie.rating = Math.round(Math.random() * (10 - 1) + 1);

    var director = new Director;
    director.name = generator.getName();
    director.surname = generator.getSurname();
    director.rating = Math.round(Math.random() * (10 - 1) + 1);
    director.save(function (err, director) {
        movie.director = director.id;
        movie.save(function (err) {
            if (err) {
                console.log("Error " + err.message)
            } else {
                console.log("Película insertada");
            }
        });
    });

}
//CRUD

function findMovie() {

    movie.find({}, function (err, movie) {
        if (err) throw err;
     
        console.log(movie);
        
    });
}

function updateMovie() {
    movie.findOneAndUpdate({ rating: 2 }, { rating: 5 }, function (err, movie) {
        if (err) throw err;
        // Usuario actualizado
        console.log(movie);
    });
}

module.exports = {
    createMovie: createMovie,
    findMovie: findMovie,
    updateMovie: updateMovie
    // deleteMovie: deleteMovie
}



