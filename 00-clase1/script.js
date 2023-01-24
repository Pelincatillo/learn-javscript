/* 
Ejercicio:

3 chicos de 23 años entran a una heladería a comprar un helado pero hay un problema: los precios no están al lado de cada estante con su
respectivo helado.
Ellos quieren comprar el helado más caro que puedan con el dinero que tienen, asi que veamos como podemos ayudarlos.

Roberto tiene $1.5 USD
Pedro tiene $1.7 USD
Cofla tiene $3 USD

Los precios de los helados son los siguientes:

    - Palito de helado de agua:         $0.6 USD
    - Palito de helado de crema:        $1.0 USD
    - Bombón helado marca heladix:      $1.6 USD
    - Bombón helado marca heladovich:   $1.7 USD
    - Bombón helado marca helardo:      $1.8 USD
    - Potecito de helado con confites:  $2.9 USD
    - Pote de 1/4 KG:                   $2.9 USD

CREAR SOLUCIONES: 

    - Pedirles que ingresen el monto que tienen y mostrarle el helado más caro que puedan comprar
    - Si hay 2 o más con el mismo precio mostrar ámbos.
    - Cofla quiere saber cuanto es el vuelto

*/

let dineroRoberto = prompt('¿Cuanto dinero tienes Roberto?');
let dineroPedro = prompt('¿Cuanto dinero tienes Pedro?');
let dineroCofla = prompt('¿Cuanto dinero tienes Cofla?');

// Roberto

if (dineroRoberto >= 0.6 && dineroRoberto < 1){
    alert('Roberto puedes comprar el helado de agua');
} else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert('Roberto puedes comprar el helado de crema');
} else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert('Roberto puedes comprar el bombón de helado marca heladix');
} else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert('Roberto puedes comprar el bombón de helado marca heladovich');
} else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert('Roberto puedes comprar el bombón helado marca helardo');
} else if (dineroRoberto >= 2.9) {
    alert('Roberto puedes comprar el potecito de heldo con confites o el pote de 1/4 KG');
} else {
    alert('Roberto no tienes dinero suficiente para comprar un helado');
}

// Pedro

if (dineroPedro >= 0.6 && dineroPedro < 1){
    alert('Pedro puedes comprar el helado de agua');
} else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert('Pedro puedes comprar el helado de crema');
} else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert('Pedro puedes comprar el bombón de helado marca heladix');
} else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert('Pedro puedes comprar el bombón de helado marca heladovich');
} else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert('Pedro puedes comprar el bombón helado marca helardo');
} else if (dineroPedro >= 2.9) {
    alert('Pedro puedes comprar el potecito de heldo con confites o el pote de 1/4 KG');
} else {
    alert('Pedro no tienes dinero suficiente para comprar un helado');
}

// Cofla

let vuelta = null;

if (dineroCofla >= 0.6 && dineroCofla < 1){
    alert('Cofla puedes comprar el helado de agua');
    vuelta = dineroCofla - 0.6;
    alert(`Las vueltas de cofla son $${vuelta} USD`)
} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert('Cofla puedes comprar el helado de crema');
    vuelta = dineroCofla - 1;
    alert(`Las vueltas de cofla son $${vuelta} USD`)
} else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert('Cofla puedes comprar el bombón de helado marca heladix');
    vuelta = dineroCofla - 1.6;
    alert(`Las vueltas de cofla son $${vuelta} USD`)
} else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert('Cofla puedes comprar el bombón de helado marca heladovich');
    vuelta = dineroCofla - 1.7;
    alert(`Las vueltas  de cofla son $${vuelta} USD`)
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert('Cofla puedes comprar el bombón helado marca helardo');
    vuelta = dineroCofla - 1.8;
    alert(`Las vueltas de cofla son $${vuelta} USD`)
} else if (dineroCofla >= 2.9) {
    alert('Cofla puedes comprar el potecito de heldo con confites o el pote de 1/4 KG');
    vuelta = dineroCofla - 2.9;
    alert(`Las vueltas de cofla son $${vuelta} USD`)
} else {
    alert('Cofla no tienes dinero suficiente para comprar un helado');
}