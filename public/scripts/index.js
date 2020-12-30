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


function makeStars(){
   let $inner = document.getElementsByClassName('inner')[0];
   
    let size = ''
    loop(50,makeStar)
    size = 'small'
    loop(100,makeStar)
    size = 'big'
    loop(20,makeStar)
   
    function makeStar(){
        let $elem = document.createElement('div');
        $elem.classList.add('star');
        size && $elem.classList.add(size);
        $elem.style = `right:${Math.random()*99}%; top:${randBiased(100)}%;`
        $inner.appendChild($elem)
    }

    $inner = document.getElementsByClassName('stars-2')[0];

    size = ''
    loop(5,makeStar)
    size = 'small'
    loop(20,makeStar)


}
makeStars();

function loop(int,callBack){
    for(let i =0; i < int; i++)
        callBack(i);
}

function randBiased(num){
    return (1-Math.sqrt(1-Math.random()))*num + 1;
}


    


