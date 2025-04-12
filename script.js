async function fetchcategory(params) {
    try {
        const res=await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        const data=await res.json()
        console.log(data);
        const categorylist=data.categories;
        console.log(categorylist);
        
        document.getElementById('categorylist').innerHTML=categorylist.map(items=>`
              <div class="flex flex-col justify-center text-center w-fit ">
                <img width="" src=${items.strCategoryThumb} alt="">
                <p>Breakfast</p>
               </div> 
            `).join('')
        
    } catch (error) {
        console.log(error);
        
    }
}

async function fetchDishes(params) {
    try {
        const res=await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
        const data=await res.json()
        console.log(data);
        const disheslist=data.meals;
        console.log(disheslist);
        document.getElementById('disheslist').innerHTML=disheslist.map(items=>`
            <div class="w- relative shadow-lg rounded-lg space-y-2 border  p-4">
                    <img class="rounded-lg shadow-lg" src=${items.strMealThumb} alt="">
                    <div class="absolute top-5 right-5 bg-white px-2 py-1 text-red-600 rounded-full"><i class="fa-solid fa-heart"></i></div>
                    <h1 class="font-bold ">Big and Juicy Wagyu Beef Cheeseburger</h1>
                    <div class="flex justify-center gap-10">
                    <div class="flex gap-2 items-center">
                        <i class="fa-solid fa-clock"></i>
                        <p>30 min</p>
                    </div>
                    <div class="flex gap-2 items-center">
                        <i class="fa-solid fa-utensils"></i>
                        <p>30 min</p>
                    </div>
                </div>
            </div>
            `).join('')
    } catch (error) {
        console.log(error);
        
    }
}

async function fetchinstaPost(params) {
    try {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
        const data = await res.json();
        console.log(data);
        const disheslist = data.meals;
        console.log(disheslist);

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

fetchinstaPost()
fetchcategory()
fetchDishes()