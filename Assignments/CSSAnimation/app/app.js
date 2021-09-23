let change = document.getElementsByClassName("cell");

for(let i = 0; i < change.length; i++){
    TweenLite.from(change[i], {
        duration: 1, x:-100, alpha: 0, delay: i*.1
    })
}

function boxFocus(){
    console.log(change);
    //Event target will target the specific thing that activates this function.
    resetAnimation(event.target);
    event.target.classList.remove("deselected");
    event.target.classList.add("selected");
    
}

function boxunFocus(){
    resetAnimation(event.target);
    event.target.classList.remove("selected");
    event.target.classList.add("deselected");
}

function resetAnimation(el){
    el.style.animation = 'none';
    el.offsetHeight; 
    el.style.animation = null;
}