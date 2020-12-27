

var $outerRing =  document.getElementsByClassName('axis')[0];
let $elem = document.createElement('div');
    $elem.classList.add('inner_object');

let $scene = document.getElementById('scene');

loop(15,function(axInd){
    if(axInd < 2) return;
    makeRingCssRule(axInd,axInd*20);
    var $axis = createAxis(axInd)
    
    loop(36,function(ind){
        addToAxis($axis,ind,axInd*20);
    })
})


function createAxis(ind){
    let $elem = document.createElement('div');
    $elem.classList.add('axis');
    $elem.classList.add('num'+ind);
    $scene.appendChild($elem);
    return $elem;
}

function addToAxis($parent,ind,px){
    px = px/2;
    function noise(){return posNegRan(40);}
    var $new = $elem.cloneNode();
    let angle = ind*10 * (Math.PI/180);
    let tx = Math.cos(angle)*px + px + noise();
    let ty = Math.sin(angle)*px + px + noise();
    $new.style.webkitTransform = 'translate3d('+tx+'px,'+ty+'px,'+noise()+'px)';//rotateX('+rotX+'deg) rotateY('+rotY+'deg) rotateZ('+rotZ+'deg)';
    $parent.appendChild($new)
}

function posNegRan(num){
    return Math.random()*num-.5*num
}

function loop(int,callBack){
    for(let i =0; i < int; i++)
        callBack(i);
}

function makeRingCssRule(num,px){
    var style = document.createElement('style');
    style.innerHTML = `
    .num${num}{
        width:${px}px;
        height:${px}px;
        top:calc(50% - ${px/2}px);
        left:calc(50% - ${px/2}px);
        animation-duration : ${num}s;
      }
    `
    document.getElementsByTagName('head')[0].appendChild(style);
}
// var offset = 99;
// var x = Math.floor( Math.random() * 200 ) + offset,
//      y = Math.floor( Math.random() * 200 ) + offset,
//     z = Math.floor( Math.random() * 200 ) + offset,
//     rotX = Math.floor( Math.random() * 360 ) + 1,
//     rotY = Math.floor( Math.random() * 360 ) + 1,
//     rotZ = Math.floor( Math.random() * 360 ) + 1;
//     

//     thisObj = childArray[len];
//     thisObj.classList.add(colors[Math.floor(Math.random()*3)]);
//     thisObj.style.webkitTransform = 'translate3d('+x+'px,'+y+'px,'+z+'px) rotateX('+rotX+'deg) rotateY('+rotY+'deg) rotateZ('+rotZ+'deg)';
// }


