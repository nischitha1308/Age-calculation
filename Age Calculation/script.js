const pastdate=document.getElementById('name');
const btn=document.getElementById('bttn');
const total=document.getElementById('result');
function calculateage(){
    const p=new Date(pastdate.value);
    const d=new Date();
    const age=d.getFullYear()-p.getFullYear();
    total.innerText=age;
}
btn.addEventListener('click',calculateage);