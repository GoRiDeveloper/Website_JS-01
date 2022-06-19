alert("Haz click en 'Productos Nuevos :' para agregar un nuevo producto para vender :)");

const boxProd = document.getElementById("newprod");
const et = document.getElementById("tit");
const info = [];

et.addEventListener("click", () => {

    infoProd()
    element(info)

});

function infoProd () {

    if (info) {
        
        let producto = { price : 'price', desc : 'desc' }
        
        producto.price = prompt("Ingresa el precio de tu producto :");
        producto.desc = prompt("Ingresa la descripción de tu producto :");

        info.push(producto);

    }

}

function element (b) {

    boxProd.innerHTML = "";
    
    b.forEach(e => {
    
        let agg = document.createElement("div");
    
        agg.className = "box__prod";

        agg.innerHTML = `
    
            <div class="box__prod-img">

                <a href="#">
                    <img src="./assets/img/prod-white.jpg" alt="prod">
                </a>

            </div>

            <div class="box__prod-info">

                <a href="#">
                    <h3> ${e.price} $ </h3>
                </a>

                <p> ${e.desc} </p>
                <button id="prod-1" class="anim-btn add"> Añadir al Carrito </button>

            </div>
    
        `;
    
        boxProd.append(agg);
    
    } );

}
