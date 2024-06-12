async function listarProductos (){
    const conexion = await fetch('http://localhost:3001/Productos');

    const conexionConvertida = conexion.json();

    return conexionConvertida

    
}

export const conexionAPI = {
    listarProductos
}

listarProductos()