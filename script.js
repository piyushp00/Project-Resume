/*
var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
console.log(navMenuAnchorTags);

for (var i = 0; i < navMenuAnchorTags.length; i++) {
  navMenuAnchorTags[i].addEventListener('click', function (event) {
    event.preventDefault();

    var targetSectionID = this.textContent.trim().toLowerCase();
    var targetSection = document.getElementById(targetSectionID);
    console.log(targetSection);

    var interval = setInterval(function () {
      var targetSectionCoordinates = targetSection.getBoundingClientRect();
      if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
      }
      window.scrollBy(0, 50);
    }, 15);
  });
}
*/

//Another Approach

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;
console.log(navMenuAnchorTags);


for (var i = 0; i < navMenuAnchorTags.length; i++) {
  navMenuAnchorTags[i].addEventListener('click', function (event) {
    event.preventDefault();

    var targetSectionID = this.textContent.trim().toLowerCase();
    var targetSection = document.getElementById(targetSectionID);
    console.log(targetSection);

    //interval = setInterval(scrollVertically, 15, targetSection);

    //or
    interval = setInterval(function () {
      scrollVertically(targetSection)
    }, 15);
  });
}

function scrollVertically(targetSection) {
  var targetSectionCoordinates = targetSection.getBoundingClientRect();
  if (targetSectionCoordinates.top <= 0) {
    clearInterval(interval);
    return;
  }
  window.scrollBy(0, 50);
}


/*
//SKILL PROGRESS BAR ANIMATION FOR WHOLE SKILLS SECTION

var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');

window.addEventListener('scroll', checkScroll);
var animationDone = false;

function initialiseBars() {
  for (let bar of progressBars) {
    bar.style.width = 0 + '%';
  }
}

initialiseBars();




function fillBars() {

  for (let bar of progressBars) {
    let targetWidth = bar.getAttribute('data-level');
    let currentWidth = 0;
    let skillInterval = setInterval(function () {
      if (currentWidth > targetWidth) {
        clearInterval(skillInterval);
        return;
      }
      currentWidth++;
      bar.style.width = currentWidth + '%';
    }, 12);
  }
}


function checkScroll() {

  var coordinates = skillsContainer.getBoundingClientRect();
  if (!animationDone && coordinates.top < window.innerHeight) {
    animationDone = true;
    console.log("vis");
    fillBars();
  } else if (coordinates.top > window.innerHeight) {
    animationDone = false;
    initialiseBars();
  }
}

*/


// Skill Bars Individual Animation WHEN THEY BECAME VISIBLE

var progressBars = document.querySelectorAll(".skill-progress > div");



function initialiseBar(bar) {
  bar.setAttribute("data-visited", false);
  bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
  initialiseBar(bar);
}



function fillBar(bar) {

  var currentWidth = 0;
  var targetWidth = bar.getAttribute("data-level");
  var interval = setInterval(function () {
    if (currentWidth >= targetWidth) {
      clearInterval(interval);
      return;
    }
    currentWidth++;
    bar.style.width = currentWidth + '%';
  }, 8);

}

// This function uses a for loop for individual progress bars.
function checkScroll() {

  for (let bar of progressBars) {
    var barCoordinates = bar.getBoundingClientRect();
    if ((bar.getAttribute("data-visited") == "false") &&
      (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
      bar.setAttribute("data-visited", true);
      fillBar(bar);
    } else if (barCoordinates.top > window.innerHeight) {
      bar.setAttribute("data-visited", false);
      initialiseBar(bar);
    }

  }
}



window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);
