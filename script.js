// Inicialización de variables
let memory = 0; // Almacena el valor de la memoria
let currentInput = ''; // Almacena la entrada actual del usuario
let operator = ''; // Almacena el operador matemático seleccionado
let resultDisplayed = false; // Indica si se ha mostrado un resultado en la pantalla
let isOn = false; // Indica si la calculadora está encendida

// Espera a que el contenido del documento esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtiene referencias a los elementos de la pantalla y los botones
    const pantalla = document.getElementById('pantalla');
    const botones = document.querySelectorAll('.boton');

    // Añade eventos a los botones de encendido y apagado
    document.getElementById('on-btn').addEventListener('click', encender);
    document.getElementById('off-btn').addEventListener('click', apagar);

    // Añade eventos a los otros botones
    botones.forEach(boton => {
        if (boton.id !== 'on-btn' && boton.id !== 'off-btn') {
            boton.addEventListener('click', () => {
                if (!isOn) return; // Si la calculadora está apagada, no hacer nada

                // Selecciona la acción según el botón presionado
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

    // Función para encender la calculadora
    function encender() {
        pantalla.textContent = '0';
        isOn = true;
        habilitarBotones();
    }

    // Función para apagar la calculadora
    function apagar() {
        pantalla.textContent = '';
        isOn = false;
        deshabilitarBotones();
    }

    // Función para almacenar el valor de la pantalla en la memoria
    function memoryFunction() {
        memory = parseFloat(pantalla.textContent);
    }

    // Función para resetear la memoria
    function resetMemory() {
        memory = 0;
    }

    // Función para recuperar el valor almacenado en la memoria y mostrarlo en la pantalla
    function recoveryMemory() {
        pantalla.textContent = memory.toString();
    }

    // Función para ingresar números en la pantalla
    function ingresarNumero(num) {
        if (resultDisplayed) {
            pantalla.textContent = num;
            resultDisplayed = false;
        } else {
            pantalla.textContent === '0' ? pantalla.textContent = num : pantalla.textContent += num;
        }
    }

    // Función para calcular el porcentaje del valor actual en la pantalla
    function porcentaje() {
        pantalla.textContent = (parseFloat(pantalla.textContent) / 100).toString();
    }

    // Función para resetear la pantalla a '0'
    function errorCe() {
        pantalla.textContent = '0';
    }

    // Función para almacenar el operador de multiplicación y preparar el cálculo
    function multiplicar() {
        setOperator('X');
    }

    // Función para almacenar el operador de división y preparar el cálculo
    function dividir() {
        setOperator('/');
    }

    // Función para almacenar el operador de suma y preparar el cálculo
    function sumar() {
        setOperator('+');
    }

    // Función para almacenar el operador de resta y preparar el cálculo
    function restar() {
        setOperator('-');
    }

    // Función para realizar el cálculo basado en el operador almacenado
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

    // Función para configurar el operador matemático
    function setOperator(op) {
        if (!resultDisplayed) {
            currentInput = pantalla.textContent;
        }
        operator = op;
        pantalla.textContent = '';
    }

    // Función para habilitar los botones
    function habilitarBotones() {
        botones.forEach(boton => {
            if (boton.id !== 'on-btn' && boton.id !== 'off-btn') {
                boton.disabled = false;
            }
        });
    }

    // Función para deshabilitar los botones
    function deshabilitarBotones() {
        botones.forEach(boton => {
            if (boton.id !== 'on-btn' && boton.id !== 'off-btn') {
                boton.disabled = true;
            }
        });
    }

    // Inicialmente deshabilita los botones
    deshabilitarBotones();
});

