
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

class calculadora{
    constructor() {
        this.encendida = false;
        this.pantalla = "";
        this.memoria = 0;
        this.operacionActual = "";
    }

    encender() {
        this.encendida = true;
        this.pantalla = "";
        this.actualizarPantalla();
    }

    apagar() {
        this.encendida = false;
        this.pantalla = "";
        this.memoria = 0;
        this.operacionActual = "";
        this.actualizarPantalla();
    }

}

