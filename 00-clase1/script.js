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

if (dineroCofla >= 0.6 && dineroCofla < 1){
    alert('Puedes comprar el helado de agua');
} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert('Puedes comprar el helado de crema');
} else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert('Puedes comprar el bombón de helado marca heladix');
} else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert('Puedes comprar el bombón de helado marca heladovich');
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert('Puedes comprar el bombón helado marca helardo');
} else{
    alert('Puedes comprar el potecito de heldo con confites y el pote de 1/4 KG');
}