
var Director = require('./Director');
var Movie = require('./Movie');
var generator = require('./NamesGenerator');

function createMovie() {

    var movie = new Movie();
    movie.title = generator.getMovieName;
    movie.year = generator.randomDate;
    movie.cast = movie.cast.push(generator.getName + " " + generator.getSurname);
    movie.rating = Math.round(Math.random() * (10 - 1) + 1);

    var director = new Director();
    director.name = generator.getName;
    director.surname = generator.getSurname;
    director.birthDate = generator.randomDate;
    director.rating = Math.round(Math.random() * (10 - 1) + 1);
    director.save(function (err, director) {
        movie.director = director.id;
        movie.save(function (err) {
            if (err) {
                console.log("Error " + err.message)
            } else {
                console.log("Película insertada correctamente");
            }
        });
    });

}

function name(params) {
    
}

module.exports = {
    createMovie: createMovie
}



