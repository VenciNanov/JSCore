function getInfo(){
    let stopId = $('#stopId').val();
    clearList();
    request('GET',getUrl(stopId),'',onGetBusInfoSuccess,onGetBusInfoError)
}

function request(method,url,data,onSuccess,onError){
    $.ajax({
        method,url,data,success:onSuccess,error:onError
    });
}

function clearList(){
    $("#buses").empty();
}

function getUrl(param){
   let url =  `https://judgetests.firebaseio.com/businfo/${param}.json`;

    return url;
}

function onGetBusInfoError() {
    $('#stopName').text('Error');
}
function onGetBusInfoSuccess(data){
    $('#stopName').text(data.name);

    for(const key in data.buses){
        if(data.buses.hasOwnProperty(key)){
            let busId = key;
            let time = data.buses[key];

            let $bus =$('<li>');
            $bus.text(`Bus ${busId} arrives in ${time} minutes`);
            $('#buses').append($bus);
        }
    }
}