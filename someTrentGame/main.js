let mycont = document.getElementById('container');
document.addEventListener('click', onpress);
gameLoop();

function onpress() {
    let dropnumber = Math.floor(Math.random() * 15);
    for(let i = 0; i < dropnumber; i++) {
        let leftpos = Math.floor(Math.random() *700);
        let snowflake = "<div class='drop' style='left:"+leftpos +"px'></div>";
        mycont.innerHTML += snowflake;
    }
}

function gameLoop () {
    window.requestAnimationFrame(gameLoop);
    fall();
}

function fall () {
    dropArray = document.getElementsByClassName("drop");
    for(let i = 0; i < dropArray.length; i++) {
        let topspot = dropArray[i].style.top.replace("px","");
        if(topspot != 490) {
            topspot++;
            dropArray[i].style.top = topspot + "px";
        }
    }
}