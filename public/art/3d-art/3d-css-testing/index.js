var childArray = document.getElementsByClassName('inner_object');
// childArray = cube.childNodes,
let len = childArray.length;

let xBase = 40;
let yBase = 40;
let zBase = -200;

let x = xBase;
let y = yBase;
let z = zBase;
let rotX = 0;
let rotY = 0;
let rotZ = 0;
let colors = ['red','blue','green'];
let c = -1;
for( let len = 0; len < childArray.length; len++) {
    
    x += 100;
    if(len % 3 == 0){
        x = xBase;
        y += 100;
    }
    if(len%9 == 0){
        y = yBase;
        z += 100;
        c++;
    }
    

    if (childArray[len].nodeType != 1) { continue; } 
    thisObj = childArray[len];
    thisObj.classList.add(colors[c]);
    thisObj.style.webkitTransform = 'translate3d('+x+'px,'+y+'px,'+z+'px) rotateX('+rotX+'deg) rotateY('+rotY+'deg) rotateZ('+rotZ+'deg)';
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


