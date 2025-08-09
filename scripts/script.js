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
    if(mainDishes[mainDishIndex].amount >=1){
        mainDishes[mainDishIndex].amount -= 1;
        showMainDishInCart();
    }
    
}

function showMainDishInCart(){
    let showCartContent = document.getElementById('cart_content_wrapper');
    showCartContent.innerHTML = "";
    for (let index = 0; index < mainDishes.length; index++) {
        if(mainDishes[index].amount >= 1){
            showCartContent.innerHTML += showMainDishInCartTemplate(index);
        }; 
    }
    calculateSubtotal();
}

function setMainDishToZero(mainDishIndex){
    mainDishes[mainDishIndex].amount = 0;
    showMainDishInCart();

}

function calculateSubtotal(){
    let showSubtotal = document.getElementById('')
    let subtotal = 0;
    for (let index = 0; index < mainDishes.length; index++) {
       let resultEachDish = mainDishes[index].amount * mainDishes[index].price;
       subtotal += resultEachDish;
       console.log(subtotal);
       resultEachDish.innerHTML = showSubtotalTemplate();
        
    }
}
