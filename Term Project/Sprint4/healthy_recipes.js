$(document).ready(function() {
    // API credentials
    const appId = "22762bca";
    const appKey = "99fe8bf64fc7c5c29ea153db8f9eb07c";

    // Endpoint for recipe search
    const endpoint = "https://api.edamam.com/search";

    // Function to fetch recipes
    function fetchRecipes() {
        $.ajax({
            url: endpoint,
            method: "GET",
            data: {
                q: "healthy",
                app_id: appId,
                app_key: appKey
            },
            success: function(response) {
                // Process the response and display recipes
                displayRecipes(response.hits);
            },
            error: function(xhr, status, error) {
                console.error("Error fetching recipes:", error);
            }
        });
    }

    // Function to display recipes
    function displayRecipes(recipes) {
        const recipeContainer = $("#recipe-container");
        // Clear any existing recipes
        recipeContainer.empty();
        // Loop through each recipe and display it
        recipes.forEach(function(recipe) {
            const recipeTitle = recipe.recipe.label;
            const recipeImage = recipe.recipe.image;
            const recipeLink = recipe.recipe.url;
            // Create HTML for recipe card
            const recipeCard = `
                <div class="recipe-card">
                    <img src="${recipeImage}" alt="${recipeTitle}">
                    <h3>${recipeTitle}</h3>
                    <a href="${recipeLink}" target="_blank">View Recipe</a>
                </div>
            `;
            // Append recipe card to container
            recipeContainer.append(recipeCard);
        });
    }

    // Fetch recipes when the page is loaded
    fetchRecipes();
});
