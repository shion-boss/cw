$(function() {
  let style;
  $(window).mousemove(function(e) {
    y=document.documentElement.scrollTop || document.body.scrollTop;
    x=document.documentElement.offsetWidth || document.body.offsetWidth;
    if( x <= 1000){
      var x_point = e.clientX
    }else{
      var x_point = e.clientX - 200
    }
    var y_point = e.clientY
    var txt1 = document.getElementById('txt1');
    var txt1Node = document.createTextNode(parseInt(x_point));
    while (txt1.firstChild) {
      txt1.removeChild(txt1.firstChild);
    }
    txt1.appendChild(txt1Node);
    var txt2 = document.getElementById('txt2');
    var txt2Node = document.createTextNode(parseInt(y_point));
    while (txt2.firstChild) {
      txt2.removeChild(txt2.firstChild);
    }
    txt2.appendChild(txt2Node);
    style = "ellipse(100px 100px at " + x_point + "px " + y_point + "px)";
    console.log(style);
    if (y < 200){
      $(".circle").css("display", 'block');
    }
    if (x_point < 0){
      $(".circle").css("display", 'none');
      $("#stalker").css("display", 'none');
    }else{
      $(".circle").css("display", 'block');
      $("#stalker").css("display", 'block');
    }
    $(".circle").css("clip-path", style);
  });

});

window.onscroll = function(){
  y=document.documentElement.scrollTop || document.body.scrollTop;
  if (y < 200){
    $("#stalker").css("display", 'block');
    $("#circle").css("display", 'block');
  }else{
    $("#stalker").css("display", 'none');
    $("#circle").css("display", 'none');
  }
};

const stalker = document.getElementById('stalker');

//aタグにホバー中かどうかの判別フラグ
let hovFlag = false;

//マウスに追従させる処理 （リンクに吸い付いてる時は除外する）
document.addEventListener('mousemove', function (e) {
    if (!hovFlag) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    }
});


document.getElementById("circle").onclick = function() {
  this.classList.toggle("max_circle");
  this.classList.toggle("circle");
  $(".circle").css("display", 'none');
};

//window.onload = function() {
  //var twitter = document.getElementById('twitter');
  //var y = document.documentElement.clientHeight
  //twitter.setAttribute('data-height', y);
//};
