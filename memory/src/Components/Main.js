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

  const [clickedCard, setClickedCard] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setbestScore] = useState(0);

  useEffect(() => {
    setCards(shuffle([...card]));
  }, []);

  useEffect(() => {
    console.log(clickedCard);
  }, [clickedCard]);

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

  const gameOver = () => {
    setbestScore(score);
    setClickedCard([]);
    setScore(0);
    alert("You have lost");
  };

  const cardClick = (id, e) => {
    setCards(shuffle([...card]));

    const clicked = card.find(card => card.id === id);

    !clickedCard.includes(clicked)
      ? setClickedCard(oldArray => [...oldArray, clicked], setScore(score + 1))
      : gameOver();
  };

  return (
    <div>
      <h1>
        Current score: {score}
        <br />
        Best score: {bestScore}
      </h1>

      <Card card={card} cardClick={cardClick} />
    </div>
  );
}

export default Main;
