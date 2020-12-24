var $texts = document.getElementsByClassName('text');

Array.prototype.forEach.call($texts,function($text){
    function loop(){
        setTimeout(function(){
            flicker($text,5)
            loop();
        },Math.random()*8000);
    }
    loop();
});

function flicker($elem,i){
    off($elem,i);
}

function off($elem,i){
    setTimeout(function(){
        $elem.classList.add('off')
        on($elem,i-1)
    },100)
}

function on($elem,i){
    setTimeout(function(){
        $elem.classList.remove('off')
        i && off($elem,i-1);
    },20)
}
