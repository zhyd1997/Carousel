var elArrowRight = document.querySelector('.arrow-right');
var elArrowLeft = document.querySelector('.arrow-left');
var elListCarouselItem = document.querySelectorAll('.carousel-item');

var elIndicatorList = document.querySelector('.indicator-list');
var elIndicatorItem = document.querySelectorAll('.indicator-item');

var currentIndex = 0;
var listLength = elListCarouselItem.length;

elArrowRight.onclick = function() {
  var targetIndex = currentIndex + 1;
  
  processIndex(targetIndex);
  handleCurrentIndexChange();
}

elArrowLeft.onclick = function() {
  var targetIndex = currentIndex - 1;
  
  processIndex(targetIndex); 
  handleCurrentIndexChange();
}

elIndicatorList.onclick = function(event) {
  var target = event.target;
  
  if (!target.classList.contains('indicator-item')) { 
    return; 
  }
  
  var targetIndex = parseInt(target.dataset.index, 10);
  
  processIndex(targetIndex);
  handleCurrentIndexChange();
}

function processIndex(targetIndex) {
  if (targetIndex > listLength - 1) {
    currentIndex = 0;
  } else if (targetIndex < 0) {
    currentIndex = listLength - 1;
  } else {
    currentIndex = targetIndex;
  }
}

function handleCurrentIndexChange() {
  document.querySelector('.carousel-item_current').classList.remove('carousel-item_current');
  elListCarouselItem[currentIndex].classList.add('carousel-item_current');
  document.querySelector('.indicator-item_current').classList.remove('indicator-item_current');
  elIndicatorItem[currentIndex].classList.add('indicator-item_current');
}