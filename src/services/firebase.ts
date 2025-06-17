import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  onValue,
  remove,
  onDisconnect
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDTffTFx0RfwdMRwlQeo9WZf6pvmQgfVVw",
  authDomain: "multiplayer-pixel-game.firebaseapp.com",
  databaseURL: "https://multiplayer-pixel-game-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "multiplayer-pixel-game",
  storageBucket: "multiplayer-pixel-game.appspot.com",
  messagingSenderId: "393610202674",
  appId: "1:393610202674:web:3ee691066031ba9444762b"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, onValue, remove, onDisconnect };
