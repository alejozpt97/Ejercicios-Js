// Definimos el tipo de Contacto
type Contacto = {
    [nombre: string]: string;
};

// Creamos la agenda telefónica como un objeto vacío inicialmente
let agendaTelefonica: Contacto = {};

// Función para añadir un contacto a la agenda
function añadirContacto(nombre: string, numero: string): void {
    agendaTelefonica[nombre] = numero;
}

// Añadimos algunos contactos a la agenda
añadirContacto("Juan Perez", "123-456-7890");
añadirContacto("Ana Gomez", "234-567-8901");
añadirContacto("Luis Fernandez", "345-678-9012");

// Variable que almacena el nombre de un contacto para buscar
let nombreABuscar: string = "Ana Gomez";

// Función para buscar un contacto en la agenda
function buscarContacto(nombre: string): void {
    if (agendaTelefonica[nombre]) {
        console.log(`El número de teléfono de ${nombre} es ${agendaTelefonica[nombre]}`);
    } else {
        console.log("El contacto no se encontró");
    }
}

// Buscamos el contacto
buscarContacto(nombreABuscar);