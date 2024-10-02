const jokes = [
    "A e dini pse skeletat s rrehen? Se skan bole!",
    "Qka i ka thon Betmeni Spajdermenit? Qka ti psps",
    "I told my wife she was drawing her eyebrows too high. She looked surprised!",
    "I threw a boomerang a few years ago. Now I live in constant fear.",
    "Why don’t skeletons fight each other? They don’t have the guts."
];

let shownJokes = []; // Array to track the displayed jokes
const generateJokeBtn = document.getElementById('generateJokeBtn');
const generateAnotherJokeBtn = document.getElementById('generateAnotherJokeBtn');
const goBackBtn = document.getElementById('goBackBtn');
const jokeDisplay = document.getElementById('jokeDisplay');

// Handle the "Generate A Joke" button click
generateJokeBtn.addEventListener('click', function() {
    displayRandomJoke();
    generateJokeBtn.style.display = 'none'; // Hide the first button
    generateAnotherJokeBtn.style.display = 'inline'; // Show the 'Generate Another' button
    goBackBtn.style.display = 'inline'; // Show the 'Go Back' button
});

// Handle the "Generate Another One" button click
generateAnotherJokeBtn.addEventListener('click', displayRandomJoke);

// Handle the "Go Back" button click to reset the view
goBackBtn.addEventListener('click', function() {
    resetView();
});

// Function to display a random joke
function displayRandomJoke() {
    if (shownJokes.length === jokes.length) {
        jokeDisplay.textContent = "There are no more jokes for today!";
        generateAnotherJokeBtn.style.display = 'none'; // Hide the "Generate Another" button
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * jokes.length);
    } while (shownJokes.includes(randomIndex));

    // Display the new joke and add it to the list of shown jokes
    jokeDisplay.textContent = jokes[randomIndex];
    shownJokes.push(randomIndex);
}

// Function to reset the view to the landing page
function resetView() {
    jokeDisplay.textContent = "Kliko Butonin Per Fore!";
    generateJokeBtn.style.display = 'inline'; // Show the first button again
    generateAnotherJokeBtn.style.display = 'none'; // Hide the 'Generate Another' button
    goBackBtn.style.display = 'none'; // Hide the 'Go Back' button
    shownJokes = []; // Reset the list of shown jokes
}
