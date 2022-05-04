function Card(props) {
  const { card, cardClick } = props;
  return (
    <div>
      {card.map(card => {
        return <h1 onClick={e => cardClick(card.id, e)}>{card.id}</h1>;
      })}
    </div>
  );
}

export default Card;
