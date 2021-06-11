function hello() {
    alert("Hello, World!");
}

window.onload=function(){
    var decorationbutton=document.getElementById("btn");
    decorationbutton.onclick=interval;
    var check=document.getElementById("bling");
    check.onchange=checkbox;
    var latinbutton=document.getElementById("piglatin");
    latinbutton.onclick=pig;
    var markovbutton=document.getElementById("malkovitch");
    markovbutton.onclick=markov;

}

function biggerdecoration(){
    // hello();
    var textarea=document.getElementById("text");
    // textarea.style.fontSize="24pt";
    var currsize = window.getComputedStyle(document.getElementById("text")).fontSize;
    var changesize=parseInt(currsize)+2+"pt";
    textarea.style.fontSize=changesize;

    
}

function checkbox(){
    //    hello();
    if(document.getElementById("bling").checked==true){
        document.getElementById("text").style.fontWeight = "bold";
        document.getElementById("text").style.color="green";
        document.getElementById("text").style.textDecoration="underline";
        document.body.style.backgroundImage='url("heart.gif")';
    }
    else{
        document.getElementById("text").style.fontWeight = "";
        document.getElementById("text").style.color = "";
        document.getElementById("text").style.textDecoration = "";
        document.body.style.backgroundImage = "";
    
    }

    
    
}

 function interval(){
    let timer = null; // stores ID of interval timer 
      if (timer === null) {
 		timer = setInterval(biggerdecoration, 500); 
	} else {
 		clearInterval(timer);
 		timer = null;
 } 

} 

function pig() {
    var words = document.getElementById("text").value;
    var splittedword = words.split(/\s+/);
    var result = "";
    for (var i = 0; i < splittedword.length; i++) {
        if (splittedword[i].charAt(0).match("[aeoiuAEOIU]")) {
            changed = splittedword[i] + "ay";
        } else {
            var word = splittedword[i];
            for (var j = 0; j < word.length; j++) {
                if (word[j].match("[aeoiuAEOIU]")) {
                    var changed = word.substring(j) + word.substring(0, j) + "ay";
                    break;
                }

            }
        }
        result += changed + " ";

    }
    document.getElementById("text").value = result;

}


function markov() {
    var words = document.getElementById("text").value;
    var arr = words.split(/\s+/);
    var result = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 5) {
            arr[i] = "Malkovich";
        }
        result += arr[i] + " ";
    }
    document.getElementById("text").value = result;
}




  
