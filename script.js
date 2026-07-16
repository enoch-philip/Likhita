/* =====================================
   BIRTHDAY WEBSITE - SCRIPT.JS
   PART 3A
======================================*/

// -----------------------------
// PAGE NAVIGATION
// -----------------------------

function showPage(page){

document.querySelectorAll(".page").forEach(p=>{

p.classList.remove("active");

});

document.getElementById(page).classList.add("active");

}

// -----------------------------
// GIFT OPENING
// -----------------------------

const gift=document.getElementById("gift");

if(gift){

gift.addEventListener("click",()=>{

gift.style.transform="scale(1.15) rotate(12deg)";
gift.style.transition=".5s";

confettiBoom();

setTimeout(()=>{

showPage("home");

},900);

});

}

// -----------------------------
// CONFETTI
// -----------------------------

function confettiBoom(){

const emoji=[

"🎉",

"✨",

"💖",

"🎊",

"🎈",

"🌸"

];

for(let i=0;i<180;i++){

let e=document.createElement("div");

e.innerHTML=emoji[Math.floor(Math.random()*emoji.length)];

e.style.position="fixed";

e.style.left=Math.random()*100+"vw";

e.style.top="-20px";

e.style.fontSize=(16+Math.random()*20)+"px";

e.style.pointerEvents="none";

e.style.zIndex="9999";

document.body.appendChild(e);

let x=(Math.random()*700)-350;

let y=window.innerHeight+120;

e.animate([

{

transform:"translate(0,0) rotate(0deg)",

opacity:1

},

{

transform:`translate(${x}px,${y}px)
rotate(${Math.random()*720}deg)`,

opacity:0

}

],{

duration:3500,

easing:"ease-out"

});

setTimeout(()=>{

e.remove();

},3800);

}

}

// -----------------------------
// FLOATING HEARTS
// -----------------------------

const floatingIcons=[

"❤️",

"💖",

"💕",

"🌸",

"✨",

"🎈"

];

for(let i=0;i<40;i++){

let heart=document.createElement("div");

heart.className="float";

heart.innerHTML=

floatingIcons[
Math.floor(Math.random()*floatingIcons.length)
];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=

(20+Math.random()*20)+"px";

heart.style.animationDuration=

(8+Math.random()*8)+"s";

heart.style.animationDelay=

Math.random()*6+"s";

document.body.appendChild(heart);

}

// -----------------------------
// BUTTON ANIMATION
// -----------------------------

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.08)";

btn.style.boxShadow="0 10px 25px rgba(255,80,150,.4)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

btn.style.boxShadow="none";

});

});

// -----------------------------
// PHOTO POPUP
// -----------------------------

function openImage(src){

const viewer=document.getElementById("viewer");

const img=document.getElementById("bigImage");

viewer.style.display="flex";

img.src=src;

}

function closeViewer(){

document.getElementById("viewer").style.display="none";

}

/* ========= END OF PART 3A ========= */
/* =====================================
   BIRTHDAY WEBSITE - SCRIPT.JS
   PART 3B
======================================*/

// -----------------------------
// ENVELOPE OPENING
// -----------------------------

function openLetter(){

const paper=document.getElementById("paper");

paper.style.display="block";

paper.animate([

{
transform:"translateY(150px) scale(.2)",
opacity:0
},

{
transform:"translateY(0px) scale(1)",
opacity:1
}

],{

duration:900,

fill:"forwards",

easing:"ease-out"

});

typeLetter();

}

// -----------------------------
// TYPEWRITER EFFECT
// -----------------------------

function typeLetter(){

const text=document.getElementById("typed");

const full=text.dataset.full || text.innerText;

text.dataset.full=full;

text.innerText="";

let i=0;

clearInterval(window.typing);

window.typing=setInterval(()=>{

text.innerText+=full.charAt(i);

i++;

if(i>=full.length){

clearInterval(window.typing);

heartRain();

}

},28);

}

// -----------------------------
// HEART RAIN
// -----------------------------

function heartRain(){

const hearts=[

"❤️",

"💖",

"💕",

"💗",

"💝"

];

for(let i=0;i<120;i++){

let h=document.createElement("div");

h.innerHTML=hearts[Math.floor(Math.random()*hearts.length)];

h.style.position="fixed";

h.style.left=Math.random()*100+"vw";

h.style.top="-50px";

h.style.fontSize=(18+Math.random()*18)+"px";

h.style.pointerEvents="none";

h.style.zIndex="9999";

document.body.appendChild(h);

h.animate([

{
transform:"translateY(0px)",
opacity:1
},

{
transform:`translateY(${window.innerHeight+120}px)`,
opacity:0
}

],{

duration:5000+Math.random()*2000,

easing:"linear"

});

setTimeout(()=>{

h.remove();

},7000);

}

}

// -----------------------------
// FLOATING SPARKLES
// -----------------------------

setInterval(()=>{

let s=document.createElement("div");

s.innerHTML="✨";

s.style.position="fixed";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

s.style.fontSize=(12+Math.random()*12)+"px";

s.style.opacity="0";

s.style.pointerEvents="none";

document.body.appendChild(s);

s.animate([

{
opacity:0,
transform:"scale(.5)"
},

{
opacity:1,
transform:"scale(1.3)"
},

{
opacity:0,
transform:"scale(.5)"
}

],{

duration:1200

});

setTimeout(()=>{

s.remove();

},1200);

},900);

// -----------------------------
// BALLOONS
// -----------------------------

setInterval(()=>{

let b=document.createElement("div");

b.innerHTML="🎈";

b.style.position="fixed";

b.style.left=Math.random()*100+"vw";

b.style.bottom="-80px";

b.style.fontSize=(30+Math.random()*20)+"px";

b.style.pointerEvents="none";

document.body.appendChild(b);

b.animate([

{
transform:"translateY(0)"
},

{
transform:"translateY(-120vh)"
}

],{

duration:12000,

easing:"linear"

});

setTimeout(()=>{

b.remove();

},12000);

},2500);

// -----------------------------
// HAPPY BIRTHDAY TITLE GLOW
// -----------------------------

setInterval(()=>{

document.querySelectorAll(".title").forEach(title=>{

title.animate([

{
textShadow:"0 0 10px white"
},

{
textShadow:"0 0 30px #ff4f9f"
},

{
textShadow:"0 0 10px white"
}

],{

duration:2200

});

});

},2500);

// -----------------------------
// PAGE LOAD FADE
// -----------------------------

window.addEventListener("load",()=>{

document.body.animate([

{
opacity:0
},

{
opacity:1
}

],{

duration:1200,

fill:"forwards"

});

});

/* ========= END OF SCRIPT ========= */
