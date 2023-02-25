// Changing store section
const slide_page = document.getElementById("slides");

const shoe_page = document.getElementById("shoes");

const belt_page = document.getElementById("belts")


const slidesPane = () => {
    slide_page.style.display = "grid";
    shoe_page.style.display = "none";
    belt_page.style.display = "none";
}

const shoesPane = () => {
    shoe_page.style.display = "grid";
    slide_page.style.display = "none";
    belt_page.style.display = "none";
}

const beltsPane = () => {
    belt_page.style.display = "grid";
    shoe_page.style.display = "none";
    slide_page.style.display = "none";
}

// Product Pop-Up
const productPop = () => {
    document.getElementById("productPage").style.display = "block"
}

const closeProductPop = () => {
    document.getElementById("productPage").style.display = "none"
}


// Filter
filterObjects("all");

function filterObjects(c) {
    var x, i;
    x = document.getElementsByClassName("good");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "good");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "good");
    }
}

// Add class and remove class function for the filter names
const addClass = (element, name) => {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}


const removeClass = (element, name) => {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}