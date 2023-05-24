"use strict";

const listaSpesa = document.getElementById('lista-spesa');
let lista = [
    'Pane',
    'Latte',
    'Fiori',
    'Piatti di plastica',
    'Biscotti',
    'Uova',
    'Farina',
    'Medicine'
];

let counter = 0;

while (counter < lista.length){
    let addElement = document.createElement('li')
    addElement.innerHTML = lista[counter]
    listaSpesa.append(addElement)
    counter++
}