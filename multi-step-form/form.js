var p = "Please enter a valid"
$('#StepOneNext').click((e) =>{
    e.preventDefault()
    firstForm()
    var x = $('#StepOneContainer label:contains(*)')
for(let i = 0; i < x.length; i++){
    if(x[i].control.value == ""){
        var y = document.getElementById(`${x[i].htmlFor}_error`)
        y.style.display = "block"
        y.innerHTML = "this field cannot be empty"
    }
}
})

$('#StepTwoNext').click((e) =>{
    e.preventDefault()
secondForm()
var x = $('#StepTwoContainer label:contains(*)')
for(let i = 0; i < x.length; i++){
    if(x[i].control.value == ""){
        var y = document.getElementById(`${x[i].htmlFor}_error`)
        y.style.display = "block"
        y.innerText = "this field cannot be empty"
    }
}
})
$('#StepTwoPrevious').click((e) =>{
    e.preventDefault()
    document.getElementById("StepOneContainer").style.display ="block"
    document.getElementById("StepTwoContainer").style.display ="none"

})

$('#StepThreeSubmit').click((e) =>{
    e.preventDefault()
var x = $('#StepThreeContainer label:contains(*)')
for(let i = 0; i < x.length; i++){
    if(x[i].control.value == ""){
        var y = document.getElementById(`${x[i].htmlFor}_error`)
        y.style.display = "block"
        y.innerText = "this field cannot be empty"
    }
}
if($('#select_program').val() != "" && $('#message').val() != "" ){
    document.getElementById("StepThreeContainer").style.display ="none"
    document.getElementById("SuccessContainer").style.display = "block"
    }
})

$('#StepThreePrevious').click((e) =>{
    e.preventDefault()
    document.getElementById("StepTwoContainer").style.display ="block"
    document.getElementById("StepThreeContainer").style.display ="none"

})

 console.log($('input[type=text]'))
function firstForm(){
    var first =  document.getElementById("first_name")
    var last = document.getElementById("last_name")
    var email = document.getElementById("email")
   if(!/\D/g.test(first.value)){
    document.getElementById(`${first.id}_error`).innerText = `${p} first name`  
    document.getElementById(`${first.id}_error`).style.display = "block"
   }
   if(!/\D/g.test(last.value) && last.value != ""){
    document.getElementById(`${last.id}_error`).innerText = `${p} last name`  
    document.getElementById(`${last.id}_error`).style.display = "block"
   }
   if(!/\S+@\S+\.\S+/g.test(email.value)){
    document.getElementById(`${email.id}_error`).innerText = `${p} email`  
    document.getElementById(`${email.id}_error`).style.display = "block"
   }
   if(/\D/g.test(first.value) && /\S+@\S+\.\S+/g.test(email.value)){
       document.getElementById("StepOneContainer").style.display ="none"
       document.getElementById("StepTwoContainer").style.display ="block"
   }
}

function secondForm(){
    var contact =  document.getElementById("contact")
    var city = document.getElementById("city")
    var country = document.getElementById("country")
console.log(document.getElementById(`${contact.id}_error`).innerHTML)
   if(!/\d/g.test(contact.value)){
    document.getElementById(`${contact.id}_error`).innerText = `${p} contact`  
    document.getElementById(`${contact.id}_error`).style.display = "block"
   }
   if(!/\D/g.test(city.value) && city.value != ""){
    document.getElementById(`${city.id}_error`).innerText = `${p} city`   
    document.getElementById(`${city.id}_error`).style.display = "block"
   }
   if(!/\D/g.test(country.value)){
    document.getElementById(`${country.id}_error`).innerText = `${p} country`   
    document.getElementById(`${country.id}_error`).style.display = "block"
   }
   if(/\d/g.test(contact.value) && /\D/g.test(country.value)){
       console.log("sadsad")
       document.getElementById("StepTwoContainer").style.display ="none"
       document.getElementById("StepThreeContainer").style.display ="block"
   }
}