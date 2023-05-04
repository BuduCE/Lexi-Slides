let storeProducts;

const fetchProduct = () => {
    fetch("storeImages.json")
        .then(response => response.json())
        .then(data => {
            storeProducts = data
        })
}
fetchProduct();

// Onclick for product Pop-Up
const productPop = (id) => {
    const product = storeProducts.find((item) => item.id === id);
    
    document.querySelector(".product_page").innerHTML =
        `
        <div class="product_card">    
            <div class="close_product_card" onclick="closeProductPop()">
                    <h1>X</h1>
            </div>

            <img src='${product.img}' alt="" class="img_class">
    
            <div class="product_info">
                <h4 class="pdt_name">${product.name}</h4>
                <p class="pdt_desc">${product.Desc}</p>
    
                <div class="contact_row">
                    <small class="pdt_price">${product.price}</small>
                    <button>Direct Order</button>
                </div>
            </div>
        </div>
    `
        ;

    document.getElementById("productPage").style.display = "block";
}

const closeProductPop = () => {
    document.getElementById("productPage").style.display = "none"
}

// Fetching store products and info
fetch("storeImages.json")
    .then(response => response.json())
    .then(data => {
        let imageDisplay = document.querySelector(".items");
        let pics = "";

        for (let product of data) {
            pics += `
            <figure id="productOne" class='good ${product.class}'>
                <img src='${product.img}' alt="" class="img_class" onclick="productPop(${product.id})">

                <div class="product_info">
                    <h4 class="pdt_name">${product.name}</h4>
                    // <p class="pdt_desc">${product.Desc}</p>
                
                    <div class="contact_row">
                        <small class="pdt_price">${product.price}</small>

                        <small><strike>${product.priceOff}</strike></small>
                    </div>
                </div>
            </figure>
        `;
        }
        imageDisplay.innerHTML = pics;
    })
;

// Filter
const filterObjects = (filter = "good") => {
    let images = document.querySelectorAll(".good");
    for (let i = 0; i < images.length; i++) {
        const classNames = images[i].className;
        images[i].style.display = classNames.includes(filter) ? "grid" : "none";
    }
};

filterObjects();

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