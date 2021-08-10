let movies = db.collection('movies');

let movie_04 = {
    name: "Iron Man",
    director: { name: "Stefan", surname: "Stefanovic"},
    genres: ["Comedy", "Action", "Adventure"],
    release_year: 2000,
    rating: 9.8
}
db.collection('movies').doc('movie-04')
.set(movie_04)
.then(function() {
    console.log("Dodat film")
})
.catch(function (error) {
    console.log(`Greska: ${error}`)
})


let movie_05 = {
    name: "Black Widow",
    director: {name: "Marko", surname: "Markovic"},
    genres: ["Romantic", "Mystery", "Adventure"],
    release_year: 2018,
    rating: 8.7
}
db.collection('movies').doc('movie-05')
.set(movie_05)
.then( () => {
    console.log("Dodat jos jedan film")
})
.catch( (error) => {
    console.log(`Neka greska: ${error}`)
})

// Menja podatke o nekim filmovima u bazi

db.collection('movies').doc('movie-01').update({name: "No Hunger Games"})
.then(() => {
    console.log(`Uspesno promenjeni podaci filma`)
})
.catch((err) => {
    console.log(`Greska u menjanju podataka: ${err}`)
})

// Dodavanje zanra filmu
let movie = db.doc('movies/movie-01');
movie.update({
   genres : firebase.firestore.FieldValue.arrayUnion("Romantic")
});

//Briše žanr nekom filmu

movie.update({
    genres: firebase.firestore.FieldValue.arrayRemove("Sci-fi")
});

// Menja ime ili prezime nekom režiseru.
movie.update({
    "director.name": "John"
})



