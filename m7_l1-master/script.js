
const productFormEl = document.getElementById("productForm");
const priceInputEl = document.querySelector("input[name='price']");
const quantityInputEl = document.querySelector("input[name='quantity']");
const totalPriceEl = document.getElementById("totalPrice");
const amountEl = document.getElementById("amount");

// const changeTotalPrice = () => {
//   totalPriceEl.textContent = priceInputEl.value * quantityInputEl.value + "uah";
// };

// const productFormHandler = (event) => {
//   event.preventDefault();
//   const inputName = event.target.name;

//   if (inputName === "quantity") {
//     amountEl.textContent = quantityInputEl.value;
//   }

//   changeTotalPrice();
// };

// productFormEl.addEventListener("input", productFormHandler);
// changeTotalPrice();

// const parent = document.getElementById("parent");
// const child = document.getElementById("child");
// const descendant = document.getElementById("descendant");

// parent.addEventListener("click", (event) => {
//   console.log("parent handler", event.target.id);
//   console.log("parent handler", event.currentTarget.id);
// });

// child.addEventListener("click", (event) => {
//   event.stopPropagation();

//   console.log("child handler", event.target.id);
//   console.log("child handler", event.currentTarget.id);
// });

// descendant.addEventListener("click", (event) => {
//   console.log("descendant handler", event.target.id);
//   console.log("descendant handler", event.currentTarget.id);
// });
