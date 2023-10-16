document.addEventListener("DOMContentLoaded", function () {
  const planItems = document.querySelectorAll(".plan-list");

  // Функція для оновлення цін на основі вибраної опції
  function updatePrices(selectedOption, selectPlanId, selectPriceElement) {
    planItems.forEach((item) => {
      // Отримуємо ID плану
      const planId = selectPlanId;

      // Оновлюємо ціни відповідно до вибору
      const priceElement = selectPriceElement;
      //   console.log(priceElement);

      if (planId === "basic") {
        priceElement.textContent =
          selectedOption === "month" ? "$9.99" : "$99.99";
      } else if (planId === "standard") {
        priceElement.textContent =
          selectedOption === "month" ? "$19.99" : "$199.99";
      } else if (planId === "premium") {
        priceElement.textContent =
          selectedOption === "month" ? "$29.99" : "$299.99";
      }
    });
  }

  // Додаємо обробник подій до кожного плану
  planItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      const selectedOption =
        e.target.nodeName === "SPAN"
          ? e.target.textContent
          : item.querySelector(".plan-period-value.selected").textContent;

      const selectPlanId = item.getAttribute("data-plan-id");

      const selectPriceElement = item.querySelector(".plan-price-value");

      // Видаляємо клас "selected" з усіх опцій
      item.querySelectorAll(".plan-period-value").forEach((option) => {
        option.classList.remove("selected");
      });

      // Додаємо клас "selected" до вибраної опції
      item
        .querySelector(`.plan-period-value.${selectedOption}`)
        .classList.add("selected");

      // Оновлюємо ціни
      updatePrices(selectedOption, selectPlanId, selectPriceElement);
    });
  });
});
