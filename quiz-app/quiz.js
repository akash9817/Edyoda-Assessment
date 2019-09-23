var total = 0
var yourAnswer = '';
fetch("http://5d76bf96515d1a0014085cf9.mockapi.io/quiz")
.then(res => res.json())
.then(res => {
    var answer = []
    localStorage.setItem("length",res.length)
    //rendering questions
    for(let i = 0; i < x.length; i++ ){
        x[i].innerHTML = `Q.${i+1} ${res[i].question}`
    }

    //rendering options 
    var l = 0   
    for(var j = 0; j < y.length; j){
        for(var k= 0; k < res[k].options.length; k++){
            y[j].innerHTML = res[l].options[k]
            j++
        }
      l =  l + 1
    }

    //tally answers 
    for(var m = 0; m < res.length; m++){
        answer.push(res[m].answer)
    }
    localStorage.setItem("points",answer)  
    
    
})

var x =  document.querySelectorAll(".quiz-item h3")
var y =  document.querySelectorAll(".option-wrapper p")

    if(window.location.search.length != ""){
    var total = 0
    var yourAnswer = '';
    var answer = []
    var length;
    yourAnswer =  window.location.search
    yourAnswer = yourAnswer.match(/(?<=\=)\d/g)
    answer = localStorage.getItem("points").split(",")
    length = localStorage.getItem("length")
    for(let m = 0; m < length; m++){
    
        if(yourAnswer[m] == answer[m]){
            total++
        }
    }
    document.getElementById("modal-wrapper").style.display = "block";    
    var result =  document.getElementById("result")
    result.innerHTML = `${total}/${length}`
    }
