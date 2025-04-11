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
            <div class="w- rounded-lg space-y-2 bg-[#E7F9FD] p-4">
                    <img src=${items.strMealThumb} alt="">
                    <div></div>
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

fetchcategory()
fetchDishes()