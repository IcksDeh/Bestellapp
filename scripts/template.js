function dishTemplate(arrayname, dishIndex, array) {
      return `<section class="box_maindish">
                    <div class="distance_edge">
                    <h3 id="title_${arrayname}${dishIndex}">${array[dishIndex].name}</h3>
                        <p>${array[dishIndex].discription}</p>
                        <p id="price_${arrayname}${dishIndex}" class="price_style">Preis ${array[dishIndex].price.toFixed(2)}€</p>
                    </div>
                    <div class="div_add_button">
                        <button onclick="addDishToCart('${arrayname}', ${dishIndex})" class="add_button">+</button>
                    </div>
                </section>`      
}

function showDishInCartTemplate(arrayname, eachArray, dishIndex){
    return `<div class="cart_content id="cart_content_id_'${arrayname}' ${dishIndex}">
                <h3 class="title_basket_style">${eachArray[dishIndex].name}</h3>
                <div class="orderelements_in_cart">
                    <div id="main_dish_in_cart ${dishIndex}" class="button_elements">
                        <button onclick="reduceDishInCart ('${arrayname}',${dishIndex})" class="button_cart">
                            <img class="button_cart_plus_minus" src="./assets/img/minus_PP.svg" alt="Weniger">
                        </button>
                        <p>${eachArray[dishIndex].amount}x</p>
                        <button onclick="addDishToCart('${arrayname}',${dishIndex})" class="button_cart">
                            <img  class="button_cart_plus_minus" src="./assets/img/plus_PP.svg" alt="Mehr">
                        </button>
                    </div>
                    <p>${eachArray[dishIndex].price.toFixed(2)}€</p>
                    <Button onclick="setDishToZero('${arrayname}',${dishIndex})" class="button_cart">
                        <img class="button_cart_trash" src="./assets/img/trash_2_PP.svg" alt="Entfernen">
                    </Button>
                </div>
    
    `
}
