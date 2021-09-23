let navitems = document.getElementsByClassName("navitem");

for(let i = 0; i < navitems.length; i++){
    TweenLite.from(navitems[i], 
        {duration: .6, x: -100, alpha: 0, delay: i*.1}
    );
}