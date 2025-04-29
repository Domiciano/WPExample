export function Card({ title, content, buttonText}) {
  const card = document.createElement('div'); //<div></div>
  card.className = 'card'; //<div class="card"></div>

  // Crear el título de la tarjeta
  const cardTitle = document.createElement('h2'); //<h2></h2>
  cardTitle.className = 'card-title'; //<h2 class="card-title"></h2>
  cardTitle.textContent = title;
  card.appendChild(cardTitle); //<div class="card"><h2 class="card-title"></h2></div>

  // Crear el contenido de la tarjeta
  const cardContent = document.createElement('p'); //<p></p>
  cardContent.className = 'card-content'; //<p class="card-content"></p>
  cardContent.textContent = content;
  card.appendChild(cardContent); //<div class="card"><h2 class="card-title"></h2><p class="card-content"></p></div>

  // Crear el botón de acción
  const button = document.createElement('button'); //<button></button>
  button.className = 'card-button'; //<button class="card-button"></button>
  button.textContent = buttonText;
  card.appendChild(button); //<div class="card"><h2 class="card-title"></h2><p class="card-content"></p><button class="card-button"></button></div>

  // Devolver la tarjeta completa
  return card;
}

export function CardList(cards) {
  // Crear el contenedor principal para la lista de tarjetas
  const cardListElement = document.createElement('div');
  cardListElement.className = 'card-list'; // Asignar la clase CSS para la lista

  cards.forEach(cardData => {
    const card = Card({
      title: cardData.title,       
      content: cardData.content,   
      buttonText: cardData.buttonText 
    });

    cardListElement.appendChild(card);
  });

  // Retornar el elemento con la lista completa de tarjetas
  return cardListElement;
}