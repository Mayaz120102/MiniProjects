const searchBox = document.querySelector(".searchBox");

const searchBtn = document.querySelector(".searchBtn");

const recipeContainer = document.querySelector(".recipe-container");

const recipes = () => {
  const data = fetch(`www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`);
};

searchBox.addEventListener("click", () => {
  console.log("clicked");
});

searchBtn.addEventListener("click", () => {
  const searchInput = searchBox.ariaValueMax.trim();
  recipes();
  console.log("nice worked hehe");
});
