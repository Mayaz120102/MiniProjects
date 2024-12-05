const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".searchBtn");
const recipeContainer = document.querySelector(".recipe-container");
const recipeDetailsContent = document.querySelector(".recipe-details-content");
const closeBtn = document.querySelector(".closeBtn");

const recipes = async (query) => {
  recipeContainer.innerHTML = "seaching for recipe";
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );
  const response = await data.json();

  recipeContainer.innerHTML = "";
  response.meals.forEach((meal) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");
    recipeDiv.innerHTML = `
     <img src ="${meal.strMealThumb}">
     <h3>${meal.strMeal}</h3>
     <p>${meal.strArea}</p>
     <p>${meal.strCategory}</p>
    `;
    const recipbtn = document.createElement("button");
    recipbtn.textContent = "View Recipe";
    recipeDiv.appendChild(recipbtn);
    recipbtn.addEventListener("click", () => {
      openRecipePopup(meal);
    });

    recipeContainer.appendChild(recipeDiv);

    // console.log(meal);
  });
  //   console.log(response);
};

const openRecipePopup = (meal) => {
  recipeDetailsContent.innerHTML = `
   <h2>${meal.strMeal}</h2>
   `;
  recipeDetailsContent.parentElement.style.display = "block";
};

searchBtn.addEventListener("click", () => {
  const searchInput = searchBox.value.trim();
  recipes(searchInput);

  //   console.log("nice worked hehe");
});
