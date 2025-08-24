import "./App.css";
import emojipedia from "./emojipedia";
import Card from "./Card";

function createCard(char) {
  return (
    <Card
      key={char.id}
      emoji={char.emoji}
      name={char.name}
      meaning={char.meaning}
    />
  );
}

function App() {
  return (
    <>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createCard)}
    </>
  );
}

export default App;
