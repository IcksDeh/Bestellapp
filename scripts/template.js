function dishTemplate(array, dishIndex) {
      return `<section class="box_maindish">
                    <div class="distance_edge">
                    <h3 id="id_${dishIndex}">${array[dishIndex].name}</h3>
                        <p>${array[dishIndex].discription}</p>
                        <p id="price_${array[dishIndex]} ${dishIndex}" class="price_style">Preis ${array[dishIndex].price.toFixed(2)}€</p>
                    </div>
                    <div class="div_add_button">
                        <button onclick="addMainDishToCart(${array,dishIndex})" class="add_button">+</button>
                    </div>
                </section>`      
}

function showMainDishInCartTemplate(array, dishIndex){
    return `<div class="cart_content id="cart_content_id ${dishIndex}">
                <h3 class="title_basket_style">${array[dishIndex].name}</h3>
                <div class="orderelements_in_cart">
                    <div id="main_dish_in_cart ${dishIndex}" class="button_elements">
                        <button onclick="reduceMainDishInCart (${dishIndex})" class="button_cart">
                            <img class="button_cart_plus_minus" src="./assets/img/minus_PP.svg" alt="Weniger">
                        </button>
                        <p>${array[dishIndex].amount}x</p>
                        <button onclick="addMainDishToCart(${dishIndex})" class="button_cart">
                            <img  class="button_cart_plus_minus" src="./assets/img/plus_PP.svg" alt="Mehr">
                        </button>
                    </div>
                    <p>${array[dishIndex].price.toFixed(2)}€</p>
                    <Button onclick="setMainDishToZero(${dishIndex})" class="button_cart">
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
