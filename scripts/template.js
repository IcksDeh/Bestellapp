function mainDishTemplate(mainDishIndex) {
      return `<section class="box_maindish">
                    <div class="distance_edge">
                    <h3 id="main_dish${mainDishIndex}">${mainDishes[mainDishIndex].name}</h3>
                        <p>${mainDishes[mainDishIndex].discription}</p>
                        <p id="price_main_dish ${mainDishIndex}" class="price_style">Preis ${mainDishes[mainDishIndex].price.toFixed(2)}€</p>
                    </div>
                    <div class="div_add_button">
                        <button onclick="addMainDishToCart(${mainDishIndex})" ${mainDishIndex}" class="add_button">+</button>
                    </div>
                </section>`      
}

function showMainDishInCartTemplate(mainDishIndex){
    return `<div class="cart_content id="cart_content_id ${mainDishIndex}">
                <h3 class="title_basket_style">${mainDishes[mainDishIndex].name}</h3>
                <div class="orderelements_in_cart">
                    <div id="main_dish_in_cart ${mainDishIndex}" class="button_elements">
                        <button onclick="reduceMainDishInCart (${mainDishIndex})" class="button_cart">
                            <img class="button_cart_plus_minus" src="./assets/img/minus_PP.svg" alt="Weniger">
                        </button>
                        <p>${mainDishes[mainDishIndex].amount}x</p>
                        <button onclick="addMainDishToCart(${mainDishIndex})" class="button_cart">
                            <img  class="button_cart_plus_minus" src="./assets/img/plus_PP.svg" alt="Mehr">
                        </button>
                    </div>
                    <p>${mainDishes[mainDishIndex].price.toFixed(2)}€</p>
                    <Button onclick="setMainDishToZero(${mainDishIndex})" class="button_cart">
                        <img class="button_cart_trash" src="./assets/img/trash_2_PP.svg" alt="Entfernen">
                    </Button>
                </div>
    
    `
}
function renderMainDishInCartTemplate(mainDishIndex){
    return `<button class="button_cart">
                <img class="button_cart_plus_minus" src="./assets/img/minus_PP.svg" alt="Weniger">
            </button>
            <p>${mainDishes[mainDishIndex].amount}x</p>
            <button onclick="raiseDishInCart(${mainDishIndex})  class="button_cart">
            <img class="button_cart_plus_minus" src="./assets/img/plus_PP.svg" alt="Mehr">
            </button>
    
    `
}
