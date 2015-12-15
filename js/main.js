  ///////remove border
 

  $('#form').submit(function(event){
    event.preventDefault();
    var characterSelect = document.getElementsByName('characters');
    var colorMode= document.getElementsByName('charactersColor');
    console.log('characters select: ', characterSelect, 'colorMode: ', colorMode)



    function submitResult1() {
      $('#mycontainer').hide();
       drawCanvas2();
      $('#canvas2').show();
      $(btnBack).show();
      $(btnRandom).show();
    };

    function submitResult2() {
      $('#mycontainer').hide();
       drawCanvas3();
      $('#canvas3').show();
      $(btnBack2).show();
      $(btnRandom2).show();
    };

    function submitResult3() {
      $('#mycontainer').hide();
       drawCanvas4();
      $('#canvas4').show();
      $(btnBack3).show();
      $(btnRandom3).show();
    };

    function submitResult4() {
      $('#mycontainer').hide();
       drawCanvas5();
      $('#canvas5').show();
      $(btnBack4).show();
      $(btnRandom4).show();
    };


    if (characterSelect[0].checked && characterSelect[1].checked && colorMode[0].checked) {

        submitResult1(); 

    } else if(characterSelect[2].checked && characterSelect[3].checked && characterSelect[4].checked && colorMode[0].checked) {
    
        submitResult2();
        
    } else if(characterSelect[0].checked && characterSelect[1].checked && colorMode[1].checked) {
  
        submitResult3();        
    } else if(characterSelect[2].checked && characterSelect[3].checked && characterSelect[4].checked && colorMode[1].checked) {  
        submitResult4();        
    }

  var rects = document.getElementsByTagName('rect');

  for (var i = 0; i < rects.length; i ++) {
    rects[i].setAttribute('stroke','rgb(255,255,255)');
  };
    // } else if(characterSelect[1].checked && colorMode[1].checked) {
    //     submitResult();       
    //     canvas4
    // } else(characterSelect[0].checked && characterSelect[1].checked && colorMode[0].checked) {

    // }

  });


