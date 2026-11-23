function obtenerDatos(){
    //Tiene tres estados
    //Pending -> Se realizando la peticion
    //resolve/exito -> La peticion salio bien
    //reject/error -> algo salio mal 
    return new Promise((resolve, reject)=>{
        console.log("[obtenerDatos] Iniciando obtencion de datos ");
        
        setTimeout(()=>{
            let exito = true;
            if(exito){
                resolve("Datos obtenidos correctamente");
            }else{
                reject("Ocurrio un error al solicitar los datos")
            }
        }, 2000);
    })
}


//Consumo basico de promesa con .then() y .catch()

console.log("Iniciando obtencion de datos");
obtenerDatos()
    .then((resultado)=>{
        console.log("Resultado obtenido: " + resultado);
    })
    .catch((error)=>{
        console.log("Error: " + error);
    });


function buscarUsuario(){
    return new Promise((resolver, reject)=>{
        setTimeout(()=>{
            let exito = true;

            if(exito){
                let usuario = {
                    nombre: "benjamin",
                    edad: 20
                };

                resolve(usuario);
            }else{
                reject("No se pudo obtener el usuario");
            }
        }, 4000)
    })    
}


console.log("buscarUsuario con encadenamiento");

buscarUsuario()
    .then(usuario => {
        console.log("Usuario encontrado", usuario);
        //Retornar un valor aqui lo pasa al siguiente .then();
        return usuario.nombre.toUpperCase();
    })
    .then(nombreMayuscula => {
        console.log("Procesando nombre: ", nombreMayuscula)
    })
    .catch(error => {
        console.log("Error: ", error);
    })
    .finally(()=>{
        console.log("fin del flujo");
    });