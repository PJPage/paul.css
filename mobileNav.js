var opened = false;

window.onload = function() {
    var nav = document.getElementsByClassName("navbar")[0]
    var items = nav.childNodes; 

    for (var i = 0; i < items.length; i++) {
        items[i].className += " hide-small";
    }
    var menuItem = document.createElement("li");
    menuItem.className = "hide-medium hide-large";
    var menuButton = document.createElement("a");
    menuButton.href="javascript:void(0)";
    menuButton.onclick = openOrClose;
    menuButton.style = "text-align: left";
    var menuIcon = document.createElement("i");
    menuIcon.className = "fa fa-bars"

    nav.insertBefore(menuItem, nav.firstChild);
    menuItem.appendChild(menuButton);
    menuButton.appendChild(menuIcon);
}

function removeClass(element, remove) {
    var newClassName = "";
    var i;
    var classes = element.className.split(" ");
    for(i = 0; i < classes.length; i++) {
        if(classes[i] !== remove) {
            newClassName += classes[i] + " ";
        }
    }
    element.className = newClassName;
}

function openOrClose() {
    var items = document.getElementsByClassName("navbar")[0].childNodes;

    if (!opened) {
        for (var i = 0; i < items.length; i++) {
            removeClass(items[i], "hide-small");
        }
        opened = true;
    } else {
        for (var i = 1; i < items.length; i++) {
            items[i].className += " hide-small";
        }
        opened = false;
    }
}

