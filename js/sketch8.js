var r = new Rune({
  container: "#canvas8",
  width: 1050,
  height: 50,
  // debug: true
});

// draw background
r.rect(0, 0, r.width, r.height).fill(255);



var size = 50;
var myColors = ["#9dd08d","#f5bb00","#69c0f4","#677588", "#dc2522", "#f1545f", "#26a878", "#26a878", "#0d5fad", "#984dc2", "#592c24", "#927330", "#f599b8"];

var rectColor = myColors[Math.floor(Math.random() * myColors.length)];


function drawCharacter1(x, y) {

  rectColor = myColors[Math.floor(Math.random() * myColors.length)];

  var noisePath = r.path(x+14,y+25)
  .lineTo(0,17)
  .lineTo(19,16)
  .lineTo(22,1)
  .closePath()
  .stroke(false)
  .fill(rectColor);

  // .strokeWidth(2);

  ///////////////head/////////

  var noise = new Rune.Noise().noiseDetail(0.5);
  var numPoints = 60;
  var pointDegree = 180 / numPoints;
  var radius = 10;
  var noiseStep = 0;

  var noiseCircle = r.polygon(x+size/2, y+size/2)
  .stroke(0)
  .fill(false)
  .strokeWidth(1.5);

  for(var i = 0; i < numPoints; i++) {

    var noiseRadius = (noise.get(noiseStep) * 3) + radius;
    var j = Math.cos(Rune.radians(pointDegree * i* -1)) * noiseRadius;
    var k = Math.sin(Rune.radians(pointDegree * i* -1)) * noiseRadius*1.3;

    noiseCircle.lineTo(j, k);
    noiseStep += 0.05;
  }

  ///////////////face/////////


  var path = r.path(x+21,y+16)
  .lineTo(0,Rune.random(1,2))
  .closePath()
  .moveTo(7,0)
  .lineTo(7,Rune.random(1,2))
  .closePath()
  .moveTo(3,Rune.random(-1,-2))
  .lineTo(3,Rune.random(3,4))
  .closePath()
  .moveTo(1,Rune.random(5,6))
  .curveTo(2, 6, 4, 6, 5, 5)
  .stroke(0)
  .strokeWidth(1.5);

  ///////////////legs

  var path = r.path(x+20,y+42)
  .lineTo(Rune.random(0,1),Rune.random(5,7))
  .closePath()
  .moveTo(6,-1)
  .lineTo(Rune.random(5,7),Rune.random(5,7))
  .closePath()
  .stroke(0)
  .strokeWidth(1.5);

  r.ellipse(x+21,y+Rune.random(47,48),Rune.random(3,4),Rune.random(3,4)).fill(0);
  r.ellipse(x+26,y+Rune.random(47,48),Rune.random(3,4),Rune.random(3,4)).fill(0);




  ///////////////arms
  var path = r.path(x+35,y+30)
  .lineTo(Rune.random(3,4),Rune.random(0,1))
  .closePath()
  .moveTo(-2,4)
  .lineTo(Rune.random(2,3),Rune.random(4,5))
  .closePath()
  .stroke(0)
  .strokeWidth(1.5);

  r.ellipse(x+40,y+Rune.random(30,31),Rune.random(3,4),Rune.random(3,4)).fill(0);
  r.ellipse(x+39,y+Rune.random(35,36),Rune.random(3,4),Rune.random(3,4)).fill(0);
}


for(var x = 0; x < r.width; x += size)
{
  for(var y = 0; y < r.height; y += size)
  {
      drawCharacter1(x, y);
  }
}

r.draw();