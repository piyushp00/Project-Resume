/*
var targetPos = 1000;

var currPos = 0;

var scrollInterval = setInterval(function(){
  if(currPos >= targetPos) {
    clearInterval(scrollInterval);
    return;
  }
  
  currPos += 50;
  window.scrollBy(0, 50);
}, 50);

*/

var ed = document.getElementById('elink');
var eduSection = getElementById('education');
ed.addEventListener('click', function(event){
    event.preventDefault();
    
    var coordinates = eduSection.getBoundingClientRect();
    var tPos = coordinates.y;
    var currPos = 0;

    var scrollInterval = setInterval(function(){
        if(currPos >= tpos) {
          clearInterval(scrollInterval);
          return;
        }
        
        currPos += 50;
        window.scrollBy(0, 50);
      }, 50);

});


