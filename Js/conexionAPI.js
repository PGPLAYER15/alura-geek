async function listarProductos (){
    const conexion = await fetch('http://localhost:3001/Productos');

    const conexionConvertida = conexion.json();

    return conexionConvertida

    
}

async function enviarProducto (nombre,precio,imagen,id){
    const conexion = await fetch('http://localhost:3001/Productos' , {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen,
            id:id
            
        })
    })
    const conexionConvertida = conexion.json();

    return conexionConvertida;

}

const borrarProducto = async (id)=>{
    const res = await fetch(`http://localhost:3001/Productos/${id}`,{
        method: "DELETE"
    });
    return res.json();
}




export const conexionAPI = {
    listarProductos , enviarProducto ,borrarProducto
}

listarProductos()