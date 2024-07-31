
// Function to check answer for the second puzzle container
function checkAnswerSecondPuzzle() {
    const answer = document.getElementById('answer').value.trim().toLowerCase();
    const feedback = document.getElementById('feedback');

    if (answer === "colder temp") {
        feedback.textContent = "Correct, well done agent!";
        feedback.classList.remove('error-message'); // Remove error message class
        feedback.classList.add('success-message'); // Add success message class
        document.getElementById('hint').textContent = ""; // Clear hint
        // Disable the answer input field after correct answer
        document.getElementById('answer').disabled = true;
        document.getElementById('answer').style.background = "#C8E4B2";
        // Remove the event listener for the "Check Answer" button
        document.getElementById('check-answer-btn').removeEventListener('click', checkAnswerSecondPuzzle);
        setPuzzleCompletionStatus(6, 'complete'); // Set completion status of puzzle 6 to 'complete'

        var nextPuzzle = document.getElementById("next-puzzle");
        nextPuzzle.style.display = "block";
    } else {
        feedback.textContent = "Incorrect! Try again agent.";
        feedback.classList.add('error-message'); // Add error message class
        feedback.classList.remove('success-message'); // Remove success message class
        // You can provide a hint here, e.g., display a hint message
        document.getElementById('hint').textContent = "Hint: Correctly plot the coordinates on the graph below to get the password for the laptop.";
        document.getElementById('answer').style.background = "#FF7676";
    }
}

// Event listener for the "Check Answer" button for the second puzzle container
document.getElementById('check-answer-btn').addEventListener('click', checkAnswerSecondPuzzle);

// Event listener for Enter key press for the second puzzle container
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && document.activeElement.id === 'answer') {
        checkAnswerSecondPuzzle(); // Check the answer if focus is on the answer input field
    }
});
