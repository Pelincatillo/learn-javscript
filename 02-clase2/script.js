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