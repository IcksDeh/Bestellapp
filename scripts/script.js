function renderFunction() {
    loadFromLocalStorage();
    renderDish('main_dish', 'mainDishes');
    renderDish('side_dish', 'sideDishes');
    renderDish('drinks', 'drinks');
    renderDish('dessert', 'desserts');
    showDishInCart();
}

function renderDish(id, arrayname){
    let DishContent = document.getElementById('show_'+id);
    let array = allDishes[arrayname];
    DishContent.innerHTML = '';

    for (let dishIndex = 0; dishIndex < array.length; dishIndex++) {
        DishContent.innerHTML += dishTemplate(arrayname, dishIndex, array);
    }
}

function addDishToCart(arrayname, dishIndex){
    let array = allDishes[arrayname];
    array[dishIndex].amount += 1;
    showDishInCart();
    saveToLocalStorage();
}

function reduceDishInCart(arrayname, dishIndex){
    let array = allDishes[arrayname];
    if(array[dishIndex].amount >=1){
        array[dishIndex].amount -= 1;
        saveToLocalStorage();
        showDishInCart();
    }
}

function showDishInCart(){
    let showCartContent = document.getElementById('cart_content_wrapper');
    showCartContent.innerHTML = "";
        for (let [arrayname, eachArray ] of Object.entries(allDishes)) {
            for (let dishIndex = 0; dishIndex < eachArray.length; dishIndex++) {
                if(eachArray[dishIndex].amount >= 1){
                showCartContent.innerHTML += showDishInCartTemplate(arrayname, eachArray, dishIndex);
                };
            }  
        }
    calculateSubtotalCosts();
}

function setDishToZero(arrayname, dishIndex){
    let array = allDishes[arrayname]
    array[dishIndex].amount = 0;
    saveToLocalStorage();
    showDishInCart();
}

function calculateSubtotalCosts(){
    let showSubtotalCosts = document.getElementById('show_subtotal');
    let subtotal = 0;

    for (let arrayName in allDishes) {
        let eachArray = allDishes[arrayName];
            
        for (let dish of eachArray){
            subtotal += dish.amount * dish.price;
        }
    }
    showSubtotalCosts.innerHTML = subtotal.toFixed(2)+'€';  
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
    localStorage.setItem("allDishes", JSON.stringify(allDishes));
}

function loadFromLocalStorage(){
    let allDishesArray = JSON.parse(localStorage.getItem("allDishes"));
    if(allDishesArray == null){
        allDishesArray = allDishes;
    }
    else{
        allDishes = allDishesArray;
    }
}