import { useEffect } from "react";
import { db } from "../services/firebase";
import { ref, set } from "firebase/database";
import type { Player } from "../types/player";

export function usePlayerMovement(player: Player | null, onPlayerUpdate?: (player: Player) => void) {
  useEffect(() => {
    if (!player) return;

    const handleKey = (e: KeyboardEvent) => {
      const dx = (e.key === "a" && -4) || (e.key === "d" && 4) || 0;
      const dy = (e.key === "w" && -4) || (e.key === "s" && 4) || 0;

      if (dx === 0 && dy === 0) return;

      const newX = Math.max(0, Math.min(800, player.x + dx));
      const newY = Math.max(0, Math.min(600, player.y + dy));
      const updatedPlayer = { ...player, x: newX, y: newY };

      // Update local state
      onPlayerUpdate?.(updatedPlayer);
      
      // Update Firebase
      set(ref(db, `players/${player.id}`), updatedPlayer);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [player, onPlayerUpdate]);
}
