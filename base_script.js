let timescam=false;
let currentscore=0;
let randor=0;
let y=null;
function start() {
    document.getElementById("cur_score").value=currentscore.toString();
    moleOut();
    y=setTimeout(() => {
        timescam=true;
        alert("Game FInished your score: "+currentscore);
    }, 20000);
}

function onCScam(dd) {
    if(randor==parseInt(dd))
    {
        let hit=document.getElementById(randor.toString())
        hit.classList.remove("show");
        hit.classList.add("hit")
        // hit.style.backgroundImage="url('hit_mole.webp')"
        currentscore+=1;
        document.getElementById("cur_score").value=currentscore.toString();
        setTimeout(()=>{hit.classList.remove("hit")},800);
        // hit.classList.remove("hit")
    }
}


function moleOut(){
    
    if(!timescam) {
    const time=randomTime(200,1000);
    let x = Math.floor((Math.random() * 9) + 1).toString();
    randor=parseInt(x);
    document.getElementById(x).classList.add("show");
    setTimeout(() => {
        moleOut();
        document.getElementById(x).classList.remove("show");
    }, time);
    }
}


function scamUndone(){
    
    alert("Game Stopped , Score Was: "+currentscore)
    window.location.reload()
}   

function randomTime(min,max)
{
    return Math.round(Math.random() * (max - min) + min);
}





