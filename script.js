
// ON: Encendido de la calculadora. 
//Si no está encendida, no se visualiza nada en
//la pantalla aunque haya interacciones con los demás botones.
//function encender();

// OFF:Apagado de la calculadora. Elimina los datos de la visualización por la
// pantalla, además debe de resetear los datos.
// Function reset();

// M+
//  Ingresa el número que está en la pantalla a la memoria de la calculadora.
// function memory();

// MC
// Elimina los datos guardados en la memoria de la calculadora.
//function resetMemory();

// MR
// Recupera los datos de la memoria y los visualiza en la pantalla.
// function recoveryMemory();

// CE
// Elimina el número mostrado en la pantalla. Se utiliza cuando se comete un
// error en el ingreso de datos pero sin eliminar el cálculo realizado.
// function  errorCe()

//  Botones números
//  Visualización de cada uno de ellos por pantalla.
//1,2,3,4,5,6,7,8,9
// Botones operaciones
// + , - , * , / , % 
//sumar function sumar()
//restar function restar()
//multiplicar function multiplicar()
//dividir function dividir()
//porcentaje function porcentaje()
// Visualización del carácter por pantalla.
// Botón igual ( = )
// Realiza la operación que se muestra por pantalla, limpia la pantalla y
// visualiza el resultado.
//function calcular()


let memory = 0;
let currentInput = '';
let operator = '';
let resultDisplayed = false;

document.addEventListener('DOMContentLoaded', () => {
    const pantalla = document.getElementById('pantalla');

    document.getElementById('on-btn').addEventListener('click', encender);
    document.getElementById('memory-btn').addEventListener('click', memoryFunction);
    document.getElementById('reset-memory-btn').addEventListener('click', resetMemory);
    document.getElementById('recovery-memory-btn').addEventListener('click', recoveryMemory);
    document.getElementById('off-btn').addEventListener('click', apagar);

    function encender() {
        pantalla.textContent = '0';
    }

    function memoryFunction() {
        memory = parseFloat(pantalla.textContent);
    }

    function resetMemory() {
        memory = 0;
    }

    function recoveryMemory() {
        pantalla.textContent = memory.toString();
    }

    function apagar() {
        pantalla.textContent = '';
    }

    window.ingresarNumero = function(num) {
        if (resultDisplayed) {
            pantalla.textContent = num;
            resultDisplayed = false;
        } else {
            pantalla.textContent === '0' ? pantalla.textContent = num : pantalla.textContent += num;
        }
    }

    window.porcentaje = function() {
        pantalla.textContent = (parseFloat(pantalla.textContent) / 100).toString();
    }

    window.errorCe = function() {
        pantalla.textContent = '0';
    }

    window.multiplicar = function() {
        setOperator('X');
    }

    window.dividir = function() {
        setOperator('/');
    }

    window.sumar = function() {
        setOperator('+');
    }

    window.restar = function() {
        setOperator('-');
    }

    window.calcular = function() {
        if (operator && currentInput) {
            let result;
            switch (operator) {
                case '+':
                    result = parseFloat(currentInput) + parseFloat(pantalla.textContent);
                    break;
                case '-':
                    result = parseFloat(currentInput) - parseFloat(pantalla.textContent);
                    break;
                case 'X':
                    result = parseFloat(currentInput) * parseFloat(pantalla.textContent);
                    break;
                case '/':
                    result = parseFloat(currentInput) / parseFloat(pantalla.textContent);
                    break;
                default:
                    return;
            }
            pantalla.textContent = result.toString();
            currentInput = '';
            operator = '';
            resultDisplayed = true;
        }
    }

    function setOperator(op) {
        if (!resultDisplayed) {
            currentInput = pantalla.textContent;
        }
        operator = op;
        pantalla.textContent = '';
    }
});


