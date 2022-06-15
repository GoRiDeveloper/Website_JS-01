alert("Haz click en 'Productos Nuevos :' para agregar un nuevo producto para vender :)");

const boxProd = document.getElementById("newprod");
const et = document.getElementById("tit");
const info = [];


et.addEventListener("click", () => {

    infoProd()
    element()

});

function infoProd () {

    if (info) {
        
        let productPrice = prompt("Ingresa el precio de tu producto :");
        let productName = prompt("Ingresa la descripción de tu producto :");

        info.push(productPrice);
        info.push(productName);

    }

}

function element () {

    let agg = document.createElement("div");

    agg.innerHTML = `
    
        <div class="box__prod-img">

            <a href="#">
                <img src="./assets/img/prod-white.jpg" alt="prod">
            </a>

        </div>

        <div class="box__prod-info">

            <a href="#">
                <h3> ${info[0]} </h3>
            </a>

            <p> ${info[1]} </p>
            <button id="prod-1" class="anim-btn add"> Añadir al Carrito </button>

        </div>
    
    `;

    agg.className = "box__prod";
    boxProd.append(agg);

}