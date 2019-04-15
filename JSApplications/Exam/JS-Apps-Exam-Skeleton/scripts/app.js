const handlers = {}

$(() => {
  const app = Sammy('#container', function () {
    this.use('Handlebars', 'hbs');
    // home page routes
    this.get('/index.html', handlers.getHome);
    this.get('/', handlers.getHome);
    this.get('#/home', handlers.getHome);

    // user routes
    this.get('#/register', handlers.getRegister);
    this.get('#/login', handlers.getLogin);

    this.post('#/register', handlers.registerUser);
    this.post('#/login', handlers.loginUser);
    this.get('#/logout', handlers.logoutUser);

    // ADD YOUR ROUTES HERE
    this.get('#/cinema(/=search)?', handlers.getCinema);
    this.get('#/myMovies', handlers.getMyMovies);


    this.get('#/addMovie', handlers.getAddMovie);
    this.get('#/buyTicket/:id', handlers.buyTicket)
    this.get('#/details/:id', handlers.getMovieDetails)
    this.get('#/edit/:id', handlers.getEditMovie);
    this.get('#/delete/:id',handlers.getDeleteMovie);

    this.post('#/addMovie', handlers.postAddMovie);
    this.post('#/edit/:id', handlers.postEditMovie);
    this.post('#/delete/:id',handlers.postDeleteMovie);
  });
  app.run();
});