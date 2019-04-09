$(() => {
    renderMonkeys()

    async function renderMonkeys(){
        let monkeysTemplate = await $.ajax({
            url:'./monkeyTemplate.html'
        });
        let compiledTemplate = Handlebars.compile(monkeysTemplate);
        let context = {
            monkeys
        }

        $('div.monkeys').html(compiledTemplate(context))
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