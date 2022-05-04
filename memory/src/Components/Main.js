import React, { useState, useEffect } from "react";
import Card from "./Card";
function Main() {
  const [card, setCards] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ]);

  useEffect(() => {
    setCards(shuffle([...card]));
    console.log(card);
  }, []);

  const shuffle = arra1 => {
    let ctr = arra1.length,
      temp,
      index;
    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
    }
    return arra1;
  };

  const cardClick = (id, e) => {
    setCards(shuffle([...card]));
  };

  return (
    <div>
      {card.id}
      <Card card={card} cardClick={cardClick} />
    </div>
  );
}

export default Main;
