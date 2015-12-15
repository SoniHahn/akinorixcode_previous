
///////////////go back
var btnBack3 = document.createElement('button');
$(btnBack3).addClass('btn2 btnBack')
      var t3 = document.createTextNode('Go back');       // Create a text node
      btnBack3.appendChild(t3);
      document.body.appendChild(btnBack3);

      $(btnBack3).click(function(){
        $('#canvas4').hide();
        $('#mycontainer').show(); 
        $(btnBack3).hide();
        $(btnRandom3).hide();
        location.reload();
      });


///////////////randomize
var btnRandom3 = document.createElement('button');
$(btnRandom3).addClass('btn2 btnRandom')
      var rd3 = document.createTextNode('Randomize!');       // Create a text node
      btnRandom3.appendChild(rd3);
      document.body.appendChild(btnRandom3);

      $(btnRandom3).click(function(){

        document.getElementById('canvas4').innerHTML = '';
        drawCanvas4();

              var rects = document.getElementsByTagName('rect');

      for (var i = 0; i < rects.length; i ++) {
        rects[i].setAttribute('stroke','rgb(255,255,255)');
      };


       // document.getElementById("canvas2").contentWindow.location.reload(true);
     });

      

      var container3 = document.createElement('div');
      document.body.appendChild(container3);
      container3.id = 'canvas4';

      $('#canvas4').hide();
      $(btnBack3).hide();
      $(btnRandom3).hide();



function drawCanvas4(){


var r = new Rune({
  container: "#canvas4",
        width: window.innerWidth,
        height: window.innerHeight
  // debug: true
});

var rects = document.getElementsByTagName('rect');

      for (var i = 0; i < rects.length; i ++) {
        rects[i].setAttribute('stroke','rgb(255,255,255)');
      };

// draw background
r.rect(0, 0, r.width, r.height).fill(255);



var size = 75;
var myColors = ["#9dd08d","#f5bb00","#69c0f4","#677588", "#dc2522", "#f1545f", "#26a878", "#26a878", "#0d5fad", "#984dc2", "#592c24", "#927330", "#f599b8"];

var rectColor = myColors[Math.floor(Math.random() * myColors.length)];


function drawCharacter1(x, y) {

  rectColor = myColors[Math.floor(Math.random() * myColors.length)];

  var noise = new Rune.Noise().noiseDetail(0.5);
  var numPoints = 60;
  var pointDegree = 180 / numPoints;
  var radius = 15;
  var noiseStep = 0;

  var noiseCircle = r.polygon(x+size/2, y+size/2)
  .stroke(0)
  .fill(false)
  .strokeWidth(2);

  for(var i = 0; i < numPoints; i++) {

    var noiseRadius = (noise.get(noiseStep) * 3) + radius;
    var j = Math.cos(Rune.radians(pointDegree * i* -1)) * noiseRadius;
    var k = Math.sin(Rune.radians(pointDegree * i* -1)) * noiseRadius*1.3;

    noiseCircle.lineTo(j, k);
    noiseStep += 0.1;
  }

  ///////////////rectangle body shape
  var xStep = 15;

  var noise = new Rune.Noise();

  var noisePath = r.path(x+22,y+37)
  .lineTo(0,26)
  .lineTo(29,25)
  .lineTo(31,1)
  .closePath()
  .stroke(false)
  .fill(rectColor);


  var path = r.path(x+34,y+24)
  .lineTo(0,Rune.random(2,3))
  .closePath()
  .moveTo(10,0)
  .lineTo(10,Rune.random(2,3))
  .closePath()
  .moveTo(5,Rune.random(-1,-2))
  .lineTo(5,Rune.random(5,7))
  .closePath()
  .moveTo(2,Rune.random(8,9))
  .curveTo(2, 10, 6, 10, 9,8)
  .stroke(0)
  .strokeWidth(2);

  ///////////////legs

  var path = r.path(x+30,y+64)
  .lineTo(Rune.random(1,2),Rune.random(8,10))
  .closePath()
  .moveTo(9,-1)
  .lineTo(Rune.random(10,11),Rune.random(8,10))
  .closePath()
  .stroke(0)
  .strokeWidth(2);

  r.ellipse(x+32,y+Rune.random(70,71),Rune.random(6,7),Rune.random(3,4)).fill(0);
  r.ellipse(x+41,y+Rune.random(70,71),Rune.random(6,7),Rune.random(3,4)).fill(0);


  ///////////////arms
  var path = r.path(x+52,y+45)
  .lineTo(Rune.random(6,8),Rune.random(0,1))
  .closePath()
  .moveTo(0,6)
  .lineTo(Rune.random(6,8),Rune.random(7,8))
  .closePath()
  .stroke(0)
  .strokeWidth(2);

  r.ellipse(x+60,y+Rune.random(45,47),Rune.random(4,6),Rune.random(4,6)).fill(0);
  r.ellipse(x+60,y+Rune.random(52,54),Rune.random(4,6),Rune.random(4,6)).fill(0);
}
///////////////////////////////////////draw first character


function drawCharacter2(x, y) {

  rectColor = myColors[Math.floor(Math.random() * myColors.length)];

  var noise = new Rune.Noise().noiseDetail(0.5);
  var numPoints = 60;
  var pointDegree = 180 / numPoints;
  var radius = 15;
  var noiseStep = 0;

  var noiseCircle = r.polygon(x+size/2+9, y+size/2-5)
  .stroke(0)
  .fill(false)
  .strokeWidth(2).rotate(-90, x+size/2+9, y+size/2);

  for(var i = 0; i < numPoints; i++) {

    var noiseRadius = (noise.get(noiseStep) * 5) + radius;
    var j = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
    var k = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

    noiseCircle.lineTo(j, k);
    noiseStep += 0.1;
  }

  var noiseCircle1 = r.polygon(x+size/2, y+size/2)
  .stroke(false)
  .fill(rectColor)
  .rotate(90, x+size/2, y+size/2);


  
  for(var i = 0; i < numPoints; i++) {

    var noiseRadius = (noise.get(noiseStep) * 5) + radius;
    var j = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
    var k = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius*1.8;

    noiseCircle1.lineTo(j, k);
    noiseStep += 0.1;
  }

  var path = r.path(x+45,y+34)
  .lineTo(0,Rune.random(2,3))
  .closePath()
  .moveTo(7,0)
  .lineTo(7,Rune.random(2,3))
  .closePath()
  .moveTo(4,Rune.random(-1,-3))
  .lineTo(4,Rune.random(5,7))
  .closePath()
  .moveTo(0,Rune.random(7,9))
  .curveTo(0, 10, 3, 10, 6, 8)
  .stroke(0)
  .strokeWidth(2);

  var path = r.path(x+15,y+51)
  .lineTo(0,Rune.random(8,10))
  .closePath()
  .moveTo(9,2)
  .lineTo(9,Rune.random(8,12))
  .closePath()
  .stroke(0)
  .strokeWidth(2);

  r.ellipse(x+15,y+Rune.random(59,61),Rune.random(5,7),Rune.random(4,5)).fill(0);
  r.ellipse(x+24,y+Rune.random(60,62),Rune.random(5,7),Rune.random(4,5)).fill(0);
}


///////////////////////////////////////loop

for(var x = 0; x < r.width; x += size)
{
  for(var y = 0; y < r.height; y += size)
  {

    if(x > Rune.random(100,300) && y > Rune.random(200,400)) {
      drawCharacter1(x, y);
    } else {
      drawCharacter2(x, y);
    }


  }
}

r.draw();


};