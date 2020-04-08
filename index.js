var elArrowRight = document.getElementsByClassName('arrow-right')[0];
var elListCarouselItem = document.getElementsByClassName('carousel-item');

var currentIndex = 0;
elArrowRight.onclick = function handleClick () {
  var oldIndex = currentIndex;
  
  if (currentIndex >= 3) {
    currentIndex = 0;
    } else {
      currentIndex = currentIndex + 1;
    }
  
  // console.log('现在是第 ' + oldIndex + ' 图显示，应该改成第 ' + currentIndex + ' 图显示');
  elListCarouselItem[oldIndex].classList.remove('carousel-item_current');
  elListCarouselItem[currentIndex].classList.add('carousel-item_current')
}