function mainDishTemplate(mainDishIndex) {
      return `<section class="box_maindish">
                    <div class="distance_edge">
                    <h3 id="main_dish${mainDishIndex}">${mainDishes[mainDishIndex].name}</h3>
                        <p>${mainDishes[mainDishIndex].discription}</p>
                        <p id="price_main_dish ${mainDishIndex}" class="price_style">Preis ${mainDishes[mainDishIndex].price.toFixed(2)}€</p>
                    </div>
                    <div class="div_add_button">
                        <button id="add_main_dish ${mainDishIndex}" class="add_button">+</button>
                    </div>
                </section>`      
}