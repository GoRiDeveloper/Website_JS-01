alert("Productos : Televisión : 250$. Celular : 500$. Monitor : 425$.");

let productA = prompt("Ingresa uno de nuestros productos :").toUpperCase();
let iva = [1.16];

class TBD {

    constructor(item, price) {

        this.item = item.toUpperCase();
        this.price = parseFloat(price);

    }

    extraIva() {

        this.price = this.price * iva;

    }

}

const product = [];
product.push(new TBD("Televisión", 250));
product.push(new TBD('Celular', 500));
product.push(new TBD('Monitor', 425));

for (const TBD of product)

TBD.extraIva();

function compra () {

    switch (productA) {
        case product[0].item:
            
            alert("Compraste " + product[0].item + " por " + product[0].price + " $");

            break;

        case product[1].item:

            alert("Compraste " + product[1].item + " por " + product[1].price + " $");

            break;

        case product[2].item:

            alert("Compraste " + product[2].item + " por " + product[2].price + " $");

            break;
    
        default:

            alert("No existe este producto");

            break;
    }

}

compra();