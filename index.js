var elArrowRight = document.querySelector('.arrow-right');
var elArrowLeft = document.querySelector('.arrow-left');
var elListCarouselItem = document.querySelectorAll('.carousel-item');

var elIndicatorList = document.querySelector('.indicator-list');
var elIndicatorItem = document.querySelectorAll('.indicator-item');

var currentIndex = 0;
var listLength = elListCarouselItem.length;

elArrowRight.onclick = function handleClick () {
  var oldIndex = currentIndex;
  
  if (currentIndex >= listLength-1) {
    currentIndex = 0;
    } else {
      currentIndex = currentIndex + 1;
    }
  
  handleChange (oldIndex, currentIndex);
}

elArrowLeft.onclick = function handleClick() {
  var oldIndex = currentIndex;
  
  if (currentIndex <= 0) {
    currentIndex = listLength-1;
    } else {
      currentIndex = currentIndex - 1;
    }
    
  handleChange (oldIndex, currentIndex);
}

elIndicatorList.onclick = function(event) {
  var target = event.target;
  
  if (!target.classList.contains('indicator-item')) { 
    return; 
  }
  
  var targetIndex = parseInt(target.dataset.index, 10);
  var oldIndex = currentIndex;
  
  handleChange(oldIndex, targetIndex);
  
  currentIndex = targetIndex;
}

function handleChange (oldIndex, currentIndex) {
  elListCarouselItem[oldIndex].classList.remove('carousel-item_current');
  elListCarouselItem[currentIndex].classList.add('carousel-item_current');
  elIndicatorItem[oldIndex].classList.remove('indicator-item_current');
  elIndicatorItem[currentIndex].classList.add('indicator-item_current');
}