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
    'Medicine',
    'Prosciutto',
    'Yogurt'
];

let col = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e','f']

let color = '#'
let counter = 0;
while(counter < 6){
    let index = Math.floor(Math.random() * 15)
    color += col[index]
    console.log(color)
    counter++
}

counter = 0;
while (counter < lista.length){
    let addElement = document.createElement('li')
    addElement.innerHTML =`<div style="background-color: ${color}" ><label>${lista[counter]}</label></div>` 
    listaSpesa.append(addElement)
    counter++
}