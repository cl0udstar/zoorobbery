function changeColor(radio, color) {
    var container = radio.parentNode.querySelector('.water_wave');
    var route = radio.closest('.route');

    // Reset color for all containers within the same set
    var containersInSet = route.querySelectorAll('.water_wave');
    containersInSet.forEach(function(containerInSet) {
        containerInSet.style.backgroundColor = '';
        containerInSet.style.border = '';
    });

    // Set color for the selected container
    if (radio.checked) {
        container.style.backgroundColor = color;
        container.style.border = "2px solid";
    }
}


// Predefined sequence of checked radio buttons
const correctSequence = [
    ['route1-1'], 
    ['route2-1'], 
    ['route3-2'], 
    ['route4-2'], 
    ['route5-2'], 
    ['route6-1'], 
    ['route7-1'], 
    ['route8-1'], 
    ['route9-2'], 
    ['route10-2']
];

var SCheck = false;
var Q1Check = false;
var Q2Check = false;
var Q3Check = false;
var Q4Check = false;

// Function to check the sequence of checked radio buttons
function checkSequence() {
    var checkedButtons = document.querySelectorAll('.results input[type="radio"]:checked');
    var checkedIds = Array.from(checkedButtons).map(button => button.id);

    var correct = true;
    var correctCheckedButtons = []; // Array to store IDs of correct checked buttons
    var wrongCheckedButtons = []; // Array to store IDs of wrong checked buttons
    for (var i = 0; i < correctSequence.length; i++) {
        
        var correctSet = correctSequence[i];

        var isChecked = false;
        for (var j = 0; j < correctSet.length; j++) {
            if (checkedIds.includes(correctSet[j])) {
                isChecked = true;
                correctCheckedButtons.push(correctSet[j]); // Store ID of correct checked button
                var container = document.getElementById('ww_' + correctSet[j]);
                container.style.backgroundColor = 'green'; // Set background color to green for correct checked buttons
            }
        }
        if (!isChecked) {
            correct = false;
        }
    }

    var result = document.getElementById("result");
    if (correct) {
        SCheck = true;
        checkCompletion();
        
        result.textContent = "Fantastic choice, Agent! You've selected the route with the lowest rainfall. You're navigating like a pro!";
        result.style.color = "green";
    } else {
        result.textContent = "Uh-oh, Agent! The route you chose has more rainfall than expected. Let's re-evaluate the options and find the driest path!";
        result.style.color = "red";
    }
    result.style.display = "block";

    // Display IDs of correct checked buttons (for testing)
    wrongCheckedButtons = checkedIds.filter(value => !correctCheckedButtons.includes(value));

    for (var i = 0; i < wrongCheckedButtons.length; i++) {
        var container = document.getElementById('ww_' + wrongCheckedButtons[i]);
        container.style.backgroundColor = 'red'; // Set background color to green for correct checked buttons
    }
}




// First Question
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

    if (userAnswer === "14.5" || userAnswer === "14,5") {
        Q1Check = true;
        checkCompletion();
        
        result.textContent = "Great job, Agent! You've correctly calculated the average rainfall for Route A. Your precision is impressive!";
        result.style.color = "green";
        keyInputQ1.disabled = true;
        keyInputQ1.style.background = "#C8E4B2";
    } else {
        result.textContent = "Uh-oh, Agent! The average rainfall for Route A seems off. Let's recheck the data to ensure accuracy!";
        result.style.color = "red";
        keyInputQ1.style.background = "#FF7676";
    }
    result.style.display = "block";
}


// Second Question
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

    if (userAnswer === "15.8" || userAnswer === "15,8") {
        Q2Check = true;
        checkCompletion();
        
        result.textContent = "Excellent work, Agent! You've accurately determined the average rainfall for Route B. Your skills are top-notch!";
        result.style.color = "green";
        keyInputQ2.disabled = true;
        keyInputQ2.style.background = "#C8E4B2";
    } else {
        result.textContent = "Uh-oh, Agent! The average rainfall for Route B seems incorrect. Let's review the data to get the right figures!";
        result.style.color = "red";
        keyInputQ2.style.background = "#FF7676";
    }
    result.style.display = "block";
}


// Third Question
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

    if (userAnswer === "12.3" || userAnswer === "12,3") {
        Q3Check = true;
        checkCompletion();
        
        result.textContent = "Great job, Agent! You've accurately calculated the average rainfall for the driest route. Your expertise is commendable!";
        result.style.color = "green";
        keyInputQ3.disabled = true;
        keyInputQ3.style.background = "#C8E4B2";
    } else {
        result.textContent = "Uh-oh, Agent! The average rainfall for the driest route seems off. Let's re-evaluate the data to find the correct figure!";
        result.style.color = "red";
        keyInputQ3.style.background = "#FF7676";
    }
    result.style.display = "block";
}


// Forth Question
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

    if (userAnswer === "18") {
        Q4Check = true;
        checkCompletion();
        
        result.textContent = "Fantastic work, Agent! You've correctly identified the average rainfall for the wettest route. Your analysis is spot on!";
        result.style.color = "green";
        keyInputQ4.disabled = true;
        keyInputQ4.style.background = "#C8E4B2";
    } else {
        result.textContent = "Uh-oh, Agent! The average rainfall for the wettest route seems incorrect. Let's recheck the data to get the right answer!";
        result.style.color = "red";
        keyInputQ4.style.background = "#FF7676";
    }
    result.style.display = "block";
}

function checkCompletion() {
    if (SCheck && Q1Check && Q2Check && Q3Check && Q4Check) {
        setPuzzleCompletionStatus(4, 'complete');
        var nextPuzzle = document.getElementById("next-puzzle");
        nextPuzzle.style.display = "block";
    }
} 
