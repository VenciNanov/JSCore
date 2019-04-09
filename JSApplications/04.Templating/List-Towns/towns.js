function attachEvents(){
    $('#btnLoadTowns').on('click',getTowns);

    function getTowns(){
        let towns = $('#towns').val().split(', ');

        let templateElem = $('#towns-template').html();
        //compile template
        let compiledTemplate = Handlebars.compile(templateElem)
        //create context
        let context = {
            towns:towns
        };
        //append to html
        $('#root').html(compiledTemplate(context))
    }
}