/*HamburgerNav*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  /*Maps*/
  function initMap() {
    var uluru = { lat: 59.31135, lng: 18.07483 };
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: uluru
    });
    var marker = new google.maps.Marker({ position: uluru, map: map });
  }

/*Categories*/

const div = document.getElementById("beef");

 getMenu = async () => {
  try {
      const result = axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      const { data: categories } = await result;
      div.innerHTML="";
      categories.categories.forEach(category => {
          div.innerHTML +=
          `
            
              <div class="card-categories">
                <img
                class="image-categories"
                src="${category.strCategoryThumb}"
              style="width: 100%;"
              />
          <div class="card-text-container">
            <h3>${category.strCategory}</h3>
            <p>${category.strCategoryDescription}</p>
          </div>
          
       `;
      }); 
  }
  catch (err) {
      div.innerHTML = `Couldn´t reach the API.`
      console.log("getCustomers: ERROR", err);
  }
}
getMenu ();

/*Search*/

let dish = document.getElementById("dishName");
let get = document.getElementById("myButton");
 

get.onclick = async () => {
  try {

    let input = document.getElementById('myInput').value;
    const result = axios.get (`https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`);
      const { data: meals } = await result;
      dish.innerHTML ="";
      meals.meals.forEach(meal => {
        dish.innerHTML +=
        `
          <div class="card-categories">
          <img
            class="image-categories"
            src="${meal.strMealThumb}"
            style="width: 100%;"
          />
          <div class="card-text-container">
              <h3>${meal.strMeal}</h3>
              <p>${meal.strInstructions}</p>
          </div>
        `;
          
      }); 
  }
  catch (err) {
      dish.innerHTML = `Couldn´t reach the API.`
      console.log("getCustomers: ERROR", err);
  }
}
