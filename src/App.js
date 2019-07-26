const randomDie = () => Math.ceil(Math.random() * 6);

const newHand = () =>
  Array(6)
    .fill(null)
    .map(() => randomDie());

function App() {
  return (
    <div>
      <header>
        <h1>Farkle</h1>
      </header>
    </div>
  );
}

export default App;
