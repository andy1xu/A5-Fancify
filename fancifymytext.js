// (function() {
//     "use strict";
// }

// from https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events
//const btn = document.querySelector("button");
const bigBtn = document.getElementById("big");
const mooBtn = document.getElementById("moo");

const fancyBtn = document.getElementById("FancyShmancy");
const boringBtn = document.getElementById("BoringBetty");

function helloWorld() {
    alert("Hello, world!");
}

// change font to 24pt
function incFont() {
    document.getElementById("fancy").style.fontSize = '24pt';
    // document.getElementById("fancy").style.fontSize = 110%;
}

// fancySchmancy
function fancySchmancy() {
    // italicize
    document.getElementById("fancy").style.fontStyle = "italic";
    
    //bold
    document.getElementById("fancy").style.fontWeight = "bold";
    
    //change font to blue
    document.getElementById("fancy").style.color = "blue";

    //underline
    document.getElementById("fancy").style.textDecoration = "underline";
}

function boringBetty() {
    document.getElementById("fancy").style.fontWeight = "normal";
    document.getElementById("fancy").style.fontSize = '10pt';
}


function amendMoo() {
    let amendTextElement = document.getElementById("fancy");
    let amendText = amendTextElement.value.toUpperCase();
    let parts = amendText.split(".");
    amendText = parts.join("-Moo."); // if you keep clicking, it keeps adding moo
    amendTextElement.value = amendText;
}
// alert function
function notify() {
    alert("Font changed !");
}

// https://www.w3schools.com/jsref/event_onclick.asp
bigBtn.onclick = function(){helloWorld()};
bigBtn.onclick = function(){incFont()};

fancyBtn.onchange = function(){notify()};
fancyBtn.onclick = function(){fancySchmancy()};
boringBtn.onclick = function(){boringBetty()};

mooBtn.onclick = function(){amendMoo()};

// btn.addEventListener("click", helloWorld);

// btn.addEventListener("click", () => {
//     alert("Hello, world!");
// }
// );


/*
Now let's set up a very basic JS event handler. 
Modify your JS code and HTML so that the "Hello, world!" 
alert message won't pop up until
 the user clicks the "Bigger" button.
*/

console.log("hello");