// Product Pop-Up
const productPop = () => {
    document.getElementById("productPage").style.display = "block"
}

const closeProductPop = () => {
    document.getElementById("productPage").style.display = "none"
}

// Fetching from JSON
// Ensure to fetch image from a product-image file
fetch("store.json")
.then(response => response.json())
// .then(data => showInfo(data)
.then(data =>{
    let productImg = document.querySelector(".img_class"); 
    let out = "";

    for(let product of data){
        out += `
                <h4 class="pdt_name">${}</h4>
                <p class="pdt_desc">Grey: Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                
                <div class="contact_row">
                    <small class="pdt_price">₦15,000</small>
                    <button>Direct Order</button>
                </div>
        `;
    }
});

const showInfo = (data) => {
    let productImg = document.querySelector(".img_class");
    let productName = document.querySelector(".pdt_name");
    let productDesc = document.querySelector(".pdt_desc");
    let productPrice = document.querySelector(".pdt_price");

    console.log(data.store);
}
 
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


const filterObjects = (filter) => {
    let images = document.querySelectorAll(".good");
    if (!filter) {
        for (let a = 0; a <= images.length; a++) {
            images[a].style.display = "block";
        }
        return;
    }

    for (let i = 0; i <= images.length; i++) {
        const classNames = images[i].className;
        if (classNames.includes(filter)) {
            images[i].style.display = "block";
        } else {
            images[i].style.display = "none";
        }
    }
}