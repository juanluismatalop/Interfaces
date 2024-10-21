//g. Crea una función a la que le pasas un único objeto como parámetro con 5 propiedades cualesquiera,
//incluida la propiedad nombre y apellidos. Desestructura en la función la propiedad nombre y apellidos e imprime el nombre completo:

function imprimirNombreCompleto({ nombre = "Juan Luis", apellidos="Mata", telefono="+34333444666", email="juanluis@gmial.com"}) {
    const nombreCompleto = [nombre , apellidos]
    console.log(nombreCompleto);
    console.log(telefono);
    console.log(email);
}
