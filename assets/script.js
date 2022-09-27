// Variables I will need for selecting certain areas of portfolio and appending 
// to this area if needed.
const project1 = document.querySelector(".project1");
const project2 = document.querySelector(".project2");
const project3 = document.querySelector(".project3");
const gitHub1 = document.querySelector('#gitHub1');
const gitHub2 = document.querySelector('#gitHub2');
const gitHub3 = document.querySelector('#gitHub3');
const loading = document.querySelector('body');


// Event listeners for user button clicks to go to projects/websites
project1.addEventListener("click", function() {
  window.open("https://thepetconnect.herokuapp.com/", "_blank");
});

project2.addEventListener("click", function() {
  window.open("https://haleyhilton.github.io/No-Clue-What-To-Do/", "_blank");
});

project3.addEventListener("click", function() {
  window.open("https://rocky-tor-24531.herokuapp.com/", "_blank");
});


// functionality to github button on portfolio
gitHub1.addEventListener("click", function() {
  window.open("https://github.com/haleyhilton/P3-PetConnect", "_blank");
});

gitHub2.addEventListener("click", function() {
  window.open("https://github.com/DavidElijahRios/No-Clue-What-To-Do", "_blank");
});

gitHub3.addEventListener("click", function() {
  window.open("https://github.com/DavidElijahRios/The-Tech-Blog", "_blank");
})

// function for loading screen for portfolio page

// function for toggler navbar
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
//timer animation 
