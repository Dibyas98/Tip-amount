let cal=document.getElementById("calculate");
let tiphead=document.getElementById("tiphead");
tiphead.style.display="none";
cal.addEventListener("click",()=>{
    let amount=document.getElementById("amount").value;
    let quality=document.getElementById("Squality").value;
    let people=document.getElementById("totalPeople").value;
    tiphead.style.display="block";
    let tip=document.getElementById("tip");
    let totalt=(amount*quality)/people;
    let symbol=document.getElementById("symbol").value;
    tip.innerText=`${symbol} ${totalt.toFixed(2)}`
    tip.style.color="red";

})