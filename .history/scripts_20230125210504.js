// Hamburger Menu
const showMenu = () => {
    var x = document.getElementById("mobi-links")
    // var a = document.getElementById("close_hamburger")
    var b = document.getElementById("hamburger")
    if (x.style.display === "flex") {
        x.style.display = 'none'
        // a.style.display = 'none'
        b.style.display = 'block'
    } else {
        x.style.display = 'flex'
        // a.style.display = 'block'
        b.style.display = 'none'
    }
}


// const closeHamburger = () => {
// var a = document.getElementById("close_hamburger")
//     var x = document.getElementById("mobi-links")
//     var b = document.getElementById("hamburger")

//     if (x.style.display === "flex") {
//         //x.style.display = "none"
//         x.classList.add("after")
//         // a.style.display = "none"
//         b.style.display = "block"
//     }
// }

// ChatGPT Carousel
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// Changing project section
const webDesign = document.getElementById("web");

const mobDesign = document.getElementById("mobile");

const freeDesign = document.getElementById("freebies")


const webSection = () => {
    webDesign.style.display = "grid";
    mobDesign.style.display = "none";
    freeDesign.style.display = "none";
}

const mobSection = () => {
    mobDesign.style.display = "grid";
    webDesign.style.display = "none";
    freeDesign.style.display = "none";
}

const freeSection = () => {
    freeDesign.style.display = "grid";
    mobDesign.style.display = "none";
    webDesign.style.display = "none";
}