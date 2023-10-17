document.addEventListener("DOMContentLoaded", function () {
  const planItems = document.querySelectorAll(".plan-list");

  // Функція для оновлення цін на основі вибраної опції
  const updatePrices = (selectedOption, selectPlanId, selectPriceElement) => {
    planItems.forEach(() => {
      switch (selectPlanId) {
        case "basic":
          selectPriceElement.textContent =
            selectedOption === "month" ? "$9.99" : "$99.99";
          break;
        case "standard":
          selectPriceElement.textContent =
            selectedOption === "month" ? "$19.99" : "$199.99";
          break;
        case "premium":
          selectPriceElement.textContent =
            selectedOption === "month" ? "$29.99" : "$299.99";
          break;
        default:
          break;
      }
    });
  };

  // Функція для виводу даних для "Sign Up"
  const signUp = (selectedOption, selectPlanId, selectPriceElement) => {
    alert(
      `${selectPlanId}, ${selectPriceElement.textContent}/${selectedOption}`
    );
  };

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

      // Отрибуємо дані для "Sign Up"
      const btn = item.querySelector(".btn");

      if (e.target.nodeName === "BUTTON") {
        btn.addEventListener(
          "click",
          signUp(selectedOption, selectPlanId, selectPriceElement)
        );
      } else return;
    });
  });
});
