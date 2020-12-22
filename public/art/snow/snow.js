var container$ = document.getElementsByClassName('container')[0];

function tick(){
    //makeSnowFlake();
    makeSnowflake2(rand2(5),Math.random()*100)
    setTimeout(tick,300);
}
tick();

function makeSnowFlake(){
    let flake$ = document.createElement('div')
    let offset = Math.random()*100;
    let falling = rand(6);

    flake$.style = `left:${offset}%`;
    flake$.classList.add('falling-'+falling);
    flake$.classList.add('snowflake');
    container$.appendChild(flake$);
    setTimeout(function(){
        flake$.remove();
    },Math.pow(2,falling-1)*1000);
}

function makeSnowflake2(size,pos){
    let flake$ = document.createElement('div');
    flake$.classList.add('snowflake');
    let style = '';
    let baseSize = 5;
    let baseDuration =  32;
    let pxSize = baseSize*size*size;
    style+=`left:${pos}%;`;
    style+=`width:${pxSize}px;`;
    style+=`height:${pxSize}px;`;
    style+=`top:-${pxSize}px;`;
    style+=`animation: falling linear;`;
    style+=`animation-duration:${baseDuration/(size*size)}s;`;
    style+=`filter: blur(${size-2}px);`
    if(size > 3.5){
        style+=`z-index: 10;`;
    }
    if(size < 1.3){
        style+=`background-image: none; border-radius:50%; background-color:white;`;
    }
    flake$.style = style;
    container$.appendChild(flake$);
    setTimeout(function(){
        flake$.remove();
    },baseDuration/(size*size)*1000);
}


// .falling-1{
//     width:160px;
//     height: 160px;
//     top:-160px;
//     animation: falling linear;
//     animation-duration: 1s;
//     z-index: 10;
//     filter: blur(4px);
// }

function rand2(num){
    return (1-Math.sqrt(1-Math.random()))*num + 1;
}

function rand(num){
    return Math.floor(Math.sqrt(Math.random()*(num*num)))+1;
}