(()=>{
//This code animates a cube that expands and contracts. It was way harder than I thought it was going to be.

let $cubes =  document.getElementsByClassName('animated-cube')//find elements that should have an animated cube in them
let usedSheets = [];//there will be several style sheets. and if two cubes have the same styles we don't need to make double the sheets

loop($cubes.length,function(i){//go through each cube element and put the squares in them
    let $cube = $cubes[i];
    try{
        addCubeParts($cube)
    }
    catch(e){
        console.error(e);
    }
})

function addCubeParts($cube){
    //this code necessitates a scale factor to be added to the cube that matches the wrappers scale. I could not find a better way.

    let scaleFactor = $cube.getAttribute("scale");//get the scale attribute
    if(!scaleFactor) throw 'no scale added to element. must have " scale="100-vh" " or similar added as an attribute'
    let scaleUnit = scaleFactor.split('-')[1];
    if(!['vh','vw','px'].includes(scaleUnit)) throw `Scale unit must be 'vh','vw','px'. cannot be: ${scaleUnit}.`
    let scaleAmount = scaleFactor.split('-')[0];
    //the code above just makes sure the scaleFactor is valid and can be broken into an 'amount' and a 'unit' ex 100 and vh

    let faces = [];//there will be 54 face elements. (I probably could have done this code better but I did not anticipate the complexity)
    loop(54,function(i){
        let elem = document.createElement('div');
        elem.classList.add('face');
        $cube.appendChild(elem);
        faces.push(elem);
    });

    //there will be 9 square each one at a different corner/side/middle so i wrote out the coordinates to avoid repeats
    var indexes = 
    [
    [-1,1],[0,1],[1,1],
    [-1,0],[0,0],[1,0],
    [-1,-1],[0,-1],[1,-1]
    ];


    let offset = scaleAmount/10; //divide the scale by 10 (im not sure why it needs to be 10 but this will stop the cube from expanding too far)
    let multiplier = 3;//how much the cube gets bigger by.
    let baseSize = 3;//how small the cube is when its small. (in units of one of the squares)
    
    makeTopBottom(offset,faces,0,-1)//the -1 reverses the size. the index tells the function where to get the square elements from in the "faces" array
    makeTopBottom(offset,faces,9,1)

    makeFrontBack(offset,faces,18,-1)
    makeFrontBack(offset,faces,27,1)

    makeRightLeft(offset,faces,36,-1)
    makeRightLeft(offset,faces,45,1)

    usedSheets[scaleFactor] =  true;//save the stylesheet for this scale factor so it wont get regenerated

    function makeTopBottom(offset,faces,index,inv){
        loop(9,function(i){//loop 9 times for the 9 faces
            let name = inv == 1? 'bottom' :'top'  //use the inverse param to determine top or bottom
            let x = (offset*indexes[i][0])*inv; //use the x coordinate (which could be -1,0,1) and multiply it by the offset to get the actual coordinate of the square in px or vh
            let y = (offset+baseSize)*inv;//one side will be un changed other than the inverse. All the top elements have the same y coordinate and all the bottom ones have another y coordinate
            let z = (offset*indexes[i][1])*inv;
    
            let elem = faces[i+index]; //get the element
            let className = name+'-'+i+'-'+scaleFactor; //generate a class name that the dynamic style sheet can use
            elem.classList.add(className);
            let {translate,translate2,rotate} = makeRotation(x,y,z,90,0,0);//generate the rotation and translation for the square
            usedSheets[scaleFactor] || makeStyle(translate,translate2,rotate,className);//make the style sheet if it does not exist.  
        })
    }
    //this is almost the same as topBottom
    function makeFrontBack(offset,faces,index,inv){
        loop(9,function(i){
            let name = inv == 1? 'front' :'back'
            let x = (offset+baseSize)*inv;
            let y = (offset*indexes[i][0])*inv;
            let z = (offset*indexes[i][1])*inv;
    
            let elem = faces[i+index];
            let className = name+'-'+i+'-'+scaleFactor;
            elem.classList.add(className);
            let {translate,translate2,rotate} = makeRotation(x,y,z,0,90,0);
            usedSheets[scaleFactor] || makeStyle(translate,translate2,rotate,className);
        })
    }
    //this is almost the same as topBottom
    function makeRightLeft(offset,faces,index,inv){
        loop(9,function(i){
            let name = inv == 1? 'left' :'right'
            let x = (offset*indexes[i][1])*inv;
            let y = (offset*indexes[i][0])*inv;
            let z = (offset+baseSize)*inv;
            let elem = faces[i+index];
            let className = name+'-'+i+'-'+scaleFactor;
            elem.classList.add(className);
            let {translate,translate2,rotate} = makeRotation(x,y,z,0,0,0);
            usedSheets[scaleFactor] || makeStyle(translate,translate2,rotate,className);
        })
    }
    //this makes the transitions for the element 
    function makeRotation(x,y,z,rx,ry,rz){
        let symbol = scaleUnit; //this uses the unit provided in the attribute
        let translate = 'translate3d(calc('+x+symbol+' + 450%),calc('+y+symbol+' + 450%),'+z+symbol+')'; //this make the small cube position
        let translate2 = 'translate3d(calc('+(x*multiplier)+symbol+' + 450%),calc('+(y*multiplier)+symbol+' + 450%),'+(z*multiplier)+symbol+')';//big cube
        let rotate =  'rotateX('+rx+'deg) rotateY('+ry+'deg) rotateZ('+rz+'deg)';//which orientation the square should be in.
        return {translate,translate2,rotate}//return the 3 so they can be turned into the style sheet;
    }
    
    //here i was forced to just write css in strings and generate a style sheet.
    function makeStyle(translate,translate2,rotate,className){
        let style = document.createElement('style');
        style.innerHTML = 
            `
            .${className}{
                animation-name : ${className}-animation;
                animation-duration : 5s;   
                animation-iteration-count: infinite;
                animation-timing-function : linear;
            }
            
            
            @keyframes ${className}-animation {
                0% {
                    -webkit-transform:${translate+' '+rotate}
                }
                50%{
                    -webkit-transform:${translate2+' '+rotate}
                }
                100% {
                    -webkit-transform:${translate+' '+rotate}
                }
            }
            `
        document.getElementsByTagName('head')[0].appendChild(style); 
    }
}

//I like to use this when dealing with element lists. or when i need to do a function x times.
function loop(int,callBack){
    for(let i =0; i < int; i++)
        callBack(i);
}

})()