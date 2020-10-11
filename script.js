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



var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');
var skillProgress = document.querySelectorAll('skill-progress');
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
  // var progCoordinates = skillProgress.getBoundingClientRect();
  
  if (!animationDone && coordinates.top < window.innerHeight) {
    animationDone = true;
    console.log("vis");
    fillBars();
  } else if(coordinates.top > window.innerHeight){
      animationDone = false;
      initialiseBars();
  }
}



