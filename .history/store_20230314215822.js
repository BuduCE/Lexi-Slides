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
    let update = document.querySelector(".product_page");

    let newer = "";
    for (let products of product){
        newer += `
            <div class="close_product_card" onclick="closeProductPop()">
                <h1>X</h1>
            </div>
    
            <div class="product_info">
                <h4 class="pdt_name">${products.storeInfo.name}</h4>
                <p class="pdt_desc">${products.storeInfo.Desc}</p>
    
                <div class="contact_row">
                    <small class="pdt_price">${products.storeInfo.price}</small>
                    <button>Direct Order</button>
                </div>
            </div>
        `
        ;
    }

    update.innerhtml = newer;

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
                    <h4 class="pdt_name">${product.storeInfo.name}</h4>
                    <p class="pdt_desc">${product.storeInfo.Desc}</p>
                
                    <div class="contact_row">
                        <small class="pdt_price">${product.storeInfo.price}</small>

                        <small><strike>${product.storeInfo.priceOff}</strike></small>
                    </div>
                </div>
            </figure>
        `;
        }
        imageDisplay.innerHTML = pics;
    })
;

// fetch("storeImages.json")
//     .then(response => response.json())
//     .then(data => {
//         let imageDisplay = document.querySelector(".items");
//         let pics = "";

//         for (let product of data) {
//             pics += `
//             <figure id="productOne" class='good ${product.class}'>
//                 <img src='${product.img}' alt="" class="img_class" onclick="productPop()">

//                 <div class="product_info">
//                     <h4 class="pdt_name">${product.storeInfo.name}</h4>
//                     <p class="pdt_desc">${product.storeInfo.Desc}</p>
                
//                     <div class="contact_row">
//                         <small class="pdt_price">${product.storeInfo.price}</small>

//                         <small><strike>${product.storeInfo.priceOff}</strike></small>
//                     </div>
//                 </div>
//             </figure>
//         `;
//         }
//         imageDisplay.innerHTML = pics;
//     })
//     ;

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


// Product pop up carousel