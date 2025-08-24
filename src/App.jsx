import "./App.css";
import emojipedia from "./emojipedia";
import Card from "./Card";

function App() {
  return (
    <>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map((char) => (
        <Card
          key={char.id}
          emoji={char.emoji}
          name={char.name}
          meaning={char.meaning}
        />
      ))}
    </>
  );
}

export default App;
