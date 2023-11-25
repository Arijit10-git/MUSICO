// var crsr = document.querySelector(".cursor-dot")
// var blur = document.querySelector(".cursor-blur")

// document.addEventListener("mousemove",function(dets){
//     crsr.style.left = dets.x+"px"
//     crsr.style.top = dets.y+"px"
//     blur.style.left = dets.x - 250 + "px"
//     blur.style.top = dets.y - 250 + "px"

// cursorBlur .animate({
//     left: 'dets.x - 250 + "px"',
//     top: 'dets.y - 250 + "px"'
// }, {duration: 500, fill: "forwards" });
// });


// const log = document.querySelectorAll("#musicani path");

// for (let index = 0; index < log.length; index++) {
//      console.log(`Letter ${index} is ${log[index].getTotalLength()}`);   
// }

// Letter 0 is 564.5421142578125
//  Letter 1 is 417.7330322265625
//  Letter 2 is 231.29312133789062
//  Letter 3 is 525.433349609375
//  Letter 4 is 623.7181396484375
//  Letter 5 is 231.29244995117188
//  Letter 6 is 499.9862365722656
//  Letter 7 is 231.2935028076172
//  Letter 8 is 623.7174072265625
//  Letter 9 is 867.1707763671875
//  Letter 10 is 786.9574584960938

// let currentScrollposition = 0;
// let scrollAmount = 320;

// const sinG = document.querySelector(".singers");
// const hScroll = document.querySelector(".horizontal-scroll");
// const btnScrollLeft = document.querySelector("#btn-scroll-left");
// const btnScrollRight = document.querySelector("#btn-scroll-right");

// btnScrollLeft.style.opacity = "0";

// let maxScroll = -sinG.offsetWidth + hScroll.offsetWidth;

// function scrollHorizontally(val){
//     currentScrollposition += (val * scrollAmount);

//     if(currentScrollposition >= 0){
//         currentScrollposition = 0;
//         btnScrollLeft.style.opacity = "0";
//     }else{
//         btnScrollLeft.style.opacity = "1";
//     }

//     if(currentScrollposition < maxScroll){
//         currentScrollposition = maxScroll;
//         btnScrollRight.style.opacity = "0";
//     }else{
//         btnScrollRight.style.opacity = "1";
//     }

//     sinG.style.left = currentScrollposition + "px";
// }





const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorBlur = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {

    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorBlur.style.left = `${posX}px`;
    cursorBlur.style.top = `${posY}px`;

    cursorBlur .animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 150, fill: "forwards" });

    });





    gsap.to(".nav", {
        backgroundColor : "#000",
        height :"80px",
        duration :0.5,
        scrollTrigger:{
            trigger:".nav",
            scroller: "body",
            // markers: true,
            start:"top -10%",
            end:"top -11%",
            scrub:1.5
        }
    })
    
    gsap.to("#main",{
        backgroundColor : "#000",
        scrollTrigger:{
            trigger:"#main",
            scroller:"body",
            // markers:true,
            start:"top -20%",
            end:"top -70%",
            scrub:2
        }
    })






let currentScrollposition = 0;
let scrollAmount = 320;

const sinG = document.querySelector(".singers");
const hScroll = document.querySelector(".horizontal-scroll");
const btnScrollLeft = document.querySelector("#btn-scroll-left");
const btnScrollRight = document.querySelector("#btn-scroll-right");

btnScrollLeft.style.opacity = "0";

let maxScroll = -sinG.offsetWidth + hScroll.offsetWidth;

function scrollHorizontally(val){
    currentScrollposition += (val * scrollAmount);

    if(currentScrollposition >= 0){
        currentScrollposition = 0;
        btnScrollLeft.style.opacity = "0";
    }else{
        btnScrollLeft.style.opacity = "1";
    }

    if(currentScrollposition < maxScroll){
        currentScrollposition = maxScroll;
        btnScrollRight.style.opacity = "0";
    }else{
        btnScrollRight.style.opacity = "1";
    }

    sinG.style.left = currentScrollposition + "px";
}



VanillaTilt.init(document.querySelectorAll(".box,.about-us-text "), {
    max: 30,
    speed: 400
});

// let pop_song_left = document.getElementById('pop_song_left');
// let pop_song_right = document.getElementById('pop_song_right');
// let pop_song = document.getElementsByClassName('pop_song')[0];


// pop_song_right.addEventListener('click', ()=>{
//     pop_song.scrollLeft += 330;
// })
// pop_song_left.addEventListener('click', ()=>{
//     pop_song.scrollLeft -= 330;
// })



// #######################  TRACKS #######################


const music = new Audio('song/1.mp3');
// music.play();

const songs = [
    {
        id: '1',
        songName: `On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "musicimg/1.jpg",
        time:''
    },
    {
        id: '2',
        songName: `Dilbar <br>
        <div class="subtitle">Neha Kakkar</div>`,
        poster: "musicimg/2.jpg",
        time:''
    },
    {
        id: '3',
        songName: `Jo Tu Na Mila <br>
        <div class="subtitle">Asim Azhar</div>`,
        poster: "musicimg/3.jpg",
        time:''
    },
    {
        id: '4',
        songName: `Humnava Mere <br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "musicimg/4.jpg",
        time:''
    },
    {
        id: '5',
        songName: `Tera Zikr <br>
        <div class="subtitle">Darshan Raval</div>`,
        poster: "musicimg/5.jpg",
        time:''
    },
    {
        id: '6',
        songName: `Kalaastar <br>
        <div class="subtitle">Yo Yo Honey Singh </div>`,
        poster: "musicimg/6.jpg",
        time:''
    },
    {
        id: '7',
        songName: `Tu Aake Dekhle <br>
        <div class="subtitle">King</div>`,
        poster: "musicimg/7.jpg",
        time:''
    },
    {
        id: '8',
        songName: `Maan Meri Jaan <br>
        <div class="subtitle">King</div>`,
        poster: "musicimg/8.jpg",
        time:''
    },
    {
        id: '9',
        songName: `Gone Girl <br>
        <div class="subtitle">Badshah</div>`,
        poster: "musicimg/9.jpg",
        time:''
    },
    {
        id: '10',
        songName: `Kaley Sheshe <br>
        <div class="subtitle">Addy Nagar</div>`,
        poster: "musicimg/10.jpg",
        time:''
    },
    {
        id: '11',
        songName: `Lut Gaye <br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "musicimg/11.jpg",
        time:''
    },
    {
        id: '12',
        songName: `Dil Mein Ho Tum <br>
        <div class="subtitle">Armaan Malik</div>`,
        poster: "musicimg/12.jpg",
        time:''
    },
    {
        id: '13',
        songName: `Main Agar Kahoon <br>
        <div class="subtitle">Sonu Nigam</div>`,
        poster: "musicimg/13.jpg",
        time:''
    },
    {
        id: '14',
        songName: `Cheques <br>
        <div class="subtitle">Shubh</div>`,
        poster: "musicimg/14.jpg",
        time:''
    },
    {
        id: '15',
        songName: `High Rated Gabru <br>
        <div class="subtitle">Guru Randhawa</div>`,
        poster: "musicimg/15.jpg",
        time:''
    },
]


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});




let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        console.log(Date());

    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = '#96c11e00';
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        // console.log(index);
        music.src = `song/${index}.mp3`;
        poster_master_play.src = `musicimg/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `song/${index}.mp3`;

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let { songName } = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        });
           
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = '#96c11e27';
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})


       
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    
    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60);
    
    // console.log(min1);
    if(sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;
    
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if(sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    
    currentStart.innerText = `${min2}:${sec2}`;



    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener(`change`, ()=>{
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if(vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if(vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill'); 
    }
    if(vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill'); 
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index< 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;

    }
    music.src = `song/${index}.mp3`;
        poster_master_play.src = `musicimg/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let { songName } = elss;
            title.innerHTML = songName;
        });
           
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = '#96c11e27';
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})

next.addEventListener('click', ()=>{
    index ++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length){
    index = 1;
    }
    music.src = `song/${index}.mp3`;
        poster_master_play.src = `musicimg/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let { songName } = elss;
            title.innerHTML = songName;
        });
           
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = '#96c11e27';
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
});
    
    














let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
});





let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;

        
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;


        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
});


const next_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index++;
    }
    music.src = `song/${index}.mp3`;
    poster_master_play.src = `musicimg/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let { songName } = elss;
        title.innerHTML = songName;
    });
       
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = '#96c11e27';
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}


const repeat_music = () => {
    index;
    music.src = `song/${index}.mp3`;
    poster_master_play.src = `musicimg/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let { songName } = elss;
        title.innerHTML = songName;
    });
       
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = '#96c11e27';
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}


const random_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    music.src = `song/${index}.mp3`;
    poster_master_play.src = `musicimg/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let { songName } = elss;
        title.innerHTML = songName;
    });
       
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = '#96c11e27';
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

music.addEventListener('ended', ()=>{
       let b = shuffle.innerHTML;
       
       switch (b) {
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;
        }
})
            
       
        

