const searchInputs = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");
const priceButton = document
  .getElementById("search-price")
  .querySelector("button");

const changeClass = (filter) => {
  buttons.forEach((buttons) => {
    if (buttons.dataset.filter === filter) {
      buttons.classList.add("selected");
    } else {
      buttons.classList.remove("selected");
    }
  });
};

const searchHandeler = (event) => {
  const searchValue = event.target.value.toLowerCase().trim();

  products.forEach((product) => {
    console.log(product.children);
    const productName = product.children[1].innerText.toLowerCase();
    console.log(productName);
    if (productName.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

const filterHandeler = (event) => {
  const filter = event.target.dataset.filter;
  changeClass(filter);

  products.forEach((product) => {
    const category = product.dataset.category;
    if (filter === "all") {
      product.style.display = "block";
    } else {
      filter === category
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};

const searchPriceHandler = (event) => {
  const searchPrice = event.target.parentElement.children[0].value;
  console.log(searchPrice);

  products.forEach((product) => {
    const productPrice = product.children[2].innerText;
    const price = productPrice.split(" ")[1];
    if (!searchPrice) {
      product.style.display = "block";
    } else {
      searchPrice === price
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
    console.log(price);
  });
};

const start = () => {
  buttons.forEach((button) => {
    button.addEventListener("click", filterHandeler);
  });
  searchInputs.addEventListener("keyup", searchHandeler);
  priceButton.addEventListener("click", searchPriceHandler);
};

window.addEventListener("load", start);
 