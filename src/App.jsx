import { useState } from "react";
import phrases from "./assets/phrases.json";
import Phrase from "./components/Phrase/Phrase";
import { getRandomNumber } from "./utils/getRandom";
import Button from "./components/Button/Button";
import foods from "./assets/foods.json";

import "./App.css";
import peru1 from "./assets/peru1.jpg";
import peru2 from "./assets/peru2.jpg";
import peru3 from "./assets/peru3.jpg";
import peru4 from "./assets/peru4.jpg";
import Food from "./components/Food/Food";

const backgrounds = [peru1, peru2, peru3, peru4];

function App() {
  const getRandomPhrase = () => phrases[getRandomNumber(phrases.length - 1)];
  const getRandomBackground = () =>
    backgrounds[getRandomNumber(backgrounds.length - 1)];
  const getRandomFoods = () => foods[getRandomNumber(foods.length - 1)];

  const [phraseObject, setPhraseObject] = useState(getRandomPhrase());
  const [background, setBackground] = useState(getRandomBackground());
  const [food, setFood] = useState(getRandomFoods());

  const changePhrase = () => {
    let newPhrase = getRandomPhrase();
    while (newPhrase.phrase === phraseObject.phrase) {
      newPhrase = getRandomPhrase();
    }
    setPhraseObject(newPhrase);
  };

  const changeBackground = () => {
    let newBackground = getRandomBackground();
    while (newBackground === background) {
      newBackground === getRandomBackground();
    }
    setBackground(newBackground);
  };

  const changeFood = () => {
    let newFood = getRandomFoods();
    while (newFood.title === food.title) {
      newFood === getRandomFoods();
    }
    setFood(newFood);
  };

  const handlerClick = () => {
    changePhrase();
    changeBackground();
    changeFood();
  };

  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1>PERÚ</h1>
      <div className="main_container">
        <div className="container_app">
          <h2>FRASES CELEBRES PERUANAS</h2>
          <Phrase
            phrase={phraseObject.phrase}
            img={phraseObject.imgurl}
            author={phraseObject.author}
          />
        </div>
        <div className="btn_container">
          <Button handlerClick={handlerClick} />
        </div>
        <div className="container_app">
          <h2>GASTRONOMÍA PERUANA</h2>
          <Food
            url={food.url}
            description={food.description}
            title={food.title}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
