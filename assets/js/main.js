alert("Productos : Leche : 2$. Galletas : 5$. Chocolate : 4$.");

let product1 = "Leche";
let product2 = "Galletas";
let product3 = "Chocolate";
let price1 = 2;
let price2 = 5;
let price3 = 4;
let iva = 1.16;
let product = prompt("Selecciona entre nuestros productos :");

function products() {
    
    switch (product) {
        case product1:
            
            let resultado1 = price1 * iva;
            alert("Compraste " + product + " por " + resultado1 + "$");

            break;

        case product2:

            let resultado2 = price2 * iva;
            alert("Compraste " + product + " por " + resultado2 + "$");

            break;

        case product3:

            let resultado3 = price3 * iva;
            alert("Compraste " + product + " por " + resultado3 + "$");

            break;
    
        default:

            alert("No existe este producto");

            break;
    }

}

products(); 