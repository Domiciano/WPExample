export function Card({ content }) {
    const html = `
      <div class="card">
        ${content}
      </div>
    `;
    const wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    return wrapper.firstElementChild;
}

export function CardList(cards) {
    const cardListElement = document.createElement('div');
    cardListElement.className = 'card-list';

    cards.forEach(cardData => {
        const card = Card({ content: cardData.content });
        cardListElement.appendChild(card);
    });

    return cardListElement;
}