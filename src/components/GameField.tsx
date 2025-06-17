import React from "react";
import type { Player } from "../types/player";
import "./GameField.css";

interface Props {
  players: Record<string, Player>;
}

export const GameField: React.FC<Props> = ({ players }) => {
  return (
    <div className="game-container">
      <div className="instructions">
        <h2>How to Play</h2>
        <ul>
          <li>Use <kbd>W</kbd> to move up</li>
          <li>Use <kbd>S</kbd> to move down</li>
          <li>Use <kbd>A</kbd> to move left</li>
          <li>Use <kbd>D</kbd> to move right</li>
          <li>Move around and see other players in real-time!</li>
        </ul>
      </div>
      <div className="game-field">
        {Object.values(players).map(player => (
          <div
            key={player.id}
            className="player"
            style={{
              left: player.x,
              top: player.y,
            }}
          >
            <div
              className="player-pixel"
              style={{
                backgroundColor: player.color,
              }}
            />
            <div className="player-name">{player.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
