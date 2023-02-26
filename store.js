
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

// Product Pop-Up
const productPop = () => {
    document.getElementById("productPage").style.display = "block"
}

const closeProductPop = () => {
    document.getElementById("productPage").style.display = "none"
}


const filterObjects = (filter = "good") => {
    let images = document.querySelectorAll(".good");

    // FOR..OF
    // for (const image of images) {
    //     const classNames = image.className;
    //     image.style.display = classNames.includes(filter) ? "grid" : "none";
    // }

    // FOR EACH
    // images.forEach(image => {
    //     const classNames = image.className;
    //     image.style.display = classNames.includes(filter) ? "grid" : "none";
    // });

    // FOR LOOP
    // for (let i = 0; i < images.length; i++) {
    //     const classNames = images[i].className;
    //     images[i].style.display = classNames.includes(filter) ? "grid" : "none";
    // }
};

filterObjects(); 