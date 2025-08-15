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
        for (let [arrayname, eachArray] of Object.entries(allDishes)) {
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

    // for (let index = 0; index < allDishes.length; index++) {
    //     let eachDishArray = allDishes[index];
    //     for (let index = 0; index < eachDishArray.length; index++) {
    //         const element = array[index];
            
    //     }
        
    // }

    for (let eachDish in allDishes) {
        let eachDishArray = allDishes[eachDish];
            
        for (let dish of eachDishArray){
            subtotal += dish.amount * dish.price;
        }
    }
    showSubtotalCosts.innerHTML = subtotal.toFixed(2)+'€';  
    calculateTotalCosts(subtotal);
    activateDiableOrderButton(subtotal);
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

function activateDiableOrderButton(subtotal){
        if(subtotal > 0){
            document.getElementById('id_button_set_order').disabled = false;
        }
        else{
            document.getElementById('id_button_set_order').disabled = true;
        }
}

function toggleCart(){
    document.getElementById('id_content_main_wrapper').classList.toggle('content_main_wrapper');
    document.getElementById('id_main_cart_wrapper').classList.toggle('main_wrapper');
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

function setAllDishesToZero(){
    for(let eachDishObject in allDishes){
        let eachDishArray = allDishes[eachDishObject];
        for (let eachDish of eachDishArray)
            eachDish.amount = 0; 
    }
    showDishInCart();
    saveToLocalStorage();
    showOverlay();
}

function showOverlay(){
    document.getElementById('show_order_overlay').classList.remove('d_none');
    document.getElementById('show_order_overlay').classList.add('order_overlay');
}

function closeOverlay(){
    document.getElementById('show_order_overlay').classList.remove('order_overlay');
    document.getElementById('show_order_overlay').classList.add('d_none');
}