// Variables I will need for selecting certain areas of portfolio and appending 
// to this area if needed.
const greatDate = document.querySelector(".greatDate");
const workDayPlanner = document.querySelector(".workDayPlanner");
const weatherDash = document.querySelector(".weatherDash");


// Event listeners for user button clicks to go to projects/websites
greatDate.addEventListener("click", function() {
    location.href = "https://haleyhilton.github.io/No-Clue-What-To-Do/";
});

workDayPlanner.addEventListener("click", function() {
    location.href = "https://davidelijahrios.github.io/Work-Day-Scheduler/";
});

weatherDash.addEventListener("click", function() {
    location.href = "https://davidelijahrios.github.io/Weather-Dashboard/";
});
