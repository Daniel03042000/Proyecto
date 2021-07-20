/*Es un metodo de la interfaz de elemento, en donde permite encontrar el primer elemento
que coincida con los selectores de css*/
let screen = document.querySelector('#screen-result');

function getData(ref){
    /*Toma el valor de referencia que se oprima */
    let value = ref.value;
    /*Toma el valor de referencia y lo acumula en el espacio de la pantalla*/
    screen.value += value;
}

function clean(){
    /*Pone el texto vacio */
    screen.value = "";
}

function calculate(){
    try{
        /*Calcula los valores*/
        screen.value = eval(screen.value)
        /*Captura cualquier error y resetea el conteo con la funcion clean*/
    } catch (error) {
        screen.value = "Error";
        setTimeout (() => {
            clean()
        }, 500);
    }
}