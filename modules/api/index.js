const service=require('./model')

module.exports = function (app){

    app.get('/api/user',service.google)
    app.get('/archive/api',service.archive)
    app.get('/books/api',service.books)
    app.get('/mostPopular/api',service.mostpopular),
    app.get('/movieReviews/api',service.movies)

}
