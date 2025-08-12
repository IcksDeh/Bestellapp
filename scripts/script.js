function renderFunction() {
    loadFromLocalStorage();
    renderMainDish();
    renderSideDish();
    renderDrinks();
    renderDesserts();
    showMainDishInCart();
}

function renderMainDish(){
    let mainDishContent = document.getElementById('show_main_dish');
    mainDishContent.innerHTML = '';

    for (let mainDishIndex = 0; mainDishIndex < mainDishes.length; mainDishIndex++) {
        mainDishContent.innerHTML += dishTemplate(mainDishes, mainDishIndex);
    }
}

function renderSideDish(){
    let sideDishContent = document.getElementById('show_side_dish');
    sideDishContent.innerHTML = '';

    for (let sideDishIndex = 0; sideDishIndex < sideDishes.length; sideDishIndex++) {
        sideDishContent.innerHTML += dishTemplate(sideDishes, sideDishIndex);
    }
}

function renderDrinks(){
    let drinksContent = document.getElementById('show_drinks');
    drinksContent.innerHTML = '';

    for (let drinksIndex = 0; drinksIndex < drinks.length; drinksIndex++) {
        drinksContent.innerHTML += dishTemplate(drinks, drinksIndex );
    }
}

function renderDesserts(){
     let dessertsContent = document.getElementById('show_dessert');
    dessertsContent.innerHTML = '';

    for (let dessertsIndex = 0; dessertsIndex < desserts.length; dessertsIndex++) {
        dessertsContent.innerHTML += dishTemplate(desserts, dessertsIndex);
    }

}

function addMainDishToCart(mainDishIndex){
    mainDishes[mainDishIndex].amount += 1;
    showMainDishInCart();
    saveToLocalStorage();
}

function reduceMainDishInCart(mainDishIndex){
    if(mainDishes[mainDishIndex].amount >=1){
        mainDishes[mainDishIndex].amount -= 1;
        saveToLocalStorage();
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
    calculateSubtotalCosts();
}

function setMainDishToZero(mainDishIndex){
    mainDishes[mainDishIndex].amount = 0;
    saveToLocalStorage();
    showMainDishInCart();
}

function calculateSubtotalCosts(){
    let showSubtotalCosts = document.getElementById('show_subtotal');
    let subtotal = 0;
    for (let index = 0; index < mainDishes.length; index++) {
       let resultEachDish = mainDishes[index].amount * mainDishes[index].price;
       subtotal += resultEachDish;
       showSubtotalCosts.innerHTML = subtotal.toFixed(2)+"€"; 
    }
    calculateTotalCosts(subtotal);
}

function calculateTotalCosts(subtotal){
    let showTotalCosts = document.getElementById('show_total_costs');
    let deliveryCosts = document.getElementById('delivery_costs');
    let totalCosts = 0
    if(subtotal >= 20.00){
        deliveryCosts.innerHTML = "0,00€";
        showTotalCosts.innerHTML = subtotal.toFixed(2) + "€";
    }
    else {
        deliveryCosts.innerHTML = "5,00€";
        totalCosts = subtotal + 5;
        showTotalCosts.innerHTML = totalCosts.toFixed(2)+'€';
    }
}

function toggleCart(){
    document.getElementById('id_content_main_wrapper').classList.toggle('content_main_wrapper');
    document.getElementById('id_main_cart_wrapper').classList.toggle('main_cart_wrapper');
    document.getElementById('id_cartwrapper').classList.toggle('d_none');
}

function saveToLocalStorage(){
    localStorage.setItem("mainDishes", JSON.stringify(mainDishes));
}

function loadFromLocalStorage(){
    let mainDishesArray = JSON.parse(localStorage.getItem("mainDishes"));
    if(mainDishesArray == null){
        mainDishesArray = mainDishes;
    }
    else{
        mainDishes = mainDishesArray;
    }
}