var skin =  document.getElementById("skin")
var eyes = document.getElementById("eyes")
var mouth = document.getElementById("mouth")
var left = document.getElementById("left")
var eye_card = document.getElementById("select-eyes-card")
var skin_card =  document.getElementById("select-skin-card")
var mouth_card = document.getElementById("select-mouth-card")

function skin_fn(){
    skin_card.style.display = "block"
    mouth_card.style.display = "none"
    eye_card.style.display = "none"
}
 function eye_fn(){
     skin_card.style.display = "none"
    mouth_card.style.display = "none"
    eye_card.style.display = "block"
}
function mouth_fn(){
    skin_card.style.display = "none"
    mouth_card.style.display = "block"
    eye_card.style.display = "none"
}

 var x =  document.getElementsByTagName("img");
 for(let i = 0; i < x.length; i++){
     if(x[i].id.includes("skin")){
         x[i].onclick = function(){
             skin.src = x[i].src
             eye_fn()
         }
     }else if(x[i].id.includes("eye")){
         x[i].onclick = function(){
             eyes.src = x[i].src
             mouth_fn()
         }
     }else if(x[i].id.includes("mouth")){
         x[i].onclick = function(){
             mouth.src = x[i].src
         }
     }
 }