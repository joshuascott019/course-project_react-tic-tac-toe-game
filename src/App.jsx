import PlayerCard from './components/PlayerCard';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PlayerCard name="Player 1" symbol="X" />
          <PlayerCard name="Player 2" symbol="O" />
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}

export default App;
