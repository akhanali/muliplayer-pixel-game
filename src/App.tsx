import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { db } from "./services/firebase";
import { ref, set, onDisconnect } from "firebase/database";
import { GameField } from "./components/GameField";
import { NicknameInput } from "./components/NicknameInput";
import { useRealtimePlayers } from "./hooks/useRealtimePlayers";
import { usePlayerMovement } from "./hooks/usePlayerMovement";
import type { Player } from "./types/player";

const getRandomColor = () =>
  "#" +
  Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");

const centerX = 400;
const centerY = 300;

const App: React.FC = () => {
  const [player, setPlayer] = useState<Player | null>(null);
  const players = useRealtimePlayers();

  const handleNicknameSubmit = (nickname: string) => {
    const id = uuidv4();
    const color = getRandomColor();
  
    const newPlayer: Player = { id, name: nickname, x: centerX, y: centerY, color };
    setPlayer(newPlayer);
  
    const playerRef = ref(db, `players/${id}`);
    set(playerRef, newPlayer);
    onDisconnect(playerRef).remove();
  };

  usePlayerMovement(player, setPlayer);

  if (!player) {
    return <NicknameInput onSubmit={handleNicknameSubmit} />;
  }

  return <GameField players={players} />;
};

export default App;
