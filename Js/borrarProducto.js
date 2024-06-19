import { conexionAPI } from "./conexionAPI";
const API = 'https://fake-api-jet-five.vercel.app/Productos';

async function borrarProducto(id ) {
    
    return await fetch(`https://fake-api-jet-five.vercel.app/Productos/${id}`,{
        method: "DELETE"
    });

    
}
export { borrarProducto }