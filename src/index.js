import axios from 'axios';
import { CardList } from './components.js';

const cardsData = [
  { title:"Alfa", content: 'Card 1: Primera tarjeta', buttonText: 'Eliminar'},
  { title:"Beta", content: 'Card 2: Segunda tarjeta', buttonText: 'Eliminar'},
  { title:"Gamma", content: 'Card 3: Tercera tarjeta', buttonText: 'Eliminar'},
];

const cardList = CardList(cardsData);
document.body.appendChild(cardList);


const URL = 'https://pokeapi.co/api/v2/pokemon/15';

const obtenerPokemon = async () => {
  try {
    const response = await axios.get(URL);
    console.log('Datos recibidos:');
    console.log(response.data);
  } catch (error) {
    console.error('Error al hacer la solicitud:', error.message);
  }
};

// Llamar la función
obtenerPokemon();
