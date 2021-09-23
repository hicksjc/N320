let txtStatInput = document.getElementById("txtStatinput");

function textFocus() {
    resetAnimation(txtStatInput);
    txtStatInput.classList.remove("deselected");
    txtStatInput.classList.add("selected");
}

function textLeave(){
    resetAnimation(txtStatInput);
    txtStatInput.classList.remove("selected");
    txtStatInput.classList.add("deselected");
}

function resetAnimation(el){
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null;
}