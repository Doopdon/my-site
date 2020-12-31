(function () {
    ['about-me', 'experience','projects','about-this-site','contact'].forEach(function (name) {
      document.getElementById(name + '-link').onclick = function () { scrollTo(name) };
    });
    function scrollTo(elemId) {
      var $elem = document.getElementById(elemId);
      $elem.scrollIntoView({ behavior: "smooth"});
    }
  })();


let body = document.getElementsByTagName('body')[0];
  let buttons = document.getElementsByClassName('debug');
  buttons[0].onclick = off;
  buttons[1].onclick = on;
  function on() {
    body.classList.add('debug-on');
  }
  function off() {
    body.classList.remove('debug-on');
  }


function loop(int,callBack){
    for(let i =0; i < int; i++)
        callBack(i);
}

function randBiased(num){
    return (1-Math.sqrt(1-Math.random()))*num + 1;
}


    


