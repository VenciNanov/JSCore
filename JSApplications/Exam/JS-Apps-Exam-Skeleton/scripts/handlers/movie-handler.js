handlers.getAddMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs',
    }).then(function () {
        this.partial('./templates/movies/addMovie.hbs')
    }).catch(function (error) {
        notifications.handleError(error);
    })
}
handlers.postAddMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let data = { ...ctx.params }

    if (data.title.length < 6) {
        notifications.showError("The title must be at least 6 characters long.")
        return;
    } else if (data.description.length < 10) {
        notifications.showError("The description must be at least 10 characters long.")
        return;
    } else if (!data.imageUrl.startsWith('http://')) {
        if (!data.imageUrl.startsWith('https://')) {
            notifications.showError("The imageURL must start with 'http://' or 'https://'.")
            return;
        }
    }
    movieService.addMovie(data).then(function (res) {
        notifications.showSuccess('Movie created successfully.')
        ctx.redirect('#/home');
    }).catch(function (error) {
        notifications.handleError(error);
    })
}

handlers.getCinema = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let search = ctx.params.search;


    movieService.getCinema().then(function (res) {
        let userId = sessionStorage.getItem('id');
        let movies = res;


        if (search) {
            movies = movies.filter((movie) => movie.genres.includes(search))
        } 
        if(movies.length>0) {
            movies = movies.sort((a, b) => b.tickets - a.tickets);
        }

        ctx.movies = movies;
        ctx.loadPartials({
            header: 'templates/common/header.hbs',
            footer: 'templates/common/footer.hbs',
            cinemaMovie: 'templates/movies/cinemaMovie.hbs'
        }).then(function () {
            this.partial('./templates/movies/cinema.hbs');
        }).catch(function (error) {
            notifications.handleError(error);
        })
    })
}

handlers.getMyMovies = function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let userId = sessionStorage.getItem('id');

    movieService.getMyMovies(userId).then(function (res) {

        let movies = res;

        movies.forEach((movie) => { movie.isCreator = movie._acl.creator === userId });

        ctx.movies = movies;

        ctx.loadPartials({
            header: 'templates/common/header.hbs',
            footer: 'templates/common/footer.hbs',
            myMovie: './templates/movies/myMovie.hbs',
        }).then(function () {
            this.partial('./templates/movies/myMovies.hbs');
        }).catch(function (error) {
            notifications.handleError(error);
        })

    })

    ctx.movies = movies;
    ctx.loadPartials({

    })
}

handlers.buyTicket = function (ctx) {
    let id = ctx.params.id;
    movieService.getMovie(id).then(function (res) {
        let movie = res;

        let tickets = Number(movie.tickets)
        if (tickets > 0) {
            movie.tickets = tickets - 1;
        } else {
            notifications.showError('No tickets available');
            return;
        }


        movieService.buyTicket(id, movie).then(function () {
            notifications.showSuccess(`Successfully bought ticket for ${movie.title}!`);
            ctx.redirect('#/cinema')

        }).catch(function (error) {
            notifications.handleError(error)
        })
    })
}

handlers.getMovieDetails = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let id = ctx.params.id;

    movieService.getMovie(id).then(function (res) {
        let userId = sessionStorage.getItem('id');
        ctx.title = res.title;
        ctx.description = res.description;
        ctx.imageUrl = res.imageUrl;
        ctx.tickets = res.tickets;
        ctx.genres = res.genres;

        ctx.id = id;

        ctx.loadPartials({
            header: 'templates/common/header.hbs',
            footer: 'templates/common/footer.hbs'
        }).then(function () {
            this.partial('./templates/movies/movieDetails.hbs')
        }).catch(function (error) {
            notifications.handleError(error)
        })
    })
}

handlers.getEditMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let id = ctx.params.id;

    movieService.getMovie(id).then(function (res) {
        let userId = sessionStorage.getItem('id');
        ctx.title = res.title;
        ctx.description = res.description;
        ctx.imageUrl = res.imageUrl;
        ctx.tickets = res.tickets;
        ctx.genres = res.genres;

        ctx.id = id;

        ctx.loadPartials({
            header: 'templates/common/header.hbs',
            footer: 'templates/common/footer.hbs'
        }).then(function () {
            this.partial('./templates/movies/editMovie.hbs')
        }).catch(function (error) {
            notifications.handleError(error)
        })
    })
}

handlers.postEditMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let id = ctx.params.id;

    movieService.getMovie(id).then(function (res) {
        let data = { ...res };

        data.title = ctx.params.title;
        data.description = ctx.params.description;
        data.imageUrl = ctx.params.imageUrl;
        data.tickets = ctx.params.tickets;
        data.genres = ctx.params.genres;
        if (data.title.length < 6) {
            notifications.showError("The title must be at least 6 characters long.")
            return;
        } else if (data.description.length < 10) {
            notifications.showError("The description must be at least 10 characters long.")
            return;
        } else if (!data.imageUrl.startsWith('http://')) {
            if (!data.imageUrl.startsWith('https://')) {
                notifications.showError("The imageURL must start with 'http://' or 'https://'.")
                return;
            }
        }

        movieService.editMovie(id, data).then(function () {
            notifications.showSuccess('Updated successfully');
            ctx.redirect('#/myMovies')
        }).catch(function (error) {
            notifications.showError(error);
        })
    })
}

handlers.getDeleteMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let id = ctx.params.id;

    movieService.getMovie(id).then(function (res) {
        let userId = sessionStorage.getItem('id');
        ctx.title = res.title;
        ctx.description = res.description;
        ctx.imageUrl = res.imageUrl;
        ctx.tickets = res.tickets;
        ctx.genres = res.genres;

        ctx.isCreator = res._acl.creator === userId;
        ctx.id = id;

        ctx.loadPartials({
            header: 'templates/common/header.hbs',
            footer: 'templates/common/footer.hbs'
        }).then(function () {
            this.partial('./templates/movies/deleteMovie.hbs')
        }).catch(function (error) {
            notifications.handleError(error)
        })
    })
}

handlers.postDeleteMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let id = ctx.params.id;

    movieService.deleteMovie(id).then(function () {
        notifications.showSuccess('Movie removed successfully!')
        ctx.redirect('#/home');
    }).catch(function (error) {
        notifications.handleError(error);
    })
}