
///////////////go back
var btnBack4 = document.createElement('button');
$(btnBack4).addClass('btn2 btnBack')
      var t4 = document.createTextNode('Go back');       // Create a text node
      btnBack4.appendChild(t4);
      document.body.appendChild(btnBack4);

      $(btnBack4).click(function(){
        $('#canvas5').hide();
        $('#mycontainer').show(); 
        $(btnBack4).hide();
        $(btnRandom4).hide();
        location.reload();
      });


///////////////randomize
var btnRandom4 = document.createElement('button');
$(btnRandom4).addClass('btn2 btnRandom')
      var rd4 = document.createTextNode('Randomize!');       // Create a text node
      btnRandom4.appendChild(rd4);
      document.body.appendChild(btnRandom4);

      $(btnRandom4).click(function(){

        document.getElementById('canvas5').innerHTML = '';
        drawCanvas5();

              var rects = document.getElementsByTagName('rect');

      for (var i = 0; i < rects.length; i ++) {
        rects[i].setAttribute('stroke','rgb(255,255,255)');
      };


       // document.getElementById("canvas2").contentWindow.location.reload(true);
     });

      

      var container4 = document.createElement('div');
      document.body.appendChild(container4);
      container4.id = 'canvas5';

      $('#canvas5').hide();
      $(btnBack4).hide();
      $(btnRandom4).hide();



function drawCanvas5(){

      var r = new Rune({
        container: "#canvas5",
        width: window.innerWidth,
        height: window.innerHeight
  // debug: true
});


      var rects = document.getElementsByTagName('rect');

      for (var i = 0; i < rects.length; i ++) {
        rects[i].setAttribute('stroke','rgb(255,255,255)');
      };



// draw background
r.rect(0, 0, r.width, r.height).fill(225);


var size = 75;
var myColors = ["#9dd08d","#f5bb00","#69c0f4","#677588", "#dc2522", "#f1545f", "#26a878", "#26a878", "#0d5fad", "#984dc2", "#592c24", "#927330", "#f599b8"];
var rectColor = myColors[Math.floor(Math.random() * myColors.length)];
///////////////////////////////////////draw first character


function drawCharacter1(x, y) {
  
  rectColor = myColors[Math.floor(Math.random() * myColors.length)];
  var noise = new Rune.Noise().noiseDetail(0.5);
  var numPoints = 60;
  var pointDegree = 180 / numPoints;
  var radius = 18;
  var noiseStep = 0;


////////////top 

var noiseCircle1 = r.polygon(x+size/2, y+size/2+1)
.stroke(0)
.fill(255)
.strokeWidth(2);


for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 5) + radius;
  var j = Math.cos(Rune.radians(pointDegree * i*-1)) * noiseRadius*1.2;
  var k = Math.sin(Rune.radians(pointDegree * i*-1)) * noiseRadius*1.2;

  noiseCircle1.lineTo(j, k);
  noiseStep += 0.1;
}



////////////bottom

var noiseCircle = r.polygon(x+size/2, y+size/2)
.stroke(false)
.fill(rectColor);

for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 5) + radius;
  var j = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius*1.2;
  var k = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius*1.2;

  noiseCircle.lineTo(j, k);
  noiseStep += 0.1;
}


////////////face 

var radius2 = 7;
var pointDegree2 = 360 / numPoints;

var noiseCircle2 = r.polygon(x+37, y+52)
.stroke(0)
.fill(255)
.strokeWidth(1);

for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 5) + radius2;
  var j = Math.cos(Rune.radians(pointDegree2 * i)) * noiseRadius;
  var k = Math.sin(Rune.radians(pointDegree2 * i)) * noiseRadius;

  noiseCircle2.lineTo(j, k);
  noiseStep += 0.07;
}



var path = r.path(x+34,y+49)
.lineTo(0,Rune.random(2,3))
.closePath()
.moveTo(7,0)
.lineTo(7,Rune.random(2,3))
.closePath()
.moveTo(3,Rune.random(-2,0))
.lineTo(3,Rune.random(4,6))
.closePath()
.moveTo(0,Rune.random(5,7))
.curveTo(0, 8, 3, 8, 5, 7)
.stroke(0)
.strokeWidth(2);


}

///////////////////////////////////////draw second character


function drawCharacter2(x, y) {
  
  rectColor = myColors[Math.floor(Math.random() * myColors.length)];
  var noise = new Rune.Noise().noiseDetail(0.5);
  var numPoints = 60;
  var pointDegree = 360 / numPoints;
  var radius = 19;
  var noiseStep = 0;


////////////large

var noiseCircle1 = r.polygon(x+size/2, y+size/2)
.stroke(false)
.fill(rectColor);


for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 5) + radius;
  var j = Math.cos(Rune.radians(pointDegree * i*-1)) * noiseRadius*1.2;
  var k = Math.sin(Rune.radians(pointDegree * i*-1)) * noiseRadius*1.2;

  noiseCircle1.lineTo(j, k);
  noiseStep += 0.1;
}


////////////face 

var radius2 = 9;

var noiseCircle2 = r.polygon(x+37, y+39)
.stroke(0)
.fill(255)
.strokeWidth(2);

  for(var i = 0; i < numPoints; i++) {

    var noiseRadius = (noise.get(noiseStep) * 5) + radius2;
    var j = Math.cos(Rune.radians(pointDegree * i*-1)) * noiseRadius;
    var k = Math.sin(Rune.radians(pointDegree * i*-1)) * noiseRadius;

    noiseCircle2.lineTo(j, k);
    noiseStep += 0.1;
  }



  var path = r.path(x+35,y+37)
  .lineTo(0,Rune.random(2,3))
  .closePath()
  .moveTo(6,0)
  .lineTo(6,Rune.random(2,3))
  .closePath()
  .moveTo(3,Rune.random(-2,-1))
  .lineTo(3,Rune.random(5,7))
  .closePath()
  .moveTo(0,Rune.random(7,8))
  .curveTo(0, 10, 4, 10, 7, 8)
  .stroke(0)
  .strokeWidth(2);


////////////left leg 

var radius2 = 7;

var noiseCircle2 = r.polygon(x+24, y+59)
.stroke(0)
.fill(255)
.strokeWidth(2);

for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 5) + radius2;
  var j = Math.cos(Rune.radians(pointDegree * i*-1)) * noiseRadius;
  var k = Math.sin(Rune.radians(pointDegree * i*-1)) * noiseRadius;

  noiseCircle2.lineTo(j, k);
  noiseStep += 0.1;
}

////////////right leg 
var noiseCircle3 = r.polygon(x+48, y+59)
.stroke(0)
.fill(255)
.strokeWidth(2);


for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 5) + radius2;
  var j = Math.cos(Rune.radians(pointDegree * i*-1)) * noiseRadius;
  var k = Math.sin(Rune.radians(pointDegree * i*-1)) * noiseRadius;

  noiseCircle3.lineTo(j, k);
  noiseStep += 0.1;
}

}

///////////////////////////////////////draw third character


function drawCharacter3(x, y) {

  rectColor = myColors[Math.floor(Math.random() * myColors.length)];
  var noise = new Rune.Noise().noiseDetail(0.5);
  var numPoints = 60;
  var noiseStep = 0;

////////////face 

var radius = 7;
var pointDegree = 360 / numPoints;

var noiseCircle = r.polygon(x+37, y+21)
.stroke(0)
.fill(255)
.strokeWidth(2);

for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 5) + radius;
  var j = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
  var k = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

  noiseCircle.lineTo(j, k);
  noiseStep += 0.05;
}



var path = r.path(x+34,y+16)
.lineTo(0,Rune.random(2,3))
.closePath()
.moveTo(7,0)
.lineTo(7,Rune.random(2,3))
.closePath()
.moveTo(3,Rune.random(-1,0))
.lineTo(3,Rune.random(4,6))
.closePath()
.moveTo(0,Rune.random(5,7))
.curveTo(0, 8, 3, 8, 5, 7)
.stroke(0)
.strokeWidth(2);


////////////top 
var radius2 = 17;
var pointDegree2 = 180 / numPoints;



var noiseCircle2 = r.polygon(x+size/2, y+52)
.stroke(false)
.fill(rectColor);


for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 5) + radius2;
  var j = Math.cos(Rune.radians(pointDegree2 * i*-1)) * noiseRadius*1.2;
  var k = Math.sin(Rune.radians(pointDegree2 * i*-1)) * noiseRadius*1.4;

  noiseCircle2.lineTo(j, k);
  noiseStep += 0.05;
}



////////////left leg

var radius3 = 5;
var noiseCircle3 = r.polygon(x+23, y+52)
.stroke(0)
.fill(0)
.strokeWidth(2);

for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 5) + radius3;
  var j = Math.cos(Rune.radians(pointDegree2 * i)) * noiseRadius*1.2;
  var k = Math.sin(Rune.radians(pointDegree2 * i)) * noiseRadius*1.4;

  noiseCircle3.lineTo(j, k);
  noiseStep += 0.03;
}


////////////right leg
var noiseCircle4 = r.polygon(x+51, y+52)
.stroke(0)
.fill(0)
.strokeWidth(2);

for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 5) + radius3;
  var j = Math.cos(Rune.radians(pointDegree2 * i)) * noiseRadius*1.2;
  var k = Math.sin(Rune.radians(pointDegree2 * i)) * noiseRadius*1.4;

  noiseCircle4.lineTo(j, k);
  noiseStep += 0.03;
}




}

///////////////////////////////////////loop

for(var x = 0; x < r.width; x += size)
{
  for(var y = 0; y < r.height; y += size)
  {

    if(x < Rune.random(375,525) && y < Rune.random(525,r.height)) {
      drawCharacter3(x, y);
    } else if (x < Rune.random(750,r.width) && y < Rune.random(750,900)) {
      drawCharacter2(x, y);
    } else {
      drawCharacter1(x, y);
    }


  }
}


r.draw();

};