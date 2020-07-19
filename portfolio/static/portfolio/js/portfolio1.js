var scrollAnimationClass2 = 'sa_t';
var scrollAnimationShowClass2 = 'show_t';
var triggerMarginDefault2 = 30;

var scrollAnimationElm2 = document.querySelectorAll('.' + scrollAnimationClass2);
var scrollAnimationFunc2 = function() {
  var dataMargin2 = scrollAnimationClass2 + '_margin';
  var dataTrigger2 = scrollAnimationClass2 + '_trigger';
  var dataDelay2 = scrollAnimationClass2 + '_delay';
  for(var i = 0; i < scrollAnimationElm2.length; i++) {
    var triggerMargin2 = triggerMarginDefault2;
    var elm2 = scrollAnimationElm2[i];
    var showPos2 = 0;
    if(elm2.dataset[dataMargin2] != null) {
      triggerMargin2 = parseInt(elm2.dataset[dataMargin2]);
    }
    if(elm2.dataset[dataTrigger2]) {
      showPos2 = document.querySelector(elm2.dataset[dataTrigger2]).getBoundingClientRect().top + triggerMargin2;
    } else {
      showPos2 = elm2.getBoundingClientRect().top + triggerMargin2;
    }
    if (window.innerHeight > showPos2) {
      var delay2 = (elm2.dataset[dataDelay2])? elm2.dataset[dataDelay2] : 0;
      setTimeout(function(index2) {
        scrollAnimationElm2[index2].classList.add(scrollAnimationShowClass2);
      }.bind(null, i), delay2);
    }else{
      var delay2 = (elm2.dataset[dataDelay2])? elm2.dataset[dataDelay2] : 0;
      setTimeout(function(index2) {
        scrollAnimationElm2[index2].classList.remove(scrollAnimationShowClass2);
      }.bind(null, i), delay2);
    }
  }
}

window.addEventListener('load', scrollAnimationFunc2);
window.addEventListener('scroll', scrollAnimationFunc2);



var scrollAnimationClass3 = 'sa_s';
var scrollAnimationShowClass3 = 'fadeout';
var triggerMarginDefault3 = 300;

var scrollAnimationElm3 = document.querySelectorAll('.' + scrollAnimationClass3);
var scrollAnimationFunc3 = function() {
  var dataMargin3 = scrollAnimationClass3 + '_margin';
  var dataTrigger3 = scrollAnimationClass3 + '_trigger';
  var dataDelay3 = scrollAnimationClass3 + '_delay';
  for(var i = 0; i < scrollAnimationElm3.length; i++) {
    var triggerMargin3 = triggerMarginDefault3;
    var elm3 = scrollAnimationElm3[i];
    var showPos3 = 0;
    if(elm3.dataset[dataMargin3] != null) {
      triggerMargin3 = parseInt(elm3.dataset[dataMargin3]);
    }
    if(elm3.dataset[dataTrigger3]) {
      showPos3 = document.querySelector(elm3.dataset[dataTrigger3]).getBoundingClientRect().top + triggerMargin3;
    } else {
      showPos3 = elm3.getBoundingClientRect().top + triggerMargin3;
    }
    if (window.innerHeight > showPos3) {
      var delay3 = (elm3.dataset[dataDelay3])? elm3.dataset[dataDelay3] : 0;
      setTimeout(function(index3) {
        scrollAnimationElm3[index3].classList.add(scrollAnimationShowClass3);
      }.bind(null, i), delay3);
    }else{
      var delay3 = (elm3.dataset[dataDelay3])? elm3.dataset[dataDelay3] : 0;
      setTimeout(function(index3) {
        scrollAnimationElm3[index3].classList.remove(scrollAnimationShowClass3);
      }.bind(null, i), delay3);
    }
  }
}

window.addEventListener('load', scrollAnimationFunc3);
window.addEventListener('scroll', scrollAnimationFunc3);
