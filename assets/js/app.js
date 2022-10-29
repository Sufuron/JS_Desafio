const inputNumber = document.querySelector('input[type="number"]');
const inputColor = document.querySelector('input[type="color"]');
const price = document.querySelector(".card_main_price > span");
const quantity = document.querySelector(".card_main_quantity");
const colorChoose = document.querySelector(".card_main_choose_color");
const button = document.querySelector(".card_main_button");
const originalPrice = price.textContent;

button.addEventListener("click", () => {
  price.textContent = originalPrice;

  inputNumber.value > 0 && inputNumber.value < 2
    ? originalPrice
    : (price.textContent =
        Number(price.textContent) * Number(inputNumber.value));

  quantity.textContent = inputNumber.value;
  colorChoose.style.backgroundColor = inputColor.value;
});
