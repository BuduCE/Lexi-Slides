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