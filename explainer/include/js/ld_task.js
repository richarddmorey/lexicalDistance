
var context=new AudioContext();
var o=null;
var g=null;

var play_correct = function(){
	o=context.createOscillator();
	g=context.createGain();
	o.connect(g);
	o.type="sine";
  o.frequency.value=500;
	g.connect(context.destination);
	o.start(0);
	g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime+0.25);
  o.frequency.exponentialRampToValueAtTime(1000,context.currentTime+0.125);
};


var play_wrong = function(){
	o=context.createOscillator();
	g=context.createGain();
	o.connect(g);
	o.type="sawtooth";
  o.frequency.value=50;
	g.connect(context.destination);
	o.start(0);
	g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime+0.5);
};


var create_stimulus = function(){
  $("#ld_demo").css("background", "#000000");
  var digits = [2,3,4,6,7,8];
  var select = Math.floor( Math.random()*6 );
  var digit = digits[ select ];
  var correct = (digit > 5);

  $("#stimulus").text(digit);
  $("#true").text(correct);
 
};

var setup_trial = function(e){
  e.preventDefault();
  var istrue = $("#true").text() == "true";
  var press = String.fromCharCode(e.which);
  var correct = (!istrue && (press == "z" | press == "Z") ) | (istrue && press == "/");
  if(correct){
	$("#ld_demo").css("background", "green");
    play_correct();
  }else{
    $("#ld_demo").css("background", "red");
    play_wrong();
  }
  $("#stimulus").text("");
  $(document).off("keypress.ld").on("keypress.ld", function(e){
  	e.preventDefault();
  });
  setTimeout(function(){
  	create_stimulus();
    $(document).on("keypress.ld", setup_trial);
  }, 1000);
};
