$(() => {
    renderCatTemplate();

    async function renderCatTemplate() {
        let catsTemplate = await $.ajax({
            url:'./catsTemplate.html'
        });
        let compiledTemplate = Handlebars.compile(catsTemplate);
        let context = {
            cats:window.cats
        };
        $('#allCats').html(compiledTemplate(context))

        // TODO: Render cat template and attach events
    }

})

function showInfo(id){
    let element =  $(`#${id}`).css('display');
    if(element==="none"){
        $(`#${id}`).css('display','block')
    }
    if(element==="block"){
        $(`#${id}`).css('display','none')
    }
   
}