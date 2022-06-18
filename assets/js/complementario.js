alert("Haz click en 'Productos Nuevos :' para agregar un nuevo producto para vender :)");

let producto = { price : 'price', desc : 'desc' }

const boxProd = document.getElementById("newprod");
const et = document.getElementById("tit");
const info = [];

et.addEventListener("click", () => {

    infoProd()
    element()

});

function infoProd () {

    if (info) {
        
        let producto = { price : 'price', desc : 'desc' }
        
        producto.price = prompt("Ingresa el precio de tu producto :");
        producto.desc = prompt("Ingresa la descripción de tu producto :");

        info.push(producto);

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
                <h3> ${info[0]} $ </h3>
            </a>

            <p> ${info[1]} </p>
            <button id="prod-1" class="anim-btn add"> Añadir al Carrito </button>

        </div>
    
    `;

    agg.className = "box__prod";
    boxProd.append(agg);

}
