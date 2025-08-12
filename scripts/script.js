function renderFunction() {
    loadFromLocalStorage();
    renderDish('main_dish', 'mainDishes');
    renderDish('side_dish', 'sideDishes');
    renderDish('drinks', 'drinks');
    renderDish('dessert', 'desserts');
    // renderMainDishInCartTemplate();
     
    // showMainDishInCart();
}

function renderDish(id, arrayname){
    let DishContent = document.getElementById('show_'+id);
    let array = allDishes[arrayname];
    DishContent.innerHTML = '';

    for (let dishIndex = 0; dishIndex < array.length; dishIndex++) {
        DishContent.innerHTML += dishTemplate(array, dishIndex, arrayname);
    }
}

function addDishToCart(array, dishIndex){
    array[dishIndex].amount += 1;
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
        for (let index = 0; index < allDishes.length; index++) {
            if(allDishes[index].amount >= 1){
                showCartContent.innerHTML += showMainDishInCartTemplate(array,index);
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