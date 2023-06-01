const searchForm = document.querySelector('form');
const searchResult = document.querySelector('.search-result');
const container = document.querySelector('.container');
let input = document.querySelector('input');
let searchQuery = "";

const app_id = "3d8941b7";
const app_key = "f8a2b64c810db0e7f0a9b15407968175";

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    console.log(searchQuery);

    fetchAPI();

    input.value = "";
});

async function fetchAPI() {
    const base_url = `https://api.edamam.com/search?q=${searchQuery}&app_id=${app_id}&app_key=${app_key}&to=100`;
    const response = await fetch(base_url);
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data);
}

function generateHTML(results) {
    let generatedHTML = "";
    results.map(result => {
        generatedHTML += 
        `
            <div class="item">
                <img src="${result.recipe.image}" alt="image of food">
                <div class="flex-container">
                    <h1 class="title">${result.recipe.label}</h1>
                    <a href="${result.recipe.url}" class="view-btn" target="_blank">View Recipe</a>
                </div>
                <p class="item-data">Calories: ${Math.floor(result.recipe.calories)}</p>
                <p class="item-data">Diet Labels: ${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels : 'No Data Found'}</p>
                <p class="item-data">Cuisine Type: ${result.recipe.cuisineType}</p>
            </div>
        `
    });

    searchResult.innerHTML = generatedHTML;
}