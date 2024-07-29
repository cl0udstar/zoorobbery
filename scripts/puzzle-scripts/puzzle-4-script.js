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
    ['route2-2'], 
    ['route3-1'], 
    ['route4-1'], 
    ['route5-2'], 
    ['route6-2'], 
    ['route7-1', 'route7-2'], 
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
        
        result.textContent = "Well done, Agent! You've successfully plotted the safest route through the geomagnetic fields to reach the main Peelywally Crystal deposit site at Crystal Mountain. Your careful planning will protect the explorer buggy's electronics. Excellent work!";
        result.style.color = "green";
    } else {
        result.textContent = "Alert, Agent! The plotted route does not appear to be the safest path through the geomagnetic fields. The buggy's electronics are at risk. Let's reassess the data and find the correct route to ensure a safe journey to the Peelywally Crystal deposit site.";
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

    if (userAnswer === "82.5" || userAnswer === "82,5") {
        Q1Check = true;
        checkCompletion();
        
        result.textContent = "Awesome job, Agent! You've correctly calculated the average geomagnetic field reading on the safest route. You're a top-notch explorer on your way to Crystal Mountain!";
        result.style.color = "green";
        keyInputQ1.disabled = true;
        keyInputQ1.style.background = "#C8E4B2";
    } else {
        result.textContent = "Uh-oh, Agent! The average geomagnetic field reading seems off. Let's recheck the data to ensure a safe journey!";
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

    if (userAnswer === "90") {
        Q2Check = true;
        checkCompletion();
        
        result.textContent = "Awesome job, Agent! You've nailed the average field reading for route Blue. You're a true explorer on the path to adventure!";
        result.style.color = "green";
        keyInputQ2.disabled = true;
        keyInputQ2.style.background = "#C8E4B2";
    } else {
        result.textContent = "Uh-oh, Agent! The average field reading for route Blue seems off. Let's double-check the data to ensure a safe and exciting journey!";
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

    if (userAnswer === "87.5" || userAnswer === "87,5") {
        Q3Check = true;
        checkCompletion();
        
        result.textContent = "Fantastic work, Agent! You've correctly figured out the average field reading for route Orange. Your adventure is right on track!";
        result.style.color = "green";
        keyInputQ3.disabled = true;
        keyInputQ3.style.background = "#C8E4B2";
    } else {
        result.textContent = "Agent! The average field reading for route Orange doesn't look right. Let's double-check to make sure your journey stays safe!";
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

    if (userAnswer === "84") {
        Q4Check = true;
        checkCompletion();
        
        result.textContent = "Great job, Agent! You've found the lowest average field reading if the route through Delta Canyon is blocked. You're navigating like a pro!";
        result.style.color = "green";
        keyInputQ4.disabled = true;
        keyInputQ4.style.background = "#C8E4B2";
    } else {
        result.textContent = "Alert, Agent! The lowest average field reading doesn't seem right. Let's recheck to make sure you find the safest path around Delta Canyon!";
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
