$(()=>{

    $('#btn').on('click',(event)=>{
        event.preventDefault();
        //console.log($("#terms").get(0));
       // console.log(reqword);
      var reqword=document.getElementById('term').value;
       //console.log(reqword);
       $.post("http://localhost:5008/getAll",{word:reqword})
       .done((data)=>{
           showresult(data);
           console.log(data[0]['word']);
       })
       .fail((err)=>{
           console.log(err);
       })
       .always(()=>{
        $('#loader').hide();
     });
     $('#loader').show();
     $('#displayresult').empty();

       
  
    });
    $('#loader').hide();
    
});

showresult=(val)=>{
    $('#displayresult').empty();
    for (let i=0;i<val.length;i++){
        $('#displayresult').append(`<li> (${val[i].wordtype})::${val[i].definition}</li>`)
    }
    
}

