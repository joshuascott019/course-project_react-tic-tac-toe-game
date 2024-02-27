export default function PlayerCard({ name, symbol }) {
  return (
    <li>
      <span>
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
}
