$("#submit").click=findword;

function handleResponse(responseObj) {
    console.log("selam");
    console.log("response is "+responseObj.status+" and "+responseObj.text);
     
       $("#main").html(responseObj).css("color","red");
    
}

function findword () {
    console.log("selamawit");
    var where = $("#form").attr("action");
    
    var fe = $("#wordSearch").val();
    var what = { wordSearch: fe };
    $.get( where, what, handleResponse, "json");
}  