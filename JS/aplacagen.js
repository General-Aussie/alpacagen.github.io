var hair = document.getElementById("hair");
var ears = document.getElementById("ears");
var eyes = document.getElementById("eyes");
var mouth = document.getElementById("mouth");
var neck = document.getElementById("neck");
var nose = document.getElementById("nose");
var leg = document.getElementById("leg");
var accessories = document.getElementById("accessories");
var background = document.getElementById("background");



hair.addEventListener("click", show);
ears.addEventListener("click", show);
eyes.addEventListener("click", show);
mouth.addEventListener("click", show);
neck.addEventListener("click", show);
nose.addEventListener("click", show);
leg.addEventListener("click", show);
accessories.addEventListener("click", show);
background.addEventListener("click", show);


function show(){
  var allItems = document.getElementsByClassName("hair2");
  for (var i=0; i<allItems.length; i++){
  allItems[i].className = "hair";
}

  var hair = document.getElementsByClassName("hair")
  if (this.className === "hair") {
    this.className = "hair2";
  } else {
    this.className = "hair";
  }
}

hair.addEventListener("click", precious);
ears.addEventListener("click", precious);
eyes.addEventListener("click", precious);
mouth.addEventListener("click", precious);
neck.addEventListener("click", precious);
nose.addEventListener("click", precious);
leg.addEventListener("click", precious);
accessories.addEventListener("click", precious);
background.addEventListener("click", precious);


function precious(){
  var llItems = document.getElementsByClassName("hide2");
  for (var i=0; i<llItems.length; i++){
  llItems[i].className = "hide";
}

  var second = this.attributes["data-ul"].value;
  var seconds = document.getElementById(second);
  if (seconds.className === "hide"){
    seconds.className = "hide2";
  }
  else{
    seconds.className = "hide";
  }
}



/*hair variables*/
var curls = document.getElementById("curls");
var elegant = document.getElementById("elegant");
var fancy = document.getElementById("fancy");
var quiff = document.getElementById("quiff");
var bang = document.getElementById("bang");
var short = document.getElementById("short");
var defaulth = document.getElementById("defaulth");
/*ears variables*/
var tiltbackward = document.getElementById("tilt-backwardear");
var tiltforward = document.getElementById("tilt-forwardear");
var defaulte = document.getElementById("defaulte");
/*eyes variables*/
var smart = document.getElementById("smart");
var panda = document.getElementById("panda");
var star = document.getElementById("star");
var angry = document.getElementById("angry");
var defaultey = document.getElementById("defaultey");
var naughty = document.getElementById("naughty");
/*mouth variables*/
var laugh = document.getElementById("laugh");
var tongue = document.getElementById("tongue");
var astonished = document.getElementById("astonished");
var eating = document.getElementById("eating");
var defaultm = document.getElementById("defaultm");
/*neck variables*/
var bendbackward = document.getElementById("bend-backward");
var bendforward = document.getElementById("bend-forward");
var defaultn = document.getElementById("defaultn");
var thick = document.getElementById("thick");
/*nose variables*/
var defaultnose = document.getElementById("default-nose");
/*leg variables*/
var bubbletea = document.getElementById("bubble-tea");
var gameconsole = document.getElementById("game-console");
var cookie = document.getElementById("cookie");
var tiltbackwardleg = document.getElementById("tilt-backwardl");
var tiltforwardleg = document.getElementById("tilt-forwardl");
var defaultl = document.getElementById("defaultl");
/*accessories variables*/
var glasses = document.getElementById("glasses");
var headphones = document.getElementById("headphone");
var flower = document.getElementById("flower");
var earings = document.getElementById("earings");
/*background variables*/
var blue50 = document.getElementById("blue50");
var blue60 = document.getElementById("blue60");
var blue70 = document.getElementById("blue70");
var darkblue30 = document.getElementById("darkblue30");
var darkblue50 = document.getElementById("darkblue50");
var darkblue70 = document.getElementById("darkblue70");
var green50 = document.getElementById("green50");
var green60 = document.getElementById("green60");
var green70 = document.getElementById("green70");
var grey40 = document.getElementById("grey40");
var grey70 = document.getElementById("grey70");
var grey80 = document.getElementById("grey80");
var red50 = document.getElementById("red50");
var red60 = document.getElementById("red60");
var red70 = document.getElementById("red70");
var yellow50 = document.getElementById("yellow50");
var yellow60 = document.getElementById("yellow60");
var yellow70 = document.getElementById("yellow70");

/*hair variables*/
curls.addEventListener("click", shows);
elegant.addEventListener("click", shows);
fancy.addEventListener("click", shows);
quiff.addEventListener("click", shows);
bang.addEventListener("click", shows);
short.addEventListener("click", shows);
defaulth.addEventListener("click", shows);
/*ears variables*/
tiltbackward.addEventListener("click", shows);
tiltforward.addEventListener("click", shows);
defaulte.addEventListener("click", shows);
/*eyes variables*/
smart.addEventListener("click", shows);
panda.addEventListener("click", shows);
star.addEventListener("click", shows);
angry.addEventListener("click", shows);
defaultey.addEventListener("click", shows);
naughty.addEventListener("click", shows);
/*mouth variables*/
laugh.addEventListener("click", shows);
tongue.addEventListener("click", shows);
astonished.addEventListener("click", shows);
eating.addEventListener("click", shows);
defaultm.addEventListener("click", shows);
/*neck variables*/
bendbackward.addEventListener("click", shows);
bendforward.addEventListener("click", shows);
defaultn.addEventListener("click", shows);
thick.addEventListener("click", shows);
/*nose variables*/
defaultnose.addEventListener("click", shows);
/*leg variables*/
bubbletea.addEventListener("click", shows);
gameconsole.addEventListener("click", shows);
cookie.addEventListener("click", shows);
tiltbackwardleg.addEventListener("click", shows);
tiltforwardleg.addEventListener("click", shows);
defaultl.addEventListener("click", shows);
/*accessories variables*/
glasses.addEventListener("click", shows);
headphones.addEventListener("click", shows);
flower.addEventListener("click", shows);
earings.addEventListener("click", shows);
/*background variables*/
blue50.addEventListener("click", shows);
blue60.addEventListener("click", shows);
blue70.addEventListener("click", shows);
darkblue30.addEventListener("click", shows);
darkblue50.addEventListener("click", shows);
darkblue70.addEventListener("click", shows);
green50.addEventListener("click", shows);
green60.addEventListener("click", shows);
green70.addEventListener("click", shows);
grey40.addEventListener("click", shows);
grey70.addEventListener("click", shows);
grey80.addEventListener("click", shows);
red50.addEventListener("click", shows);
red60.addEventListener("click", shows);
red70.addEventListener("click", shows);
yellow50.addEventListener("click", shows);
yellow60.addEventListener("click", shows);
yellow70.addEventListener("click", shows);

function shows(){
  var allItems = document.getElementsByClassName("hair3");
  for (var i=0; i<allItems.length; i++){
  allItems[i].className = "hai";
}

  var hair = document.getElementsByClassName("hai")
  if (this.className === "hai") {
    this.className = "hair3";
  } else {
    this.className = "hai";
  }
}

/*hair variables*/
curls.addEventListener("click", dis);
elegant.addEventListener("click", dis);
fancy.addEventListener("click", dis);
quiff.addEventListener("click", dis);
bang.addEventListener("click", dis);
short.addEventListener("click", dis);
defaulth.addEventListener("click", dis);

function dis(){
  var lItems = document.getElementsByClassName("hiddenHair2");
  for (var i=0; i<lItems.length; i++){
  lItems[i].className = "hiddenHair";
}

  var hair = this.attributes["data-img"].value;
  var hairs = document.getElementById(hair);
  if (hairs.className === "hiddenHair"){
    hairs.className = "hiddenHair2";
  }
  else{
    hairs.className = "hiddenHair";
  }
}

/*ears variables*/
tiltbackward.addEventListener("click", disp);
tiltforward.addEventListener("click", disp);
defaulte.addEventListener("click", disp);

function disp(){
  var lItems = document.getElementsByClassName("hiddenEars2");
  for (var i=0; i<lItems.length; i++){
  lItems[i].className = "hiddenEars";
}

  var hair = this.attributes["data-img"].value;
  var hairs = document.getElementById(hair);
  if (hairs.className === "hiddenEars"){
    hairs.className = "hiddenEars2";
  }
  else{
    hairs.className = "hiddenEars";
  }
}

/*eyes variables*/
smart.addEventListener("click", displ);
panda.addEventListener("click", displ);
star.addEventListener("click", displ);
angry.addEventListener("click", displ);
defaultey.addEventListener("click", displ);
naughty.addEventListener("click", displ);

function displ(){
  var lItems = document.getElementsByClassName("hiddenEyes2");
  for (var i=0; i<lItems.length; i++){
  lItems[i].className = "hiddenEyes";
}

  var hair = this.attributes["data-img"].value;
  var hairs = document.getElementById(hair);
  if (hairs.className === "hiddenEyes"){
    hairs.className = "hiddenEyes2";
  }
  else{
    hairs.className = "hiddenEyes";
  }
}

/*mouth variables*/
laugh.addEventListener("click", displa);
tongue.addEventListener("click", displa);
astonished.addEventListener("click", displa);
eating.addEventListener("click", displa);
defaultm.addEventListener("click", displa);

function displa(){
  var lItems = document.getElementsByClassName("hiddenMouth2");
  for (var i=0; i<lItems.length; i++){
  lItems[i].className = "hiddenMouth";
}

  var hair = this.attributes["data-img"].value;
  var hairs = document.getElementById(hair);
  if (hairs.className === "hiddenMouth"){
    hairs.className = "hiddenMouth2";
  }
  else{
    hairs.className = "hiddenMouth";
  }
}

/*neck variables*/
bendbackward.addEventListener("click", display);
bendforward.addEventListener("click", display);
defaultn.addEventListener("click", display);
thick.addEventListener("click", display);

function display(){
  var lItems = document.getElementsByClassName("hiddenNeck2");
  for (var i=0; i<lItems.length; i++){
  lItems[i].className = "hiddenNeck";
}

  var hair = this.attributes["data-img"].value;
  var hairs = document.getElementById(hair);
  if (hairs.className === "hiddenNeck"){
    hairs.className = "hiddenNeck2";
  }
  else{
    hairs.className = "hiddenNeck";
  }
}

/*nose variables*/
defaultnose.addEventListener("click", displayii);

function displayii(){
  var lItems = document.getElementsByClassName("hiddenNose2");
  for (var i=0; i<lItems.length; i++){
  lItems[i].className = "hiddenNose";
}

  var hair = this.attributes["data-img"].value;
  var hairs = document.getElementById(hair);
  if (hairs.className === "hiddenNose"){
    hairs.className = "hiddenNose2";
  }
  else{
    hairs.className = "hiddenNose";
  }
}

/*leg variables*/
bubbletea.addEventListener("click", displayi);
gameconsole.addEventListener("click", displayi);
cookie.addEventListener("click", displayi);
tiltbackwardleg.addEventListener("click", displayi);
tiltforwardleg.addEventListener("click", displayi);
defaultl.addEventListener("click", displayi);

function displayi(){
  var lItems = document.getElementsByClassName("hiddenLeg2");
  for (var i=0; i<lItems.length; i++){
  lItems[i].className = "hiddenLeg";
}

  var hair = this.attributes["data-img"].value;
  var hairs = document.getElementById(hair);
  if (hairs.className === "hiddenLeg"){
    hairs.className = "hiddenLeg2";
  }
  else{
    hairs.className = "hiddenLeg";
  }
}

/*accessories variables*/
glasses.addEventListener("click", displayim);
headphones.addEventListener("click", displayim);
flower.addEventListener("click", displayim);
earings.addEventListener("click", displayim);

function displayim(){
  var lItems = document.getElementsByClassName("hiddenAccessories2");
  for (var i=0; i<lItems.length; i++){
  lItems[i].className = "hiddenAccessories";
}

  var hair = this.attributes["data-img"].value;
  var hairs = document.getElementById(hair);
  if (hairs.className === "hiddenAccessories"){
    hairs.className = "hiddenAccessories2";
  }
  else{
    hairs.className = "hiddenAccessories";
  }
}

/*background variables*/
blue50.addEventListener("click", displayimg);
blue60.addEventListener("click", displayimg);
blue70.addEventListener("click", displayimg);
darkblue30.addEventListener("click", displayimg);
darkblue50.addEventListener("click", displayimg);
darkblue70.addEventListener("click", displayimg);
green50.addEventListener("click", displayimg);
green60.addEventListener("click", displayimg);
green70.addEventListener("click", displayimg);
grey40.addEventListener("click", displayimg);
grey70.addEventListener("click", displayimg);
grey80.addEventListener("click", displayimg);
red50.addEventListener("click", displayimg);
red60.addEventListener("click", displayimg);
red70.addEventListener("click", displayimg);
yellow50.addEventListener("click", displayimg);
yellow60.addEventListener("click", displayimg);
yellow70.addEventListener("click", displayimg);


function displayimg(){
  var lItems = document.getElementsByClassName("hiddenBack2");
  for (var i=0; i<lItems.length; i++){
  lItems[i].className = "hiddenBack";
}

  var hair = this.attributes["data-img"].value;
  var hairs = document.getElementById(hair);
  if (hairs.className === "hiddenBack"){
    hairs.className = "hiddenBack2";
    
  }
  else{
    hairs.className = "hiddenBack";
  }
}

var downl = document.getElementById("download");
var al = document.getElementById("content");
downl.addEventListener("click", gen);

function gen(){
  html2canvas(al).then((canvas) => {
    let a = document.createElement("a");
    a.href = canvas
      .toDataURL("image/jpeg")
      .replace("image/jpeg", "image/octet-stream");

    a.download = "Alpaca.jpg";
    a.click();
  });
}

var ran = document.getElementById("random");
ran.addEventListener("click", rand);

function rand(){
  Math.floor(Math.random())
}