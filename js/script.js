var totalprice = 0;
var phones = document.querySelectorAll(".add");
var showPrice = document.querySelector(".showprice");
var priceText = document.querySelector(".totalPrice");
var result = document.querySelector(".result");
var cart = document.querySelector(".cart");

phones.forEach(function (element) {
  element.onclick = function () {
    scrollBy(0, 100);
    totalprice = totalprice + element.getAttribute("price") * 1;
    result.style.display = "block";
    var tempParent = element.parentElement.cloneNode(true);
    tempParent.removeChild(tempParent.children[2]);
    var warpper = document.createElement("div");
    warpper.appendChild(tempParent);
    cart.innerHTML = cart.innerHTML + warpper.innerHTML;
  };
});

showPrice.onclick = function () {
  scrollBy(0, 100);

  priceText.innerHTML = totalprice;
};
