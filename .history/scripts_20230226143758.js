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

// ChatGPT Carousel
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (slides.length === 0) return;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Product Pop-Up
// const productPop = () => {
//     document.getElementById("productPage").style.display === "block"
// }

// const closeProductPop = () => {
//     document.getElementById("productPage").style.display === "none"
// }