// Set variables to target specific HTML elements on the page
let totalEl = document.getElementById("total-el"); // Grab the HTML element containing the total time
let netEl = document.getElementById("net-el"); // Grab the HTML element containing the net time
let countEl = document.getElementById("count-el"); // Grab the HTML element containing the counter
let timesSavedEl = document.getElementById("times-saved-el"); // Grab the HTML element containing the times saved

// Set empty counters for different functionality
let timesSaved = 0; // Counts how many times the SAVE button was clicked
let totalTime = 0; // Counts how much total time was saved
let netTime = 0; // Counts how much net time was saved 
let netTimeRatio = 0.67; // Sets ratio between total time and net time
let count = 0; // The live counter which is used to save the total time

// Increment counter by 5 minutes and update HTML element
function increment() {
    count += 5; // Increase counter by 5
    countEl.textContent = `${count}'`; // Update HTML element with count-el ID
}

// Decrement counter by 5 minutes and update HTML element
function decrement() {
    count -= 5; // Decrease counter by 5
    countEl.textContent = `${count}'`; // Update HTML element with count-el ID
}

// Save counter to total time, if the counter is above 0. Also updates the relevant HTML elements
function save() {
    
    // Check if counter is above 0 before saving, to avoid getting a negative total input time
    if (count > 0) {
        timesSaved += 1;
        totalTime += count;
        netTime = Math.floor(totalTime * netTimeRatio); // Round down the net time to a whole number
        totalEl.textContent = `Total input time: ${totalTime}'`; // Update HTML element with total-el ID
        netEl.textContent = `Net input time: ${netTime}'`; // Update HTML element with net-el ID
        timesSavedEl.textContent = `Times saved: ${timesSaved}`; // Update HTML element with times-saved-el ID
        count = 0; // Reset counter to 0
        countEl.textContent = `${count}'`; // Update HTML element with count-el ID
    } 
    // Reset counter if it's negative, but don't save it
    else {
        count = 0; // Reset counter to 0
        countEl.textContent = `${count}'`; // Updates HTML element with count-el ID
    }
}

// Reset all counters and HTML elements
function reset() {
    count = 0; // Reset counter to 0
    totalTime = 0; // Reset total time to 0
    netTime = 0; // Reset net time to 0
    timesSaved = 0; // Reset times saved to 0
    countEl.textContent = `${count}'`; // Update element with count-el ID
    totalEl.textContent = "Total input time: "; // Update HTML element with total-el ID
    netEl.textContent = "Net input time: "; // Update HTML element with net-el ID
    timesSavedEl.textContent = `Times saved: `; // Update HTML element with times-saved-el ID
}
