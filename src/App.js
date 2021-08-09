import { useState } from "react";

import "./styles.css";

const emojiDictionary = {
  "🙈": "See-No-Evil Monkey",
  "🙉": "Hear-No-Evil Monkey",
  "🙊": "Speak-No-Evil Monkey",
  "🐈": "Cat",
  "🦁": "Lion",
  "🐆": "Leopard",
  "🐪": "Camel",
  "🐘": "Elephant",
  "🦘": "Kangaroo",
  "🐿️": "Chipmunk",
  "🦦": "Olter",
  "🐧": "Penguin",
  "🐉": "Dragon"
};

var emojisWeKnow = Object.keys(emojiDictionary);
// console.log(emojisWeKnow);

export default function App() {
  function listItemClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  const [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "I don't recognize this :(";
    }

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Emojifier </h1>
      <div>
        <img className="icon happy" src="img/emoji.png" alt="happy-icon"></img>
        <img className="icon sad" src="img/sad.png" alt="sad-icon"></img>
        <img
          className="icon scared"
          src="img/scared.png"
          alt="scared-icon"
        ></img>
        <img
          className="icon shocked"
          src="img/shocked.png"
          alt="shocked-icon"
        ></img>
        <img className="icon smile" src="img/smile.png" alt="smile-icon"></img>
        <img
          className="icon thinking"
          src="img/thinking.png"
          alt="thinking-icon"
        ></img>

        <img
          className="icon surprised"
          src="img/surprised.png"
          alt="surprised-icon"
        ></img>
        <img className="icon wink" src="img/wink.png" alt="an-icon"></img>
      </div>
      <p className="text">
        Don't struggle to find the meaning of the emojis from now onwards. Head
        over to the search bar and search for the meaning of the emojis
      </p>
      <input onChange={inputChangeHandler}></input>
      <div className="meaning"> {meaning} </div>
      <p style={{ fontSize: "1.5rem", cursor: "pointer" }}></p>{" "}
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => listItemClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      <div style={{ margin: "2rem" }}></div>
    </div>
  );
}
