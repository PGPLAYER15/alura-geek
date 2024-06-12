import { conexionAPI } from "./conexionAPI.js";

const ListaProductos = document.querySelector("[data-lista]");

function crearCard(nombre,img,precio){
    const producto = document.createElement("li");
    producto.className = "Contenedor-card";
    producto.innerHTML = `<div class="card">
                                <img class="img-card" src="${img}" />
                                <div class="card-container--info">
                                    <p>${nombre}</p>
                                    <div class="card-container--value">
                                        <p>$ ${precio}</p>
                                        <img src="./IMG/🦆 icon _trash 2_.svg" />
                                    </div>
                                </div>
                            </div>`;
                        

    return producto;
}



async function listarProductos(){
    const listaAPI =  await conexionAPI.listarProductos()

    listaAPI.forEach(producto=>ListaProductos.appendChild(crearCard(producto.nombre,producto.img,producto.precio )))

}

listarProductos()