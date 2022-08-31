var Links = {
  setColor : function (color){
    var alist = document.querySelectorAll('a');
    // jQuery 사용해서 글자색 한번에 바꾸기
    $('a').css('color', color);
  }
}
var Body = {
  /*객체의 프로퍼티 구분할 때 ,사용 */
  setColor : function (color){
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor : function (color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('powderblue');
    }
  else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';

    Links.setColor('blue');
    }
  }
