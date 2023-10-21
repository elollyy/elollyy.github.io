const prices = {
    "hair_drying": 1200,
    "nail_ext": {
        1: 600,
        2: 1400,
        3: 2300
    },
    "eyebrow_removal": {
        "minimal": 1800,
        "full": 3600
    }
};

function calculatePrice() {
    let product = document.getElementById('selectProduct');
    let count = document.getElementById('inputCount');
    let display = document.getElementById('display-calculator');

    if (/^\d+$/.test(count.value)) {
        display.value = parseInt(product.value) * parseInt(count.value);
    } else {
        alert("Для ввода нужно указывать числа!")
    }
};

function update() {
    let radio = document.querySelector('input[name = radioList]:checked');
    let select = document.getElementById('selectWidth');
    let chbox = document.getElementById('checkFull');
    let chbox_div = document.getElementById('checkboxFull');
    let countProduct = document.getElementById('fullPrice');
    let display = document.getElementById('calc-display');

    if (!(/^\d+$/.test(countProduct.value))) {
        alert("Укажите число!");
        return; 
    }

    switch (radio.value) {
        case "1":
            select.style.display = "none";
            chbox_div.style.display = "none";

            display.value = prices['hair_drying'] * parseInt(countProduct.value);

            break;
        case "2":
            select.style.display = "block";
            chbox_div.style.display = "none";

            display.value = prices['nail_ext'][parseInt(select.value)] * parseInt(countProduct.value);

            break;
        case "3":
            select.style.display = "none";
            chbox_div.style.display = "block";

            if (chbox.checked) {
                display.value = prices['eyebrow_removal']['minimal'] * parseInt(countProduct.value);
            } else {
                display.value = prices['eyebrow_removal']['full'] * parseInt(countProduct.value);
            }

            break;
        default:
            console.log("ошибка");
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded and parsed");

    let radios = document.getElementsByName('radioList');
    radios.forEach((e) => {
        e.addEventListener("change", update);
    });

    let checkbox = document.getElementById('checkFull');
    checkbox.addEventListener("change", update);

    let select = document.getElementById('selectWidth');
    select.addEventListener("change", update);

    let countProduct = document.getElementById('fullPrice');
    countProduct.addEventListener("change", update)
});

update();