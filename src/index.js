import axios from 'axios';
import { CardList } from './components.js';

const cardsData = [
  { title:"Alfa", content: 'Card 1: Primera tarjeta', buttonText: 'Eliminar'},
  { title:"Beta", content: 'Card 2: Segunda tarjeta', buttonText: 'Eliminar'},
  { title:"Gamma", content: 'Card 3: Tercera tarjeta', buttonText: 'Eliminar'},
];

const cardList = CardList(cardsData);
document.body.appendChild(cardList);


axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log('Datos obtenidos:', response.data);
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });
