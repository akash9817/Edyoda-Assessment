var playlist_card = document.querySelectorAll(".playlist-card")
var img =  document.querySelectorAll("#playlist-wrapper img")
var frame =  document.getElementById("video-player")
var title = document.getElementById("video-title")
var des = document.getElementById("video-description")
var views = document.getElementById("views-count")

var clickHandler = function(k){
    return function(){
        fetch("http://5d76bf96515d1a0014085cf9.mockapi.io/video/"+(k+1))
        .then(resp => resp.json())
        .then(resp => {
            frame.src = frame.src.replace(/\d{9}$/,resp.vimeoId)
            views.innerHTML = resp.views
            title.innerHTML = resp.title
            des.innerHTML = resp.description 
            document.documentElement.scrollTop = 0;
             var active = document.getElementsByClassName("active-card")
             active[0].classList.remove("active-card")
             img[k].parentElement.classList.add("active-card")
        })
        
    }
}
for(var k = 0; k < img.length; k++){
    img[k].onclick = clickHandler(k)
 
}

fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/playlist")
.then(res => res.json())
.then(res => {
    console.log(res)
    for(var i = 0; i < playlist_card.length; i++ ){
        for(var j = 0; j < playlist_card[i].children.length; j++){
            if(j==0){
            playlist_card[i].children[j].src = res[i].thumbnail

            }else{
                playlist_card[i].children[j].innerHTML = res[i].title
            }
        }   
    }
    console.log(img)
    
})
