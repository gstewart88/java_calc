var in1 = document.getElementById('a');
var in2 = document.getElementById('b');
var op = document.getElementById('operand')

var myDate = new Date(); 
var xmas = Date.parse("Dec 25, "+myDate.getFullYear()) 
var starwarsday = Date.parse("Dec 17, "+myDate.getFullYear())
var today = Date.parse(myDate) 
var daysToChristmas = Math.round((xmas-today)/(1000*60*60*24)) 
var daysToStarwars = Math.round((starwarsday-today)/(1000*60*60*24)) 

var h = 0;
var s = 50;
var l = 50;

var intervalID = window.setInterval(increment, 10);

function increment(){
    h = h % 360 + 1;
    h2 = h + 30;
    h3 = h2 + 30;
    h4 = h3 + 30;
    document.getElementById("answer").setAttribute('style', "text-align: center;font-size:220px;color: hsla("+ h +","+ s +"%,"+ l +"%, 1);text-shadow: 10px 10px hsla("+ h2 +","+ s +"%,"+ l +"%, 1);");
};

var form = document.getElementById('input');
form.addEventListener("submit", function(e){
e.preventDefault();
var a = parseInt(in1.value)
var b = parseInt(in2.value)
switch(op.value){
case"add":
document.getElementById("answer").innerHTML = (a+b);
break;
case"subtract":
document.getElementById("answer").innerHTML = (a-b);
break;
case"multiply":
document.getElementById("answer").innerHTML = (a*b);
break;
case"divide":
document.getElementById("answer").innerHTML = (a/b);
break;
default:
console.log('am I working?')
}
});

var element = document.getElementById('event_click');
element.addEventListener("click", function() {
 if (daysToChristmas==0) 
 document.getElementById("answer").innerHTML = ("Today is Christmas ... Merry Christmas!");
 console.log("Today is Christmas ... Merry Christmas!") 
 if (daysToChristmas<0) 
  document.getElementById("answer").innerHTML = ("Christmas was "+-1*(daysToChristmas)+" days ago.");
 console.log("Christmas was "+-1*(daysToChristmas)+" days ago."); 
 if (daysToChristmas>0) 
  document.getElementById("answer").innerHTML = ("There are "+daysToChristmas+" days to Christmas!");
 console.log("There are "+daysToChristmas+" days to Christmas!")

});

var element = document.getElementById('starwars_click');
element.addEventListener("click", function() {
 if (daysToStarwars==0) 
 document.getElementById("answer").innerHTML = ("Star Wars is out ... Go see it IMMEDIATELY!");
 console.log("Today is Star Wars ... Star Wars!") 
 if (daysToStarwars<0) 
  document.getElementById("answer").innerHTML = ("Star Wars came out "+-1*(daysToStarwars)+" days ago.");
 console.log("Star Wars was "+-1*(daysToStarwars)+" days ago."); 
 if (daysToStarwars>0) 
  document.getElementById("answer").innerHTML = ("There are "+daysToStarwars+" days till Star Wars!");
 console.log("There are "+daysToStarwars+" days to Star Wars!")

});
