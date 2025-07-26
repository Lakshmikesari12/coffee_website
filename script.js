// document.addEventListener("DOMContentLoaded", () => {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];

//     function addToCart(event) {
//         let button = event.target;
//         let itemName = button.parentElement.querySelector("h3").textContent;
//         let itemPrice = button.parentElement.querySelector(".price").textContent.replace("$", "");

//         cart.push({ item: itemName, price: itemPrice });
//         localStorage.setItem("cart", JSON.stringify(cart));

//         // Redirect after adding item
//         window.location.href = "pg3.4.html";
//     }

//     // Attach event listeners to all "Add to Cart" buttons
//     document.querySelectorAll("button").forEach(button => {
//         if (button.textContent.includes("Add to cart")) {
//             button.addEventListener("click", addToCart);
//         }
//     });
// });