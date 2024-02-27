import PlayerCard from './components/PlayerCard';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PlayerCard initialName="Player 1" symbol="X" />
          <PlayerCard initialName="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
