// Initialize the likeCounts array based on the initial likes shown in the HTML
let likeCounts = Array.from(document.querySelectorAll('.react-detail'))
                       .map(el => parseInt(el.textContent.replace(' likes', '').replace(',', '')) || 0);

// Initialize the likedStatus array with false (not liked) for each post
let likedStatus = new Array(likeCounts.length).fill(false);

// Initialize the currentIndex
let currentIndex = 0;
const images = document.getElementById('image-carousel').children;
const dots = document.querySelectorAll('.dot');
const heart = document.getElementById('heart');
const postImg = document.querySelector('.post-img');

function showImage(index) {
    // Calculate the direction of the transition
    const direction = index > currentIndex ? -1 : 1;

    // Hide all images and move them accordingly
    for (let i = 0; i < images.length; i++) {
        const offset = (i - currentIndex) * 100 * direction;
        images[i].style.transition = 'transform 0.5s ease';
        images[i].style.transform = `translateX(${offset}%)`;
    }

    // Show the selected image
    images[index].style.transition = 'transform 0.5s ease';
    images[index].style.transform = 'translateX(0)';
    currentIndex = index;

    // Update the caption
    const captions = document.querySelectorAll('.post-cap');
    for (let i = 0; i < captions.length; i++) {
        captions[i].style.display = 'none';
    }
    captions[index].style.display = 'block';

    // Update the profile name in the caption
    const profile_name = document.querySelectorAll('.profile-name');
    for (let i = 0; i < profile_name.length; i++) {
        profile_name[i].style.display = 'none';
    }
    profile_name[index].style.display = 'block';

    // Update the profile pic
    const profile_pic = document.querySelectorAll('.p-img');
    for (let i = 0; i < profile_pic.length; i++) {
        profile_pic[i].style.display = 'none';
    }
    profile_pic[index].style.display = 'block';    
    
    // Update the profile name
    const name = document.querySelectorAll('.name');
    for (let i = 0; i < name.length; i++) {
        name[i].style.display = 'none';
    }
    name[index].style.display = 'block';       

    // Update the geotag name
    const geotag = document.querySelectorAll('.geolocation');
    for (let i = 0; i < geotag.length; i++) {
        geotag[i].style.display = 'none';
    }
    geotag[index].style.display = 'block';       

    // Update the react detail (likes count)
    const react_details = document.querySelectorAll('.react-detail');
    for (let i = 0; i < react_details.length; i++) {
        react_details[i].style.display = 'none';
    }
    react_details[index].style.display = 'block';
    react_details[index].innerHTML = `${likeCounts[index].toLocaleString()} likes`; // Update the current react detail with the correct likes count

    // Update the heart icon based on the liked status
    if (likedStatus[index]) {
        heart.classList.replace('far', 'fas');
        heart.style.color = 'red';
    } else {
        heart.classList.replace('fas', 'far');
        heart.style.color = 'white';
    }

    // Update active dot
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    dots[index].classList.add('active');
}

// Event listeners for dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showImage(index);
    });
});

postImg.addEventListener('dblclick', () => {
    if (!likedStatus[currentIndex]) {
        heart.classList.replace('far', 'fas');
        heart.style.color = 'red';
        likeCounts[currentIndex] += 1; // Increase likes count for current post
        document.querySelectorAll('.react-detail')[currentIndex].innerHTML = `${likeCounts[currentIndex].toLocaleString()} likes`; // Update the current react detail
        likedStatus[currentIndex] = true; // Set the liked status to true
    }
    postImg.classList.add('active');

    setTimeout(() => {
        postImg.classList.remove('active');
    }, 1000);
});

heart.addEventListener('click', handleHeart);

function handleHeart() {
    if (!likedStatus[currentIndex]) {
        heart.classList.replace('far', 'fas');
        heart.style.color = 'red';
        likeCounts[currentIndex] += 1; // Increase likes count for current post
        likedStatus[currentIndex] = true; // Set the liked status to true
    } else {
        heart.classList.replace('fas', 'far');
        heart.style.color = 'white';
        likeCounts[currentIndex] -= 1; // Decrease likes count for current post
        likedStatus[currentIndex] = false; // Set the liked status to false
    }
    document.querySelectorAll('.react-detail')[currentIndex].innerHTML = `${likeCounts[currentIndex].toLocaleString()} likes`; // Update the current react detail
}
// Show the initial image
showImage(currentIndex);


var Q1Check = false;
var Q2Check = false;
var Q3Check = false;
var Q4Check = false;
var Q5Check = false;
var Q6Check = false;


////////////////////////////////////////////////
// Question 1
////////////////////////////////////////////////
var keyInputQ1 = document.getElementById("userAnswerQ1");
keyInputQ1.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q1").click();
    }
});

function checkAnswerQ1() {
    var userAnswer = document.getElementById("userAnswerQ1").value.trim().toLowerCase();
    var result = document.getElementById("result1");

    if (userAnswer === "1 hour") {
        Q1Check = true;
        checkCompletion();
        
        result.textContent = "Well done, Agent.";
        result.style.color = "green";
        keyInputQ1.disabled = true;
        keyInputQ1.style.background = "#C8E4B2";
    } else {
        result.textContent = "Incorrect, Try Again Agent. Hint: Use the Posts Above To Find The Answer";
        result.style.color = "red";
        keyInputQ1.style.background = "#FF7676";
    }
    result.style.display = "block";
}
////////////////////////////////////////////////


////////////////////////////////////////////////
// Question 2
////////////////////////////////////////////////
var keyInputQ2 = document.getElementById("userAnswerQ2");
keyInputQ2.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q2").click();
    }
});

function checkAnswerQ2() {
    var userAnswer = document.getElementById("userAnswerQ2").value.trim().toLowerCase();
    var result = document.getElementById("result2");

    if (userAnswer === "4") {
        Q2Check = true;
        checkCompletion();
        
        result.textContent = "Well done, Agent.";
        result.style.color = "green";
        keyInputQ2.disabled = true;
        keyInputQ2.style.background = "#C8E4B2";
    } else {
        result.textContent = "Incorrect, Try Again Agent. Hint: Use the Posts Above To Find The Answer";
        result.style.color = "red";
        keyInputQ2.style.background = "#FF7676";
    }
    result.style.display = "block";
}
////////////////////////////////////////////////


////////////////////////////////////////////////
// Question 3
////////////////////////////////////////////////
var keyInputQ3 = document.getElementById("userAnswerQ3");
keyInputQ3.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q3").click();
    }
});

function checkAnswerQ3() {
    var userAnswer = document.getElementById("userAnswerQ3").value.trim().toLowerCase();
    var result = document.getElementById("result3");

    if (userAnswer === "48 hours") {
        Q3Check = true;
        checkCompletion();
        
        result.textContent = "Well done, Agent.";
        result.style.color = "green";
        keyInputQ3.disabled = true;
        keyInputQ3.style.background = "#C8E4B2";
    } else {
        result.textContent = "Incorrect, Try Again Agent. Hint: Use the Posts Above To Find The Answer";
        result.style.color = "red";
        keyInputQ3.style.background = "#FF7676";
    }
    result.style.display = "block";
}
////////////////////////////////////////////////


////////////////////////////////////////////////
// Question 4
////////////////////////////////////////////////
var keyInputQ4 = document.getElementById("userAnswerQ4");
keyInputQ4.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q4").click();
    }
});

function checkAnswerQ4() {
    var userAnswer = document.getElementById("userAnswerQ4").value.trim().toLowerCase();
    var result = document.getElementById("result4");

    if (userAnswer === "reptiles") {
        Q4Check = true;
        checkCompletion();
        
        result.textContent = "Well done, Agent.";
        result.style.color = "green";
        keyInputQ4.disabled = true;
        keyInputQ4.style.background = "#C8E4B2";
    } else {
        result.textContent = "Incorrect, Try Again Agent. Hint: Use the Posts Above To Find The Answer";
        result.style.color = "red";
        keyInputQ4.style.background = "#FF7676";
    }
    result.style.display = "block";
}
////////////////////////////////////////////////


////////////////////////////////////////////////
// Question 5
////////////////////////////////////////////////
var keyInputQ5 = document.getElementById("userAnswerQ5");
keyInputQ5.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q5").click();
    }
});

function checkAnswerQ5() {
    var userAnswer = document.getElementById("userAnswerQ5").value.trim().toLowerCase();
    var result = document.getElementById("result5");

    if (userAnswer === "14:00-16:00" || userAnswer === "14:00,16:00" || userAnswer ===  "14:00, 16:00" || userAnswer ===  "14:00 to 16:00" || userAnswer ===  "14:00 16:00" || userAnswer ===  "2-4" || userAnswer ===  "2,4" || userAnswer === "2, 4" || userAnswer ===  "2 to 4" || userAnswer ===  "2 4") {
        Q5Check = true;
        checkCompletion();
        
        result.textContent = "Well done, Agent.";
        result.style.color = "green";
        keyInputQ5.disabled = true;
        keyInputQ5.style.background = "#C8E4B2";
    } else {
        result.textContent = "Incorrect, Try Again Agent. Hint: Use the Posts Above To Find The Answer";
        result.style.color = "red";
        keyInputQ5.style.background = "#FF7676";
    }
    result.style.display = "block";
}
////////////////////////////////////////////////


////////////////////////////////////////////////
// Question 6
////////////////////////////////////////////////
var keyInputQ6 = document.getElementById("userAnswerQ6");
keyInputQ6.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q6").click();
    }
});

function checkAnswerQ6() {
    var userAnswer = document.getElementById("userAnswerQ6").value.trim().toLowerCase();
    var result = document.getElementById("result6");

    if (userAnswer === "15:00-15:30" || userAnswer === "15:00,15:30" || userAnswer === "15:00, 15:30" || userAnswer === "15:00 to 15:30" || userAnswer === "15:00 15:30" || userAnswer === "3:00-3:30" || userAnswer === "3:00,3:30" || userAnswer === "3:00, 3:30" || userAnswer === "3:00 to 3:30" || userAnswer === "3:00 3:30" || userAnswer === "3-3:30" || userAnswer === "3,3:30" || userAnswer === "3, 3:30" || userAnswer === "3 to 3:30" || userAnswer === "3 3:30" ) {
        Q6Check = true;
        checkCompletion();
        
        result.textContent = "Well done, Agent.";
        result.style.color = "green";
        keyInputQ6.disabled = true;
        keyInputQ6.style.background = "#C8E4B2";
    } else {
        result.textContent = "Incorrect, Try Again Agent. Hint: Use the Posts Above To Find The Answer";
        result.style.color = "red";
        keyInputQ6.style.background = "#FF7676";
    }
    result.style.display = "block";
}

////////////////////////////////////////////////


////////////////////////////////////////////////////////////
// Functions for showing the image bigger and smaller
////////////////////////////////////////////////////////////
function showBigImage() {
    document.querySelector('.keypad-image-small').style.display = 'none';
    document.querySelector('.keypad-image-big').style.display = 'block';
    document.querySelector('.dark-overlay').style.display = 'block';
}

function hideBigImage() {
    document.querySelector('.keypad-image-big').style.display = 'none';
    document.querySelector('.keypad-image-small').style.display = 'block';
    document.querySelector('.dark-overlay').style.display = 'none';
}
////////////////////////////////////////////////////////////

function checkCompletion() {
    if (Q1Check && Q2Check && Q3Check && Q4Check && Q5Check && Q6Check) {
        setPuzzleCompletionStatus(2, 'complete');
        var nextPuzzle = document.getElementById("next-puzzle");
        nextPuzzle.style.display = "block";
    }
}
