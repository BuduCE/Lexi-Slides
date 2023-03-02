// Product Pop-Up
const productPop = () => {
    document.getElementById("productPage").style.display = "block"
}

const closeProductPop = () => {
    document.getElementById("productPage").style.display = "none"
}

// Fetching store images
fetch("storeImages.json")
    .then(response => response.json())
    .then(data => {
        let imageDisplay = document.querySelector(".store_section");
        let pics = "";

        for (let product of data) {
            pics += `

            <section class="store">
                <div class="items slide_pane" id="slides">    
                    <figure id="productOne" class='good ${product.class}'>
                        <img src='${product.img}' alt="" class="img_class" onclick="productPop()">
                    </figure>
                </div>
            </section>

            <section class="product_page" id="productPage">
                <div class="product_card" key='${product.id}'>
                    <div class="close_product_card" onclick="closeProductPop()">
                        <h1>X</h1>
                    </div>

                    <img src='${product.img}' alt="" class="img_class">
        
                    <div class="product_info">
                        <h4 class="pdt_name">${product.storeInfo.name}</h4>

                        <p class="pdt_desc">${product.storeInfo.Desc}</p>
                        
                        <div class="contact_row">
                            <small class="pdt_price">${product.storeInfo.price}</small>
                            <button>Direct Order</button>
                        </div>
                    </div>
                </div>
            </section>
        `;
        }
        imageDisplay.innerHTML = pics;
    });

// Fetching each product info
// fetch("store.json")
// .then(response => response.json())
// .then(data =>{
//     let productDisplay = document.querySelector(".product_card"); 
//     let out = "";

//     for(let product of data){
//         out += `
//                 <div class="close_product_card" onclick="closeProductPop()">
//                     <h1>X</h1>
//                 </div>

//                 <img src='${product.img}' alt="" class="img_class">
    
//                 <div class="product_info" key="${product.id}">
//                     <h4 class="pdt_name">${product.storeInfo.name}</h4>

//                     <p class="pdt_desc">${product.storeInfo.Desc}</p>
                    
//                     <div class="contact_row">
//                         <small class="pdt_price">${product.storeInfo.price}</small>
//                         <button>Direct Order</button>
//                     </div>
//                 </div>
//         `;
//     }
//     productDisplay.innerHTML = out;
// });

// Filter
const filterObjects = (filter = "good") => {
    let images = document.querySelectorAll(".good");
    for (let i = 0; i < images.length; i++) {
        const classNames = images[i].className;
        images[i].style.display = classNames.includes(filter) ? "block" : "none";
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