
const arrayData = [
    {
        id: "card-1",
        cardNum: "1",
        imgUrl: "DATA_HQ.png",
        Heading: "Mission 1",
        color: "linear-gradient(-135deg, #c8e4b2, #7eaa92)",
        imageWidth: "300px",
        imageHeight: "350px",
        para: "You begin by helping the crew to enter the spaceship. Crew member Alisha is keen on security but she has changed the combination and forgotten the code.",
        link: "../puzzles/puzzle-1.html",
        lock: "lock1",
        frontFeatures: "front1"
    },
    {
        id: "card-2",
        cardNum: "2",
        imgUrl: "Puzzle_2.png",
        Heading: "Mission 2",
        color: "linear-gradient(-135deg, #c8e4b2, #7eaa92)",
        imageWidth: "300px",
        imageHeight: "350px",
        para: "– The on-board computer has a problem and it has lost some of its sensor data necessary to record the journey. Can you help Science Officer Hamis recover the data?",
        link: "../puzzles/puzzle-2.html",
        lock: "lock2",
        frontFeatures: "front2"
    },
    {
        id: "card-3",
        cardNum: "3",
        imgUrl: "Puzzle_3.png",
        Heading: "Mission 3",
        color: "linear-gradient(-135deg, #c8e4b2, #7eaa92)",
        imageWidth: "300px",
        imageHeight: "350px",
        para: "The final batch of Peelywally Crystals needs to be picked up by the spaceship before departure. Help the team find where these are located.",
        link: "../puzzles/puzzle-3.html",
        lock: "lock3",
        frontFeatures: "front3"
    },
    {
        id: "card-4",
        cardNum: "4",
        imgUrl: "Puzzle_4.png",
        Heading: "Mission 4",
        color: "linear-gradient(-135deg, #ec8f5e, #f1eb90)",
        imageWidth: "300px",
        imageHeight: "350px",
        para: "One of the main hazards on planet BRAW5 is the strong geomagnetic fields. These are being detected on sensors across the surface of the planet. Based on sensor data recorded in the following bar chart, plot the best rout for the explorers to take to Crystal Mountain.",
        link: "../puzzles/puzzle-4.html",
        lock: "lock4",
        frontFeatures: "front4"
    },
    {
        id: "card-5",
        cardNum: "5",
        imgUrl: "Puzzle_5.png",
        Heading: "Mission 5",
        color: "linear-gradient(-135deg, #ec8f5e, #f1eb90)",
        imageWidth: "300px",
        imageHeight: "350px",
        para: "The data from sensors measuring the diameter of rocks on BRAW5 as the planet warms and cools in the sunlight has been lost. Help the crew to sort the data and password protect it.",
        link: "../puzzles/puzzle-5.html",
        lock: "lock5",
        frontFeatures: "front5"
    },
    {
        id: "card-6",
        cardNum: "6",
        imgUrl: "Puzzle_6.png",
        Heading: "Mission 6",
        color: "linear-gradient(-135deg, #ec8f5e, #f1eb90)",
        imageWidth: "300px",
        imageHeight: "350px",
        para: "The crew are nearly ready for their return to earth.",
        link: "../puzzles/puzzle-6.html",
        lock: "lock6",
        frontFeatures: "front6"
    },
    {
        id: "card-7",
        cardNum: "7",
        imgUrl: "Puzzle_7.png",
        Heading: "Mission 7",
        color: "linear-gradient(-135deg, #dc0000, #850000, #ec8f5e)",
        imageWidth: "300px",
        imageHeight: "350px",
        para: "Okay, we are ready to take off and return to earth. The last clue on how to fire the engines is in this puzzle. We need your help.",
        link: "../puzzles/puzzle-7.html",
        lock: "lock7",
        frontFeatures: "front7"
    }
]


const cardContainer = document.querySelector('.container')


const functionCards = () => {
    arrayData.map((data) => {
        
        cardContainer.innerHTML += '<div class="card" id="'+data.id+'">\
                                        <div class="lockScreen" id="'+data.lock+'" style="display: none;"><i class="fa-solid fa-lock" id="lockIcon"></i></div>\
                                        <div class="front" style="background-image: url(\'../assets/backgrounds/'+data.imgUrl+'\');">\
                                            <div class="'+data.frontFeatures+'" id="'+data.frontFeatures+'">\
                                                <h1>'+data.Heading+'</h1>\
                                                <button class="more-btn" onclick="handleClick'+data.cardNum+'()">Read More</button>\
                                            </div>\
                                        </div>\
                                        <div class="back">\
                                            <img src="../assets/backgrounds/Top-secret.png"></img>\
                                            <h1>MISSION BRIEF</h1>\
                                            <p>'+data.para+'</p>\
                                            <div class="background_back"></div>\
                                            <button class="return" onclick="handle2ndClick'+data.cardNum+'()"><i class="fa-solid fa-arrow-rotate-left"></i></button>\
                                            <a href="'+data.link+'"><button class="start">Start</button></a>\
                                        </div>\
                                    </div>';
    })
}

function handleClick1() {
    document.getElementById("card-1").style.transform = "rotateY(180deg)";
}
function handle2ndClick1() {
    document.getElementById("card-1").style.transform = "rotateY(0deg)";
}

function handleClick2() {
    document.getElementById("card-2").style.transform = "rotateY(180deg)";
}
function handle2ndClick2() {
    document.getElementById("card-2").style.transform = "rotateY(0deg)";
}

function handleClick3() {
    document.getElementById("card-3").style.transform = "rotateY(180deg)";
}
function handle2ndClick3() {
    document.getElementById("card-3").style.transform = "rotateY(0deg)";
}

function handleClick4() {
    document.getElementById("card-4").style.transform = "rotateY(180deg)";
}
function handle2ndClick4() {
    document.getElementById("card-4").style.transform = "rotateY(0deg)";
}

function handleClick5() {
    document.getElementById("card-5").style.transform = "rotateY(180deg)";
}
function handle2ndClick5() {
    document.getElementById("card-5").style.transform = "rotateY(0deg)";
}

function handleClick6() {
    document.getElementById("card-6").style.transform = "rotateY(180deg)";
}
function handle2ndClick6() {
    document.getElementById("card-6").style.transform = "rotateY(0deg)";
}

function handleClick7() {
    document.getElementById("card-7").style.transform = "rotateY(180deg)";
}
function handle2ndClick7() {
    document.getElementById("card-7").style.transform = "rotateY(0deg)";
}

functionCards();
unlockFinalMission();
