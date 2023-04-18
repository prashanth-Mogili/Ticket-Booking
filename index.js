


const slot = document.getElementsByClassName("slot");
let n = slot.length;
let bcount = 0,rcount = n;
for(let i=0;i<n;i++){
    slot[i].innerHTML = `<h1>${i+1}</h1>`;
slot[i].addEventListener("click",function(){
    //console.log("I got clicked");
    if(!slot[i].classList.contains("booked")){
       slot[i].classList.add("booked");
       bcount++;
       rcount--;
       refresh();
    }
    else{
        slot[i].classList.remove("booked");
        rcount++;
        bcount--;
        refresh();
    }
})
}

function refresh(){
document.getElementById("Btickets").textContent = bcount;
document.getElementById("Rtickets").textContent = rcount;
}
refresh();
