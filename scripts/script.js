function renderFunction() {
    renderMainDish();
}

function renderMainDish(){
    let mainDishContent = document.getElementById('show_main_dish');
    mainDishContent.innerHTML = '';

    for (let MainDishIndex = 0; MainDishIndex < mainDishes.length; MainDishIndex++) {
        mainDishContent.innerHTML += mainDishTemplate(MainDishIndex);
    }
}

function addMainDishToCart(mainDishIndex){
    mainDishes[mainDishIndex].amount += 1;
    showMainDishInCart();
}

function reduceMainDishInCart(mainDishIndex){
    mainDishes[mainDishIndex].amount -= 1;
    showMainDishInCart();
}

function showMainDishInCart(){
    let showCartContent = document.getElementById('cart_content_wrapper');
    showCartContent.innerHTML = "";
    for (let index = 0; index < mainDishes.length; index++) {
        if(mainDishes[index].amount >= 1){
            showCartContent.innerHTML += showMainDishInCartTemplate(index);
        }; 
    }
}

function raiseDishInCart(mainDishIndex){
    mainDishes[mainDishIndex].amount += 1;
    renderAmount(mainDishIndex);
}

function renderAmount(mainDishIndex) {
    let mainDishInCart = document.getElementById('main_dish_in_cart'+ mainDishIndex);
    mainDishInCart.innerHTML= renderMainDishInCartTemplate(mainDishIndex);
    
}


