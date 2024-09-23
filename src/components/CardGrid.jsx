import Card from "./Card";

const CardGrid = ({ cards, onCardClick }) => {
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          name={card.name}
          image={card.image}
          onClick={() => onCardClick(card.id)}
        />
      ))}
    </div>
  );
};

export default CardGrid;
