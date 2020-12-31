"use strict";

(function () {
  //This code animates a cube that expands and contracts. It was way harder than I thought it was going to be.
  var $cubes = document.getElementsByClassName('animated-cube'); //find elements that should have an animated cube in them

  var usedSheets = []; //there will be several style sheets. and if two cubes have the same styles we don't need to make double the sheets

  loop($cubes.length, function (i) {
    //go through each cube element and put the squares in them
    var $cube = $cubes[i];

    try {
      addCubeParts($cube);
    } catch (e) {
      console.error(e);
    }
  });

  function addCubeParts($cube) {
    //this code necessitates a scale factor to be added to the cube that matches the wrappers scale. I could not find a better way.
    var scaleFactor = $cube.getAttribute("scale"); //get the scale attribute

    if (!scaleFactor) throw 'no scale added to element. must have " scale="100-vh" " or similar added as an attribute';
    var scaleUnit = scaleFactor.split('-')[1];
    if (!['vh', 'vw', 'px'].includes(scaleUnit)) throw "Scale unit must be 'vh','vw','px'. cannot be: ".concat(scaleUnit, ".");
    var scaleAmount = scaleFactor.split('-')[0]; //the code above just makes sure the scaleFactor is valid and can be broken into an 'amount' and a 'unit' ex 100 and vh

    var faces = []; //there will be 54 face elements. (I probably could have done this code better but I did not anticipate the complexity)

    loop(54, function (i) {
      var elem = document.createElement('div');
      elem.classList.add('face');
      $cube.appendChild(elem);
      faces.push(elem);
    }); //there will be 9 square each one at a different corner/side/middle so i wrote out the coordinates to avoid repeats

    var indexes = [[-1, 1], [0, 1], [1, 1], [-1, 0], [0, 0], [1, 0], [-1, -1], [0, -1], [1, -1]];
    var offset = scaleAmount / 10; //divide the scale by 10 (im not sure why it needs to be 10 but this will stop the cube from expanding too far)

    multiplier = 3; //how much the cube gets bigger by.

    var baseSize = 3; //how small the cube is when its small. (in units of one of the squares)

    makeTopBottom(offset, faces, 0, -1); //the -1 reverses the size. the index tells the function where to get the square elements from in the "faces" array

    makeTopBottom(offset, faces, 9, 1);
    makeFrontBack(offset, faces, 18, -1);
    makeFrontBack(offset, faces, 27, 1);
    makeRightLeft(offset, faces, 36, -1);
    makeRightLeft(offset, faces, 45, 1);
    usedSheets[scaleFactor] = true; //save the stylesheet for this scale factor so it wont get regenerated

    function makeTopBottom(offset, faces, index, inv) {
      loop(9, function (i) {
        //loop 9 times for the 9 faces
        var name = inv == 1 ? 'bottom' : 'top'; //use the inverse param to determine top or bottom

        var x = offset * indexes[i][0] * inv; //use the x coordinate (which could be -1,0,1) and multiply it by the offset to get the actual coordinate of the square in px or vh

        var y = (offset + baseSize) * inv; //one side will be un changed other than the inverse. All the top elements have the same y coordinate and all the bottom ones have another y coordinate

        var z = offset * indexes[i][1] * inv;
        var elem = faces[i + index]; //get the element

        var className = name + '-' + i + '-' + scaleFactor; //generate a class name that the dynamic style sheet can use

        elem.classList.add(className);

        var _makeRotation = makeRotation(x, y, z, 90, 0, 0),
            translate = _makeRotation.translate,
            translate2 = _makeRotation.translate2,
            rotate = _makeRotation.rotate; //generate the rotation and translation for the square


        usedSheets[scaleFactor] || makeStyle(translate, translate2, rotate, className); //make the style sheet if it does not exist.  
      });
    } //this is almost the same as topBottom


    function makeFrontBack(offset, faces, index, inv) {
      loop(9, function (i) {
        var name = inv == 1 ? 'front' : 'back';
        var x = (offset + baseSize) * inv;
        var y = offset * indexes[i][0] * inv;
        var z = offset * indexes[i][1] * inv;
        var elem = faces[i + index];
        var className = name + '-' + i + '-' + scaleFactor;
        elem.classList.add(className);

        var _makeRotation2 = makeRotation(x, y, z, 0, 90, 0),
            translate = _makeRotation2.translate,
            translate2 = _makeRotation2.translate2,
            rotate = _makeRotation2.rotate;

        usedSheets[scaleFactor] || makeStyle(translate, translate2, rotate, className);
      });
    } //this is almost the same as topBottom


    function makeRightLeft(offset, faces, index, inv) {
      loop(9, function (i) {
        var name = inv == 1 ? 'left' : 'right';
        var x = offset * indexes[i][1] * inv;
        var y = offset * indexes[i][0] * inv;
        var z = (offset + baseSize) * inv;
        var elem = faces[i + index];
        var className = name + '-' + i + '-' + scaleFactor;
        elem.classList.add(className);

        var _makeRotation3 = makeRotation(x, y, z, 0, 0, 0),
            translate = _makeRotation3.translate,
            translate2 = _makeRotation3.translate2,
            rotate = _makeRotation3.rotate;

        usedSheets[scaleFactor] || makeStyle(translate, translate2, rotate, className);
      });
    } //this makes the transitions for the element 


    function makeRotation(x, y, z, rx, ry, rz) {
      var symbol = scaleUnit; //this uses the unit provided in the attribute

      var translate = 'translate3d(calc(' + x + symbol + ' + 450%),calc(' + y + symbol + ' + 450%),' + z + symbol + ')'; //this make the small cube position

      var translate2 = 'translate3d(calc(' + x * multiplier + symbol + ' + 450%),calc(' + y * multiplier + symbol + ' + 450%),' + z * multiplier + symbol + ')'; //big cube

      var rotate = 'rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) rotateZ(' + rz + 'deg)'; //which orientation the square should be in.

      return {
        translate: translate,
        translate2: translate2,
        rotate: rotate
      }; //return the 3 so they can be turned into the style sheet;
    } //here i was forced to just write css in strings and generate a style sheet.


    function makeStyle(translate, translate2, rotate, className) {
      var style = document.createElement('style');
      style.innerHTML = "\n            .".concat(className, "{\n                animation-name : ").concat(className, "-animation;\n                animation-duration : 5s;   \n                animation-iteration-count: infinite;\n                animation-timing-function : linear;\n            }\n            \n            \n            @keyframes ").concat(className, "-animation {\n                0% {\n                    -webkit-transform:").concat(translate + ' ' + rotate, "\n                }\n                50%{\n                    -webkit-transform:").concat(translate2 + ' ' + rotate, "\n                }\n                100% {\n                    -webkit-transform:").concat(translate + ' ' + rotate, "\n                }\n            }\n            ");
      document.getElementsByTagName('head')[0].appendChild(style);
    }
  } //I like to use this when dealing with element lists. or when i need to do a function x times.

})();