console.log("Welcome to Spotify");

// initilize the variables
let songsongIndex=0;
let audioElement =new Audio("songs/Recording1.mp3");
// audioElement.play();

let masterPlay1=document.querySelectorAll(".masterPlay");
let masterPlay2=document.getElementById("masterPlay");
let myProgressBar =document.getElementById("myProgressBar");
let play=document.getElementById("play");
let gif=document.getElementById("gif");
let pause=document.getElementById("pause");
let songItem=Array.from(document.getElementsByClassName('songItem'));
let songimg=document.getElementsByClassName('songimg');
let masterSongName=document.getElementById('masterSongName');
let songs=[
    {songName:'Lingastakam',filePath:`songs/Recording1.mp3`,coverPath:`image/shiva.png`},
    {songName:'Good Luck Sakhi',filePath:`songs/Recording2.mp3`,coverPath:`image/good.png`},
    {songName:'Annaya',filePath:`songs/Recording3.mp3`,coverPath:`image/bro.png`},
    {songName:'Chellama',filePath:`songs/Recording4.mp3`,coverPath:`image/bro.png`},
    {songName:'Chandhamma',filePath:`songs/Recording5.mp3`,coverPath:`image/chan.png`},
    {songName:'Lingastakam',filePath:`songs/Recording6.mp3`,coverPath:`image/shiva.png`},
    {songName:'Good Luck Sakhi',filePath:`songs/Recording7.mp3`,coverPath:`image/good.png`},
    {songName:'Annaya',filePath:`songs/Recording8.mp3`,coverPath:`image/bro.png`},
    {songName:'Chellama',filePath:`songs/Recording9.mp3`,coverPath:`image/bro.png`},
    {songName:'Chandhamma',filePath:`songs/Recording10.mp3`,coverPath:`image/chan.png`}
];
songItem.forEach((element,i)=> {
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML=songs[i].songName;
});



// play pause button
// masterPlay.addEventListener('click',()=>{
//     console.log("hi");
//     if(audioElement.paused||audioElement.currentTime<=0){
//         audioElement.play();
//         // masterPlay.classList.remove('circle-play-solid.svg');
//         // masterPlay.classList.add('cirle-pause-solid.svg');
//         // masterPlay.style.display="none";
//         // let pause1=getElementById("pause");
//         // let img=document.createElement('img');
//         // img.src=`cirle-pause-solid.svg`;
//         // document.body.appendChild(img);
//         play.remove();
//         let img=document.getElementById('Pause');
//         img.src='circle-pause-solid.svg';

//     }
//     else{
//         audioElement.pause();
//         console.log("hi");
        // masterPlay.classList.remove('circle-play-solid.svg');
        // masterPlay.classList.add('cirle-pause-solid.svg');
//     }
// });
// masterPlay.forEach((element)=> {
//     console.log(element);
//     element.addEventListener('click',()=>{
//         if(audioElement.paused||audioElement.currentTime<=0){
//             audioElement.play();
//             // play.remove();
//             // pause.src='circle-pause-solid.svg';
            
    
//         }
//         else{
//             audioElement.pause();
//             pause.remove();
//             play.src='circle-play-solid.svg';
//             console.log("hi");

//         }    
//     })
// });
function addplay(){
    play.src='circle-play-solid.svg';
    play.style.display='inline';
}
function addpause(){
    pause.src='circle-pause-solid.svg';
    pause.style.display='inline';
}
play.addEventListener('click',()=>{
    audioElement.play();
    play.style.display='none';
    addpause();
    // console.log("play");
    gif.style.opacity=1;
    
});
pause.addEventListener('click',()=>{
    audioElement.pause();
    pause.style.display='none';
    addplay();
    // console.log("pause");
    gif.style.opacity=0;
    
});
masterPlay2.addEventListener('click',()=>{
    audioElement.play();
    masterPlay2.remove();
    addpause();
    // console.log("masterPlay");
    gif.style.opacity=1;
    
});

// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
    // console.log(progress);
});
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
    myProgressBar.offsetWidth = myProgressBar.value * audioElement.duration/100;
});
let songIndex;
Array.from(document.getElementsByClassName('iconimg')).forEach(element => {
   
        // console.log(element);
        
        let imgElement = element.querySelector('img'); // Select the img element
        // console.log(imgElement);
        
        let click=0;
        imgElement.addEventListener('click',(e)=>{
            songIndex=parseInt(e.target.id);
            masterSongName.innerHTML=songs[songIndex].songName;
            console.log(songIndex);
            imgElement.style.display='none';
            click++;
            console.log(click);
            if(click%2!=0){
                makeAll();
                addpause1(imgElement); // Pass the img element to the function
                masterPlay2.remove();
                // addplay();
                play.style.display='none';
                addpause();
                audioElement.src=`songs/Recording${songIndex+1}.mp3`;
                audioElement.currentTime=0;
                audioElement.play();
                gif.style.opacity=1;

            }
            else{
                audioElement.pause();
                addplay1(imgElement);
                pause.style.display='none';
                addplay();
                console.log("pause");
                gif.style.opacity=0;
            }
        });
        // console.log(imgElement);
        // console.log(imgElement.style.display);
        
    
});
function addplay1(e){
    e.src='circle-play-solid.svg';
    e.style.display='inline';
}
function addpause1(e){
    // console.log(e);
    e.src='circle-pause-solid.svg';
    e.style.display='inline';
    // console.log('pause');

}
function makeAll(){
    Array.from(document.getElementsByClassName('iconimg')).forEach(element=>{
        let imgElement = element.querySelector('img');
        imgElement.src='circle-play-solid.svg';
        element.style.display='inline';
        // console.log("makeAll");
    })
}
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/Recording${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    makeAll();
    let playid=document.getElementById(`${songIndex}`);
    playid.src='circle-pause-solid.svg';
    audioElement.play();
    gif.style.opacity=1;
    masterSongName.innerHTML=songs[songIndex].songName;
});
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/Recording${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    makeAll();
    let playid=document.getElementById(`${songIndex}`);
    playid.src='circle-pause-solid.svg';
    audioElement.play();
    gif.style.opacity=1;
    masterSongName.innerHTML=songs[songIndex].songName;
});