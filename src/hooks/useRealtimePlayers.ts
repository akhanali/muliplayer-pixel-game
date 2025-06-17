import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { ref, onValue } from "firebase/database";
import type { Player } from "../types/player";

export function useRealtimePlayers() {
  const [players, setPlayers] = useState<Record<string, Player>>({});

  useEffect(() => {
    const playersRef = ref(db, "players");
    console.log("Setting up real-time listener for players");

    // Listen to all changes including initial load
    const unsubscribe = onValue(playersRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Received players update:", data);
      setPlayers(data || {});
    }, (error) => {
      console.error("Error in real-time listener:", error);
    });

    // Cleanup listener
    return () => {
      console.log("Cleaning up real-time listener");
      unsubscribe();
    };
  }, []);

  return players;
}
