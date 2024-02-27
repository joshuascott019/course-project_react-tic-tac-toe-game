import PlayerCard from './components/PlayerCard';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PlayerCard initialName="Player 1" symbol="X" />
          <PlayerCard initialName="Player 2" symbol="O" />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
