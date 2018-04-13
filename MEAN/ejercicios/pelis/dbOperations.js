
var Director = require('./Director');
var Movie = require('./Movie');
var generator = require('./NamesGenerator');

function createMovie() {

    var movie = new Movie();
    movie.title = generator.getMovieName;
    // movie.year = generator.randomDate(new Date(1910, 0, 1), new Date());
    movie.cast = movie.cast.push(generator.getFullName);
    movie.rating = Math.round(Math.random() * (10 - 1) + 1);

    var director = new Director;
    director.name = generator.getName;
    director.surname = generator.getSurname;
    // director.birthDate = generator.randomDate(new Date(1910, 0, 1), new Date());
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



module.exports = {
    createMovie: createMovie
}



