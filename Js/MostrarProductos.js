import { conexionAPI } from "./conexionAPI.js";
import { borrarProducto } from "./borrarProducto.js";

const ListaProductos = document.querySelector("[data-lista]");

function crearCard(nombre,img,precio,id){
    const producto = document.createElement("li");
    producto.className = "Contenedor-card";
    producto.id =`${id}`;
    producto.innerHTML = `<div class="card">
                                <img class="img-card" src="${img}" />
                                <div class="card-container--info">
                                    <p>${nombre}</p>
                                    <div class="card-container--value">
                                        <p>$ ${precio}</p>
                                        <img class="btnborrar" src="./IMG/🦆 icon _trash 2_.svg" data-borrar />
                                    </div>
                                </div>
                            </div>`;
                        

    
    /* const btnBorrar = producto.querySelector("[data-borrar]")

    btnBorrar.addEventListener("click", () => {
        producto.remove
        
    }); */

    return producto;
}





async function listarProductos(){
    const listaAPI =  await conexionAPI.listarProductos()

    listaAPI.forEach(producto=>ListaProductos.appendChild(crearCard(producto.nombre,producto.imagen,producto.precio )))

}

listarProductos()

