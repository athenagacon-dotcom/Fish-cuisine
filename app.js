
/* ==========================================
   1. DONNEES DE DEMONSTRATION
========================================== */

const ingredients = [
    {
        id: 1,
        name: "Tomate",
        category: "Légumes",
        description: "Un incontournable de la cuisine.",
        image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600"
    },
    {
        id: 2,
        name: "Avocat",
        category: "Fruits",
        description: "Onctueux et riche en bons lipides.",
        image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600"
    },
    {
        id: 3,
        name: "Carotte",
        category: "Légumes",
        description: "Un légume polyvalent et coloré.",
        image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=600"
    },
    {
        id: 4,
        name: "Pâtes",
        category: "Féculents",
        description: "Une base idéale pour de nombreux plats.",
        image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=600"
    },
    {
        id: 5,
        name: "Œufs",
        category: "Produits frais",
        description: "Une excellente source de protéines.",
        image: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=600"
    },
    {
        id: 6,
        name: "Courgette",
        category: "Légumes",
        description: "Parfaite pour les plats d'été.",
        image: "https://images.unsplash.com/photo-1563252722-6434563a985d?w=600"
    }
];


/* ==========================================
   2. RECETTES DE DEMONSTRATION
========================================== */

const recipes = [
    {
        id: 1,
        name: "Salade fraîcheur",
        description: "Une salade simple et colorée.",
        time: 15,
        servings: 2,
        ingredients: [
            "Tomate",
            "Avocat",
            "Œufs"
        ],
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600"
    },
    {
        id: 2,
        name: "Pâtes aux légumes",
        description: "Un plat gourmand et équilibré.",
        time: 25,
        servings: 2,
        ingredients: [
            "Pâtes",
            "Tomate",
            "Courgette"
        ],
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600"
    },
    {
        id: 3,
        name: "Poêlée de légumes",
        description: "Une recette facile à préparer.",
        time: 20,
        servings: 2,
        ingredients: [
            "Carotte",
            "Courgette",
            "Œufs"
        ],
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600"
    }
];


/* ==========================================
   3. SECURISER LES TEXTES AFFICHES
========================================== */

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[character];
    });
}


/* ==========================================
   4. AFFICHER LES INGREDIENTS
========================================== */

function displayIngredients() {
    const container = document.getElementById("ingredientsList");

    if (!container) return;

    container.innerHTML = ingredients.map(ingredient => `
        <article class="card">
            <img
                src="${escapeHTML(ingredient.image)}"
                alt="${escapeHTML(ingredient.name)}"
                loading="lazy"
            >

            <div class="card-content">
                <p class="eyebrow">
                    ${escapeHTML(ingredient.category)}
                </p>

                <h3>${escapeHTML(ingredient.name)}</h3>

                <p>${escapeHTML(ingredient.description)}</p>
            </div>
        </article>
    `).join("");
}


/* ==========================================
   5. AFFICHER LES RECETTES
========================================== */

function displayRecipes() {
    const container = document.getElementById("recipesList");

    if (!container) return;

    container.innerHTML = recipes.map(recipe => `
        <article class="card">
            <img
                src="${escapeHTML(recipe.image)}"
                alt="${escapeHTML(recipe.name)}"
                loading="lazy"
            >

            <div class="card-content">
                <p class="eyebrow">
                    ${recipe.time} MINUTES · ${recipe.servings} PERSONNES
                </p>

                <h3>${escapeHTML(recipe.name)}</h3>

                <p>${escapeHTML(recipe.description)}</p>

                <p>
                    <strong>Ingrédients :</strong>
                    ${recipe.ingredients.map(ingredient =>
                        escapeHTML(ingredient)
                    ).join(", ")}
                </p>
            </div>
        </article>
    `).join("");
}


/* ==========================================
   6. BOUTON ADMINISTRATION
========================================== */

function setupAdminButton() {
    const button = document.getElementById("adminButton");

    if (!button) return;

    button.addEventListener("click", () => {
        alert(
            "L'espace administrateur sera bientôt disponible. " +
            "Nous allons le créer dans les prochaines étapes."
        );
    });
}


/* ==========================================
   7. INITIALISATION DU SITE
========================================== */

function initializeSite() {
    displayIngredients();
    displayRecipes();
    setupAdminButton();

    console.log("Mon carnet de recettes est opérationnel !");
}

document.addEventListener("DOMContentLoaded", initializeSite);
