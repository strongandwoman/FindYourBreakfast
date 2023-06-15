const recipes = document.querySelectorAll(".recipe");
const input = document.querySelector(".search");
input.addEventListener("keyup", function (event) {
  const inputResult = event.target.value.toLowerCase();

  recipes.forEach((ingredient) => {
    ingredient
      .querySelector(".ingredients")
      .textContent.toLowerCase()
      .includes(inputResult)
      ? (ingredient.style.display = "block")
      : (ingredient.style.display = "none");
  });
});
