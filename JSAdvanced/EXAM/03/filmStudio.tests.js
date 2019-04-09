let FilmStudio = require('./filmStudio');
let assert = require('chai').assert;

describe("FilmStudio", function () {
    describe("constructor", function () {
        it("should init as a string name", function () {
            let studio = new FilmStudio('string');

            assert.isString(studio.name);
            assert.equal(studio.name, 'string')
        });
        it('should contain array of films', () => {
            let studio = new FilmStudio('string');

            assert.property(studio, 'films')
        })
        it('should contain empty array films', () => {
            let studio = new FilmStudio('stud');

            assert.isArray(studio.films, 'films must be an array');
            assert.isTrue(studio.films.length === 0, 'films must be an empty array')
        })
    });

    describe('makeMovie', () => {
        let studio;

        beforeEach(() => {
            studio = new FilmStudio('studio1');
        })

        it('should make a movie with right params', () => {
            let roles = ['main', 'second', 'third'];
            let name = 'movieName';

            let result = studio.makeMovie(name, roles);

            assert.isObject(result);
            assert.equal(result.filmName, name);
            assert.isString(result.filmName)
            assert.isArray(result.filmRoles)
        })

        it('should not make a movie with name as a number', () => {
            let roles = ['main', 'second', 'third'];
            let name = 123;

            var fcn = () => { studio.makeMovie(name, roles); }

            // assert(fcn.to.throw(Error()))
            assert.throws(fcn, 'Invalid arguments');

        })
        it('should not make a movie 3 params', () => {
            let roles = ['main', 'second', 'third'];
            let name = 123;

            var fcn = () => { studio.makeMovie(name, roles, 123); }

            // assert(fcn.to.throw(Error()))
            assert.throws(fcn, 'Invalid arguments count');
        })

        it('should should make a second movie', () => {
            let roles = ['main', 'second', 'third'];
            let name = 'lotr';

            let movie1 = studio.makeMovie(name, roles);
            let movie2 = studio.makeMovie(name, roles);

            assert.equal(movie2.filmName, 'lotr 2')
        })
    })


    describe("casting", () => {
        let studio;
        beforeEach(() => {
            studio = new FilmStudio('studio1');

        })


        it('should add an unemployed actor', () => {
            let roles = ['main', 'second', 'third'];
            let name = 'lotr';

            let movie1 = studio.makeMovie(name, roles);

            let actor = 'kolio';
            let role = 'main';

            let casting = studio.casting(actor, role);

            assert.equal(casting, `You got the job! Mr. ${actor} you are next ${role} in the lotr. Congratz!`)
        })
        it('should add an unemployed actor', () => {

            let roles = ['main', 'second', 'third'];
            let name = 'lotr';

            let movie1 = studio.makeMovie(name, roles);

            let actor = 'kolio';
            let role = 'kopach';

            let casting = studio.casting(actor, role);

            assert.equal(casting, `${actor}, we cannot find a ${role} role...`)
        })

        it('should not add actor when ther are no movies', () => {
            let roles = ['main', 'second', 'third'];
            let name = 'lotr';

            let movie1 = studio.makeMovie(name, roles);

            let actor = 'kolio';
            let role = 'kopach';

            let casting = studio.casting(actor, role);

            assert.equal(casting, `${actor}, we cannot find a ${role} role...`)

        })

    })

    describe('lookForProducer', () => {
        let studio;
        beforeEach(() => {
            studio = new FilmStudio('studio1');

        })

        it('should add producer for a movie', () => {

            let roles = ['main',];
            let name = 'lotr';
            let actor = 'kolio';
            let role = 'main';

            let movie1 = studio.makeMovie(name, roles);
            let casting = studio.casting(actor, role);

            let result = studio.lookForProducer(name);

            assert.equal(result, 'Film name: lotr\nCast:\nkolio as main\n')

        })

        it('should not add producer for a non existing movie', () => {

            let roles = ['main',];
            let name = 'lotr';
            let actor = 'kolio';
            let role = 'main';

            let movie1 = studio.makeMovie(name, roles);
            let casting = studio.casting(actor, role);

            var fcn = () => { studio.lookForProducer('no'); }

            // assert(fcn.to.throw(Error()))
            assert.throws(fcn, 'no do not exist yet, but we need the money...');

        })



    })
});
