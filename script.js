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
fetchcategory()