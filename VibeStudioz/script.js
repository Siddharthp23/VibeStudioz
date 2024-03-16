console.log("welcome to vibestdioz");
//initializing the varibles 
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById('gif');
let songsItem = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById('masterSongName');
let vol = document.querySelector('#volume');
let num = document.querySelector('.num');
let volBox = document.querySelector('#volBox');
let songs =[
    {songName: "Husn(Anuv Jain)",filepath: "songs/1.mp3",coverPath: "husn.jfif"},
    {songName: "Tum se hi(Jab We Met)",filepath: "songs/2.mp3",coverPath: "cover2_TSH.jpg"},
    {songName: "Ghungroo(War)",filepath: "songs/3.mp3",coverPath: "cover3_G.jfif"},
    {songName: "Pehele bhi main(Animal)",filepath: "songs/4.mp3",coverPath: "cover4.jpg"},
    {songName: "Saiyyan(Kelash Kher)",filepath: "songs/5.mp3",coverPath: "cover5.webp"},
    {songName: "Satranga(Animal)",filepath: "songs/6.mp3",coverPath: "cover6.jfif"},
    {songName: "Pehla Pyaar(Kabir Singh)",filepath: "songs/7.mp3",coverPath: "cover7.jfif"},
    {songName: "Hawayein(Jab Harry Met Sejal)",filepath: "songs/8.mp3",coverPath: "cover8.jfif"},
    {songName: "Mast Magan(2 States)",filepath: "songs/9.mp3",coverPath: "cover9.jfif"},
    {songName: "Mehrama(Love Aaj Kal)",filepath: "songs/10.mp3",coverPath: "cover10.jfif"},

]
songsItem.forEach((element,i)=>{
     //element.getElementsByTagName('img')[0].src  = songs[i].coverpath;
     element.getElementsByClassName("SongName")[0].innerText = songs[i].songName;
});

 
//audioElement.play();

//handle play/pause click
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
        }
    
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
        }
});

//listen to events
audioElement.addEventListener('timeupdate',(eve)=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
});
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100; 
});

const makeAllPlays = ()=>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add();
    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        if(audioElement.paused)
        {
        songIndex = parseInt(e.target.id);
        console.log(songIndex);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime= 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
        }
        else
        {
            audioElement.pause();
            masterPlay.classList.remove('fa-pause');
            masterPlay.classList.add('fa-play');
            gif.style.opacity = 0;
            e.target.classList.remove('fa-pause');
            e.target.classList.add('fa-play');
              
        }
    })
})
    
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=10){
    songIndex+=1;
    }  
    else{
        songIndex += 1 ;
    }
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime= 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        
});
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
    songIndex+=1;
    }  
    else{
        songIndex -= 1;
    }
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime= 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        
});
vol.oninput = function(){
    audioElement.volume = vol.value/100;
    num.innerText = vol.value;
    if(audioElement.volume>=50)
    {
      volBox.classList.remove("fa-volume-high");  
      volBox.classList.add("fa-volume-low");  
    }
}
