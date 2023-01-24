
- Datos primitivos

    String = "cadena de texto";
    Number = 19;
    Boolean = false;


----------------------------------------------------------------------------------------------------------------------------

- Declarar variables como var, let, const


    - Manera antigua de declarar variables

        var numero = 15;

    - Nueva manera de declarar variables

        let numero = 15;

        const nombre = dalto;    No pueden cambiar su valor

    - Otras formas de crear variables

        let num, num2, num3; - Crear variable
        num = 29;  - Definir valor a la variable
        num2 = 12;
        num3 = 9;

        let number = null; - Variable vacia !== undefined

        let prueba = 5;
        let prueba2 = "Javier";

alert(prueba + prueba2) - Resultado ==> NaN === Not a Number

----------------------------------------------------------------------------------------------------------------------------

- Prompt

    let nombre = prompt('Dime tu nombre');
    alert('Hola ' + nombre);

----------------------------------------------------------------------------------------------------------------------------

- Operadores de Asignacion

    let numero = 10;

    - Basicos

        - numero += 5;    - Esto es lo mismo que hacer ==> numero = numero + 5; (Suma).
        - numero -= 5;    - Esto es lo mismo que hacer ==> numero = numero - 5; (Resta).
        - numero *= 5;    - Esto es lo mismo que hacer ==> numero = numero * 5; (Multiplicación).
        - numero /= 5;    - Esto es lo mismo que hacer ==> numero = numero / 5; (Division).

    - Avanzado (casi no se usa)

        - numero %= 5;    - Esto es lo mismo que hacer ==> numero = numero % 5; (Resto).
        - numero **= 5;   - Esto es lo mismo que hacer ==> numero = numero ** 5; (Exponenciación).
        - numero <<= 5;   - Esto es lo mismo que hacer ==> numero = numero << 5; (Desplazamiento a la izquierda).
        - numero >>= 5;   - Esto es lo mismo que hacer ==> numero = numero >> 5; (Desplazamiento a la derecha).
        - numero >>>= 5;  - Esto es lo mismo que hacer ==> numero = numero >>> 5; (Asignación sin signo desplazamiento a la derecha).
        - numero &= 5;    - Esto es lo mismo que hacer ==> numero = numero & 5; (AND).
        - numero ^= 5;    - Esto es lo mismo que hacer ==> numero = numero ^ 5; (XOR).
        - numero |= 5;    - Esto es lo mismo que hacer ==> numero = numero | 5; (OR).

alert(numero);


----------------------------------------------------------------------------------------------------------------------------

- Operadores Aritmeticos

    let numero1 = 10;
    let numero2 = 5;
    let resultado;

    - Basicos

        - resultado = numero1 + numero2   -Adición ==> Realizar una suma.
        - numero1--                       -Decremento ==> Restar 1 a numero1.
        - numero1++                       -Incremento ==> Sumar 1 a numero1.
        - resultado = numero1 & numero2   -Resto ==> Divide los 2 números y devuelve el resto de la división.
        - resultado = numero1 - numero2   -Sustraccion ==> Realiza una resta.

    - Avanzado (no se usa)

        - resultado = -numero1            - Negación unaria ==> Contrario del numero1(valor === 10) ==> -numero1(valor === -10).

alert(resultado);

----------------------------------------------------------------------------------------------------------------------------

- Concatenación 

    - Cadenas de texto

        - Forma 1


            let saludo = "Hola pedro";
            let pregunta = " ¿Como estas?";

            let frase = saludo + pregunta;


        - Forma 2


            let nombre = "Javier López";
            let frase = `soy ${nombre} y estoy caminando`;


    - Numeros

        - Forma 1


            let numero1 = 5;
            let numero2 = 8;

            let frase = "" + numero1 + numero2; // ==> Resultado === 58

    alert(frase);



----------------------------------------------------------------------------------------------------------------------------

- Operadores de comparación


    let numero = 23;
    let numero2 = 13;

    - Igualdad ==> usamos "= + =" (==).                 - Devuelve "true" si los dos campos son iguales.
    - Desigualdad ==> usamos "! + =" (!=).              - Devuelve "true" si los dos campos no son iguales.
    - Identidad ==> usamos "= + = + =" (===).           - Devuelve "true" si los dos campos del mismo TIPO son iguales.
    - No identidad ==> usamos "! + = + =" (!==).        - Devuelve "true" si los dos campos del mismo TIPO no son iguales. 
    - Mayor que ==> usamos ">".                         - Devuelve "true" si el primer campo es mayor que el segundo.
    - Mayor o igual que ==> usamos "> + =" (>=).        - Devuelve "true" si el primer campo es mayor o igual que el segundo.
    - Menor que ==> usamos "<".                         - Devuelve "true" si el primer campo es menor que el segundo.
    - Menor o igual que ==> "< + =" (<=).               - Devuelve "true" si el primer campo es menor o igual que el segundo.


alert(numero <= numero2);


----------------------------------------------------------------------------------------------------------------------------

- Operadores Lógicos


    let value1 = true;
    let value2 = true;

    - AND ==> "&&".             - Devuelve "true" si ambas condiciones son verdaderas.
    - OR ==> "||".              - Devuelve "true" si al menos una condicion es verdadera.
    - NOT ==> "!valor".         - Devuelve "true" si la condición es falsa.

alert(!value1);


----------------------------------------------------------------------------------------------------------------------------

- Condicionales

    - IF ==> Este condicional se ejecuta cuando la condición es "true".


        if (10 < 15) {
            alert('hola');
        }


    - Else ==> Este se ejecuta cuando el "if" es "false"


        if (10 > 15){
            alert('hola');
        }else{
            alert('adios');
        }


    - Else if ==> Este se ejecuta cuando el "if" anterior es "false" Y cuando el "if" que le sigue es "true"


        if (10 > 15){
            alert('hola');
        }else if (10 <= 15){
            alert('adios');
        }
