const finishOrder = () => {
  const localStorageProducts = localStorage.getItem("shoppingCartList");
  const productsInCart = localStorageProducts
    ? JSON.parse(localStorageProducts)
    : [];

  if (productsInCart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  localStorage.removeItem("shoppingCartList");
  createCartCounter();
  buildShoppingCart();

  window.location.href = "../pages/success.html";
};
const finishOrderBtn = document.getElementById("finish-order-btn");
finishOrderBtn.addEventListener("click", finishOrder);
