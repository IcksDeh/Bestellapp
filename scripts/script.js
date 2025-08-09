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


