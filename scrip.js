let songs=new Audio("mp3 song/5.mpeg.mp3");
let masterBtn=document.getElementById("player-control-icon-3");
let range=document.getElementById("range");
let upperAudio=document.querySelectorAll(".card-img");
let songName=document.getElementById(".p1");
let volumeIcon=document.getElementsByClassName("fa-solid fa-volume-high");


document.addEventListener("click", function (event) {
    // Check if the clicked element has the classes "fa-solid" and "fa-volume-high"
    if (
        event.target.classList.contains("fa-solid") &&
        event.target.classList.contains("fa-volume-high")
    ) {
        // Toggle the volume icon classes
        event.target.classList.toggle("fa-volume-high");
        event.target.classList.toggle("fa-volume-xmark");
        console.log("Clicked on volume control");
    }
    else if (
        event.target.classList.contains("fa-solid") &&
        event.target.classList.contains("fa-volume-xmark")
    ) {
        // Toggle back to "fa-volume-high" if it has "fa-volume-xmark"
        event.target.classList.toggle("fa-volume-high");
        event.target.classList.toggle("fa-volume-xmark");
        console.log("Clicked to set volume back to high");
    }
});



masterBtn.addEventListener("click",function(){
if(songs.paused || songs.currentTime<=0){
    //play song
    songs.play();
    masterBtn.classList.remove("fa-circle-play");
    masterBtn.classList.add("fa-circle-pause","light-icon");

    //moving range 
   setInterval(function(){
      //song duration convert into percentage
      let percentage=(songs.currentTime/songs.duration)*100;
       range.value=percentage;
   },1000);

songs.intervalId = intervalId;


songs.intervalId = intervalId;
} else {
    //pause song
    songs.pause();
    masterBtn.classList.remove("fa-circle-pause", "light-icon");
    masterBtn.classList.add("fa-circle-play");

    clearInterval(songs.intervalId);
}
});

range.addEventListener("click",function(){
    //percent into duration 
    //we can play song using range move and listen song at any range 
songs.currentTime=(range.value*songs.duration)/100;
});


// Function to update the song information in the music player
function updateSongInfo(songTitle, songImage) {
    let songNameElement = document.querySelector(".p1"); // Assuming there's only one element with class "p1"
    let songImageElement = document.querySelector(".left-control .img");
// Assuming there's only one element with class "img"
    

    songNameElement.textContent = songTitle;
    songImageElement.src = songImage;
}

upperAudio.forEach(function(element){
element.addEventListener("click",function(e){

    let index = e.target.id;
    // console.log(index);
    songs.src=`mp3 song/${index}.mpeg.mp3`;
    songs.play();
    range.value=0;
    songs.currentTime=0;
   

     // Get the card title and image
     let card = element.closest(".card");
        let cardTitle = card.querySelector('.card-title').textContent;
        let cardImage = card.querySelector('.card-img').src;


     // Update the song information in the music player
     updateSongInfo(cardTitle, cardImage);

    masterBtn.classList.remove("fa-circle-play");
    masterBtn.classList.add("fa-circle-pause","light-icon");
});
});

// let volumeRange = document.getElementById('range');

// volumeRange.addEventListener('input', () => {
//   let volumePercentage = volumeRange.value;
//   updateVolume(volumePercentage);
// });

// // Function to perform any action with the volume value
// function updateVolume(volumePercentage) {
//   let actualVolume = (volumePercentage / 100);
//   songs.volume=actualVolume;
//   console.log(`Volume set to: ${actualVolume}`);

// }
const volumeRange = document.getElementById('range');

volumeRange.addEventListener('input', () => {
    const volumePercentage = volumeRange.value;
    songs.volume = volumePercentage / 100;
    console.log(`Volume set to: ${volumePercentage}`);
});