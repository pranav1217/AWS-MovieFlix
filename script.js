// ===============================
// MovieFlix JavaScript
// AWS EC2 + Amazon S3
// ===============================

// Open Video Popup

function openVideo(videoURL) {

    const popup = document.getElementById("popup");

    const player = document.getElementById("moviePlayer");

    const source = document.getElementById("movieSource");

    source.src = videoURL;

    player.load();

    popup.style.display = "flex";

    player.play();

}
// Close Video Popup

function closeVideo() {

    const popup = document.getElementById("popup");

    const player = document.getElementById("moviePlayer");

    const source = document.getElementById("movieSource");

    player.pause();

    player.currentTime = 0;

    source.src = "";

    player.load();

    popup.style.display = "none";

}

// Close popup when clicking outside

window.onclick = function(event){

    const popup = document.getElementById("popup");

    if(event.target == popup){

        closeVideo();

    }

};

// ESC key closes popup

document.addEventListener("keydown",function(event){

    if(event.key==="Escape"){

        closeVideo();

    }

});

// Movie Search

const searchBox = document.getElementById("search");

searchBox.addEventListener("keyup",function(){

    const value = searchBox.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        const title = card.querySelector("h2").textContent.toLowerCase();

        if(title.includes(value)){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }

    });

});

// Smooth Scroll

document.querySelectorAll("nav a").forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

    });

});

// Console Message

console.log("MovieFlix Loaded Successfully");