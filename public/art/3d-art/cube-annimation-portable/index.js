let $cubes =  document.getElementsByClassName('animated-cube')
let xBase = 140;
let yBase = 140;

loop($cubes.length,function(i){
    let $cube = $cubes[i];
    addCubeParts($cube)
})

function addCubeParts($cube){
    let faces = [];
    loop(54,function(i){
        let elem = document.createElement('div');
        elem.classList.add('face');
        $cube.appendChild(elem);
        faces.push(elem);
    });

    var indexes = 
    [
    [-1,1],[0,1],[1,1],
    [-1,0],[0,0],[1,0],
    [-1,-1],[0,-1],[1,-1]
    ];

    makeTopBottom(30,faces,0,-1)
    makeTopBottom(30,faces,9,1)

    makeFrontBack(30,faces,18,-1)
    makeFrontBack(30,faces,27,1)

    makeRightLeft(30,faces,36,-1)
    makeRightLeft(30,faces,45,1)


    function makeTopBottom(offset,faces,index,inv){
        loop(9,function(i){
            let name = inv == 1? 'bottom' :'top'  
            let x = (offset*indexes[i][0])*inv;
            let y = (offset+20)*inv;
            let z = (offset*indexes[i][1])*inv;
    
            let elem = faces[i+index];
            elem.classList.add(name+'-'+i);
            let {translate,translate2,rotate} = makeRotation(x,y,z,90,0,0)
            makeStyle(name,i,translate,translate2,rotate);
            
        })
    }

    function makeFrontBack(offset,faces,index,inv){
        loop(9,function(i){
    
            let name = inv == 1? 'front' :'back'
            let x = (offset+20)*inv;
            let y = (offset*indexes[i][0])*inv;
            let z = (offset*indexes[i][1])*inv;
    
            let elem = faces[i+index];
            elem.classList.add(name+'-'+i);
            let {translate,translate2,rotate} = makeRotation(x,y,z,0,90,0)
            makeStyle(name,i,translate,translate2,rotate);
        })
    }
    
    function makeRightLeft(offset,faces,index,inv){
        loop(9,function(i){
            let name = inv == 1? 'left' :'right'
            let x = (offset*indexes[i][1])*inv;
            let y = (offset*indexes[i][0])*inv;
            let z = (offset+20)*inv;

            let elem = faces[i+index];
            elem.classList.add(name+'-'+i);
            let {translate,translate2,rotate} = makeRotation(x,y,z,0,0,90)
            makeStyle(name,i,translate,translate2,rotate);
        })
    }

    function makeRotation(x,y,z,rx,ry,rz){
        let multiplier = 3;
        let translate = 'translate3d('+(x + xBase) +'px,'+(y + yBase)+'px,'+z+'px)';
        let translate2= 'translate3d('+(x*multiplier + xBase)+'px,'+(y*multiplier + yBase)+'px,'+z*multiplier+'px)';
        let rotate =  'rotateX('+rx+'deg) rotateY('+ry+'deg) rotateZ('+rz+'deg)';
        return {translate,translate2,rotate}
    }
    
    function makeStyle(name,i,translate,translate2,rotate){
        let style = document.createElement('style');
        style.innerHTML = 
            `
            .${name}-${i}{
                animation-name : ${name}-${i}-animation;
                animation-duration : 5s;   
                animation-iteration-count: infinite;
                animation-timing-function : linear;
            }
            
            
            @keyframes ${name}-${i}-animation {
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


function loop(int,callBack){
    for(let i =0; i < int; i++)
        callBack(i);
}

