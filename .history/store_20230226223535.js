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
        let imageDisplay = document.querySelector(".items");
        let pics = "";

        for (let product of data) {
            pics += `
            <figure id="productOne" class="good mules">
                <img src='${product.img}' alt="" class="img_class" onclick="productPop()">
            </figure>
        `;
        }
        imageDisplay.innerHTML = pics;
    });

// Fetching each product info
fetch("store.json")
.then(response => response.json())
.then(data =>{
    let productDisplay = document.querySelector(".product_card"); 
    let out = "";

    for(let product of data){
        out += `
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
        `;
    }
    productDisplay.innerHTML = out;
});
 
// Add class and remove class function for the filter names
// const addClass = (element, name) => {
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for(i = 0; i < arr2.length; i++) {
//         if(arr1.indexOf(arr2[i]) == -1) {
//             element.className += " " + arr2[i];
//         }
//     }
// }


// const removeClass = (element, name) => {
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for(i = 0; i < arr2.length; i++) {
//         while(arr1.indexOf(arr2[i]) > -1) {
//             arr1.splice(arr1.indexOf(arr2[i]), 1);
//         }
//     }
//     element.className = arr1.join(" ");
// }


// function filterObjects(c) {
//     var x;
//     var i;
//     x = document.getElementsByClassName("good");
//     if(c == "all") {c = ""};
//     for(i = 0; i < x.length; i++) {
//         removeClass(x[i], "show");
//         if(x[i].className.indexOf(c) > -1) {addClass(x[i], "show")}
//     }
// }

// // Filter
// filterObjects("all");


// const filterObjects = (filter) => {
const filterObjects = (filter = "good") => {
    let images = document.querySelectorAll(".good");
    // FOR LOOP
    for (let i = 0; i < images.length; i++) {
        const classNames = images[i].className;
        images[i].style.display = classNames.includes(filter) ? "grid" : "none";
    }
};

filterObjects();