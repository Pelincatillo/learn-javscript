
- Arrays

    - Definición: los arrays son un almacen de datos y cada uno de estos datos se les asigna un índice para poder identificarlos, el primer índice que se asigna es el 0 y aumenta de 1 en 1.

    - Asignación: frutas = ["banana", "manzana", "pera", 5, 9, "pedro"];

    document.write(frutas[5]); Resultado = "pedro" ==> Los arrays empiezan desde la posicion "0"

- Array asociativo

    - Definicion: son arrays cuyos índices se les asignan nombres

    - Asignación: let pc = { nombre: "DaltoPC", procesador: "Intel Core i7", ram: "16GB", espacio: "1TB" };

    document.write(pc["nombre"]);

    - Ejemplos:

    /*
    let pc = {
    nombre: "DaltoPC",
    procesador: "Intel Core i7",
    ram: "16GB",
    espacio: "1TB"
    };

    let nombre = pc["nombre"];
    let procesador = pc["procesador"];
    let ram = pc["ram"];
    let espacio = pc["espacio"];

    frase = `El nombre de mi PC es: ${nombre} <br>
             El procesador es: ${procesador} <br>
             La memoria ram es: ${ram} <br>
            El espacio en disco es: ${espacio}`;

    document.write(frase); 
    */

