const movieService = (() => {
    function addMovie(data) {
        return kinvey.post('appdata', 'movies', 'kinvey', data);
    }

    function getCinema() {
        return kinvey.get('appdata', 'movies', 'kinvey', '?query={}&sort{"tickets:-1"}');
    }

    function getMyMovies(id) {
        return kinvey.get('appdata', `movies?query={"_acl.creator":"${id}"}`, 'kinvey');
    }

    function getMovie(id) {
        return kinvey.get('appdata', `movies/${id}`, 'kinvey');
    }

    function buyTicket(id, movie) {
        return kinvey.update('appdata', `movies/${id}`, 'kinvey', movie);
    }

    function deleteMovie(id) {
        return kinvey.remove('appdata', `movies/${id}`, 'kinvey');
    }

    function editMovie(id, data) {
        return kinvey.update('appdata', `movies/${id}`, 'kinvey', data);
    }

    return {
        addMovie,
        getCinema,
        buyTicket,
        getMovie,
        deleteMovie,
        getMyMovies,
        editMovie,
    }
})();