// insercion de contacto:
const prompt=require("prompt-sync")({sigint:true});
const fs = require('fs');
let contactos = JSON.parse(fs.readFileSync('contactos.json'));
function mostrarMenu() {
  let opcion;
  do {
      opcion = prompt(
          "Seleccione una opción:\n" +
          "1. NUEVO CONTACTO\n" +
          "2. VISUALIZAR AGENDA\n" +
          "3. BUSQUEDA DE CONTACTO\n" +
          "4. MODIFICAR\n" +
          "5. ELIMINAR\n" +
          "6. ORDENAR\n" +
          "7. Salir:  "
          
      );

      switch (opcion) {
          case '1':
              console.log("Has seleccionado la Opción 1: ");
              nombre = prompt("inserte un nombre: ");
              telefono1 = prompt("inserte un numero telefonico: ")
              telefono = parseInt(telefono1)
            if (telefono1 >= 10) {
              insertarContacto(nombre , telefono);
              console.log(contactos);} else {
                console.log("escribe un numero valido de mas de 10 digitos")
              }
              break
      
          case '2':
              console.log("Has seleccionado la Opción 2");
              console.log(contactos);
              break;
          case '3':
              console.log("Has seleccionado la Opción 3");
              let nombreBuscado = prompt('Ingrese un nombre para buscar en la agenda: ');
              let personaEncontrada = contactos.find(contacto => contacto.nombre.toLowerCase() === nombreBuscado.toLowerCase());
                if (personaEncontrada) {
                    console.log(`Se encontró a ${personaEncontrada.nombre}, que tiene este numero:  ${personaEncontrada.telefono}.`);
                } else {
                    console.log('No se encontró a la persona.');
                }
              break;
          case '4':
              console.log("Has seleccionado MODIFICAR CONTACTO: ");
              modificarContacto();
              break;
          case '5':
              console.log("Has seleccionado ELIMINAR CONTACTO: ");
              eliminarContacto();
              break;
          case '6':
              console.log("Has seleccionado ORDENAR AGENDA: ");
              ordenarAgenda();
              break;
          case '7':
              console.log("Saliendo del menú...");
              break;

          default:
              console.log("Opción no válida. Inténtelo de nuevo.");
              break;
      }
  } while (opcion !== '7');
}
mostrarMenu();

function insertarContacto (nombre, telefono) {
    let nuevoContacto = {
      nombre : nombre,
      telefono : telefono,
    }
  contactos.push(nuevoContacto)
  fs.writeFileSync('contactos.json', JSON.stringify(contactos));
  console.log(contactos)
}


function modificarContacto (nombreBuscado) {
nombreBuscado = prompt ("escriba el nombre del contacto que desea modificar: ");
let indiceContacto = contactos.findIndex(contacto => contacto.nombre.toLowerCase() === nombreBuscado.toLowerCase());
if (indiceContacto !== -1) {
  // Solicitar los nuevos datos del contacto
  let nuevoNombre = prompt(`Ingrese el nuevo nombre para ${contactos[indiceContacto].nombre}:`, contactos[indiceContacto].nombre);
  let nuevoTelefono1 = prompt(`Ingrese el nuevo teléfono para ${contactos[indiceContacto].nombre}:`, contactos[indiceContacto].telefono);
  let nuevoTelefono = parseInt(nuevoTelefono1)
  contactos[indiceContacto].nombre = nuevoNombre;
  contactos[indiceContacto].telefono = nuevoTelefono;
  fs.writeFileSync('contactos.json', JSON.stringify(contactos));
  console.log("Contacto actualizado correctamente")
}else {
  console.log("no se encuentra el contacto buscado." )
}
}

function eliminarContacto (nombreBuscado) {
  nombreBuscado = prompt ("escriba el nombre del contacto que desea eliminar: ");
  let indiceContacto = contactos.findIndex(contacto => contacto.nombre.toLowerCase() === nombreBuscado.toLowerCase());
  if (indiceContacto !== -1) {
    // Solicitar los nuevos datos del contacto
    let contactoEliminado = contactos.splice(indiceContacto, 1)[0];
    console.log(`Contacto eliminado: ${contactoEliminado.nombre}, Teléfono: ${contactoEliminado.telefono}`);
    fs.writeFileSync('contactos.json', JSON.stringify(contactos));
  }else {
    console.log("no se encuentra el contacto buscado." )
  }
}

function ordenarAgenda () {
  // Ordenar la agenda alfabéticamente por el nombre
  contactos.sort((a, b) => a.nombre.localeCompare(b.nombre));

  // Mostrar la agenda ordenada
  console.log(contactos);
}