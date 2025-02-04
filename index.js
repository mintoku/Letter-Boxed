
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

// Use fetch to load the word list
function checkWordInFile(filePath, word) {
    return fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();  // Get the text content of the file
        })
        .then(data => {
            const words = data.split(/\s+/); // Split the text into words
            return words.includes(word);  // Check if the word exists in the file
        })
        .catch(err => {
            console.error('Error fetching file:', err);
            return false;  // Return false in case of an error
        });
}

function enter() {
    console.log("enter pressed");
    checkWordInFile('wordle-allowed-guesses.txt', display.value)  // Use the value from the display box
        .then(found => {
            if (found) {
                console.log('The word "' + display.value + '" was found in the file.');
            } else {
                console.log('The word "' + display.value + '" was not found in the file.');
            }
        });
}