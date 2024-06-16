import { conexionAPI } from "./conexionAPI";
const API = 'http://localhost:3001/Productos';

async function borrarProducto(id) {
    return await fetch(`http://localhost:3001/Productos/${id}`,{
        method: "DELETE"
    });

    
}
export { borrarProducto }