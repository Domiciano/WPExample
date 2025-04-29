import axios from 'axios';
import { CardList } from './components.js';

const cardsData = [
  { content: 'Card 1: Primera tarjeta' },
  { content: 'Card 2: Segunda tarjeta' },
  { content: 'Card 3: Tercera tarjeta' },
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
