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

// Changing store section
// const slide_page = document.getElementById("slides");

// const shoe_page = document.getElementById("shoes");

// const belt_page = document.getElementById("belts")


// const slidesPane = () => {
//     slide_page.style.display = "grid";
//     shoe_page.style.display = "none";
//     belt_page.style.display = "none";
// }

// const shoesPane = () => {
//     shoe_page.style.display = "grid";
//     slide_page.style.display = "none";
//     belt_page.style.display = "none";
// }

// const beltsPane = () => {
//     belt_page.style.display = "grid";
//     shoe_page.style.display = "none";
//     slide_page.style.display = "none";
// }