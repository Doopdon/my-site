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