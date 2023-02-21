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
    var product = document.getElementById("productPage").style.display === "block"

    // if (product.style.display === "none") {
    //     product.style.display === "block"
    // }
}

const closeProductPop = () => {
    var product = document.getElementById("productPage")

    if (product.style.display === "block") {
        product.style.display === "none"
    }
}