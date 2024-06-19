import { conexionAPI } from "./conexionAPI";
const API = 'https://api-fake-seven.vercel.app/Productos';

async function borrarProducto(id ) {
    
    return await fetch(`https://api-fake-seven.vercel.app/Productos/${id}`,{
        method: "DELETE"
    });

    
}
export { borrarProducto }