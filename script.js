// Get query parameters and current page
const params = new URLSearchParams(window.location.search);
const currentPage = window.location.pathname;

// ========== Common: Fetch Categories ==========
async function fetchcategory() {
    try {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await res.json();
        const categorylist = data.categories;

        document.getElementById('categorylist').innerHTML = categorylist.map(item => `
            <a href="categories.html?name=${encodeURIComponent(item.strCategory)}">
                <div class="border rounded-full bg-gray-200 justify-center text-center w-[120px] h-[100px]">
                    <img class="transition-transform duration-500 h-full hover:scale-110 w-full object-cover rounded-full"
                         src="${item.strCategoryThumb}" alt="${item.strCategory}">
                    <p>${item.strCategory}</p>
                </div>
            </a>
        `).join('');
    } catch (error) {
        console.log(error);
    }
}

// ========== Common: Fetch Dishes ==========
async function fetchDishes() {
    try {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
        const data = await res.json();
        const disheslist = data.meals;

        document.getElementById('disheslist').innerHTML = disheslist.map(item => `
            <div class="w- relative shadow-lg rounded-lg space-y-2 border p-2">
                <img class="rounded-lg shadow-lg" src="${item.strMealThumb}" alt="${item.strMeal}">
                <div class="absolute top-5 right-5 bg-white px-2 py-1 text-red-600 rounded-full">
                    <i class="fa-solid fa-heart"></i>
                </div>
                <a href="reciepyDetails.html?id=${encodeURIComponent(item.idMeal)}" class="font-bold">${item.strMeal}</a>
                <div class="flex justify-between flex-wrap">
                    <div class="flex gap-2 items-center">
                        <i class="fa-solid fa-clock"></i>
                        <p>30 min</p>
                    </div>
                    <div class="flex gap-2 items-center">
                        <i class="fa-solid fa-utensils"></i>
                        <p>Easy</p>
                    </div>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.log(error);
    }
}

// ========== Common: Instagram-style Food Posts ==========
async function fetchinstaPost() {
    try {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
        const data = await res.json();
        const disheslist = data.meals;

        document.getElementById('instapost').innerHTML = disheslist.slice(0, 4).map(item => `
            <div class="w-fit space-y-4">
                <div class="flex items-center gap-2">
                    <div class="bg-black px-3 py-1 rounded-full text-white w-fit">F</div>
                    <div>
                        <h1 class="font-bold">FoodieLand</h1>
                        <p>Tokyo, Japan</p>
                    </div>
                </div>
                <img src="${item.strMealThumb}" alt="${item.strMeal}" class="w-full rounded-lg">
                <div class="flex justify-between text-2xl">
                    <div class="flex gap-2">
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-regular fa-comment"></i>
                        <i class="fa-solid fa-share"></i>
                    </div>
                    <i class="fa-regular fa-bookmark"></i>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.log(error);
    }
}

// ========== Page: categories.html ==========
if (currentPage.includes('categories.html')) {
    const categoryName = params.get('name');
    console.log('Category:', categoryName);

    // Set category heading
    document.getElementById('heading').innerHTML = `
        <h1 class="text-4xl p-4 flex flex-wrap font-bold text-white items-end gap-4 justify-center">
            <span class="font-normal text-xl text-gray-200">Category / </span>
            <span class="lobster-regular">${categoryName}</span>
        </h1>
    `;

    // Fetch dishes by category
    async function fetchdishbyCat() {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
            const data = await res.json();
            const disheslist = data.meals;

            document.getElementById('dishlist').innerHTML = disheslist.map(item => `
                <div class="w- relative shadow-lg rounded-lg space-y-2 border p-4">
                    <img class="rounded-lg shadow-lg" src="${item.strMealThumb}" alt="">
                    <div class="absolute top-5 right-5 bg-white px-2 py-1 text-red-600 rounded-full">
                        <i class="fa-solid fa-heart"></i>
                    </div>
                    <h1 class="font-bold">${item.strMeal}</h1>
                    <div class="flex flex-wrap justify-between">
                        <div class="flex gap-2 items-center">
                            <i class="fa-solid fa-clock"></i>
                            <p>30 min</p>
                        </div>
                        <div class="flex gap-2 items-center">
                            <i class="fa-solid fa-utensils"></i>
                            <p>Easy</p>
                        </div>
                    </div>
                </div>
            `).join('');
        } catch (error) {
            console.log(error);
        }
    }

    fetchdishbyCat();
}

// ========== Page: reciepyDetails.html ==========
if (currentPage.includes('reciepyDetails.html')) {
    const mealId = params.get('id');
    console.log('Meal ID:', mealId);

    async function fetchMealById(id) {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await res.json();
            const meal = data.meals[0];
            console.log(meal);
            

            document.getElementById('dishhead').innerHTML = `
                ${meal.strMeal}
            `;
        } catch (error) {
            console.log(error);
        }
    }

    fetchMealById(mealId);
}

// ========== Load Common Data (on all pages) ==========
fetchinstaPost();
fetchcategory();
fetchDishes();
