
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
let isOn = false;

document.addEventListener('DOMContentLoaded', () => {
    const pantalla = document.getElementById('pantalla');
    const botones = document.querySelectorAll('.boton');

    document.getElementById('on-btn').addEventListener('click', encender);
    document.getElementById('off-btn').addEventListener('click', apagar);

    botones.forEach(boton => {
        if (boton.id !== 'on-btn' && boton.id !== 'off-btn') {
            boton.addEventListener('click', () => {
                if (!isOn) return;

                switch (boton.id) {
                    case 'memory-btn':
                        memoryFunction();
                        break;
                    case 'reset-memory-btn':
                        resetMemory();
                        break;
                    case 'recovery-memory-btn':
                        recoveryMemory();
                        break;
                    case 'boton-0':
                        ingresarNumero('0');
                        break;
                    case 'boton-00':
                        ingresarNumero('00');
                        break;
                    case 'boton-1':
                        ingresarNumero('1');
                        break;
                    case 'boton-2':
                        ingresarNumero('2');
                        break;
                    case 'boton-3':
                        ingresarNumero('3');
                        break;
                    case 'boton-4':
                        ingresarNumero('4');
                        break;
                    case 'boton-5':
                        ingresarNumero('5');
                        break;
                    case 'boton-6':
                        ingresarNumero('6');
                        break;
                    case 'boton-7':
                        ingresarNumero('7');
                        break;
                    case 'boton-8':
                        ingresarNumero('8');
                        break;
                    case 'boton-9':
                        ingresarNumero('9');
                        break;
                    case 'boton-dot':
                        ingresarNumero('.');
                        break;
                    case 'boton-percent':
                        porcentaje();
                        break;
                    case 'boton-ce':
                        errorCe();
                        break;
                    case 'boton-mul':
                        multiplicar();
                        break;
                    case 'boton-div':
                        dividir();
                        break;
                    case 'boton-add':
                        sumar();
                        break;
                    case 'boton-sub':
                        restar();
                        break;
                    case 'boton-eq':
                        calcular();
                        break;
                }
            });
        }
    });

    function encender() {
        pantalla.textContent = '0';
        isOn = true;
        habilitarBotones();
    }

    function apagar() {
        pantalla.textContent = '';
        isOn = false;
        deshabilitarBotones();
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

    function ingresarNumero(num) {
        if (resultDisplayed) {
            pantalla.textContent = num;
            resultDisplayed = false;
        } else {
            pantalla.textContent === '0' ? pantalla.textContent = num : pantalla.textContent += num;
        }
    }

    function porcentaje() {
        pantalla.textContent = (parseFloat(pantalla.textContent) / 100).toString();
    }

    function errorCe() {
        pantalla.textContent = '0';
    }

    function multiplicar() {
        setOperator('X');
    }

    function dividir() {
        setOperator('/');
    }

    function sumar() {
        setOperator('+');
    }

    function restar() {
        setOperator('-');
    }

    function calcular() {
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

    function habilitarBotones() {
        botones.forEach(boton => {
            if (boton.id !== 'on-btn' && boton.id !== 'off-btn') {
                boton.disabled = false;
            }
        });
    }

    function deshabilitarBotones() {
        botones.forEach(boton => {
            if (boton.id !== 'on-btn' && boton.id !== 'off-btn') {
                boton.disabled = true;
            }
        });
    }

    // Inicialmente deshabilitar los botones
    deshabilitarBotones();
});
