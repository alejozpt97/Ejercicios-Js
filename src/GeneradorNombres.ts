function GeneradorNombresUsiarios(nombre:string, apellido:string):string{
   
    const nombreParte = nombre.slice(0,3).toLowerCase()
    const apellidoParte = apellido.slice(0,3).toLowerCase()
    const numeroAleatorio = Math.floor (Math.random() * 900 + 1)
    
    const nombreUsuario = `${nombreParte}${apellidoParte}${numeroAleatorio}`

    return nombreUsuario
}
 
const nombre: string = "Joseph"
const apellido: string = "Zapata"

const NombreUsuario:string = GeneradorNombresUsiarios(nombre,apellido)

console.log(`Nombre De Usuario Generado: ${NombreUsuario}`)
