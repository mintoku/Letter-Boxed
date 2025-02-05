
const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function restart() {
    display.value = "";
}

function deleteLetter() {
    display.value = display.value.slice(0, -1);
}

// Fetch the file from GitHub using the raw URL
const fileURL = 'https://raw.githubusercontent.com/jovialow/letterboxed/main/files/wordle-allowed-guesses.txt';

function checkWordInFile(word) {
    // Fetch the file content
    fetch(fileURL)
        .then(response => response.text())  // Get text content of the file
        .then(data => {
            // Split the data into words (assuming each word is separated by whitespace)
            const words = data.split(/\s+/);  
            
            // Check if the word exists in the file
            if (words.includes(word)) {
                console.log(`The word "${word}" was found in the file.`);
            } else {
                console.log(`The word "${word}" was not found in the file.`);
            }
        })
        .catch(err => {
            console.error('Error fetching the file:', err);
        });
}

function enter() {
    const wordToCheck = display.value;  // Get the current word from the display
    checkWordInFile(wordToCheck);  // Check if it's in the file
}