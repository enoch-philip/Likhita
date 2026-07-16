function showPage(id){
document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
document.getElementById(id).classList.add('active');
}
function openMedia(src){
document.getElementById('viewer').style.display='flex';
document.getElementById('bigImg').src=src;
}
function closeMedia(){document.getElementById('viewer').style.display='none';}
function openLetter(){
document.getElementById('letterCard').style.display='block';
const el=document.getElementById('typed');
const txt=el.innerText;
el.innerText='';
let i=0;
const t=setInterval(()=>{
 if(i<txt.length){el.innerText+=txt.charAt(i++);}
 else clearInterval(t);
},35);
}
