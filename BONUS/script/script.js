"use strict";

const listaSpesa = document.getElementById('lista-spesa');
let lista = [
    'Pane',
    'Latte',
    'Fiori',
    'Piatti di plastica',
    'Biscotti',
    'Tritolo',
    'Meth'
];

let col = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e','f']

let counter = 0;

while (counter < lista.length){
    let addElement = document.createElement('li')
    let color = '#'
    for(let i = 0; i < 6;i++){
        let index = Math.floor(Math.random() * 15)
        color += col[index]
    }
    addElement.innerHTML =`<div style="color: ${color}" >${lista[counter]} colore:${color}</div>` 
    listaSpesa.append(addElement)
    console.log(color)
    counter++
}