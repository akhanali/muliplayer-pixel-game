import React, { useState } from 'react';
import './NicknameInput.css';

interface Props {
  onSubmit: (nickname: string) => void;
}

export const NicknameInput: React.FC<Props> = ({ onSubmit }) => {
  const [nickname, setNickname] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nickname.trim()) {
      onSubmit(nickname.trim());
    }
  };

  return (
    <div className="nickname-modal">
      <form onSubmit={handleSubmit} className="nickname-form">
        <h2 className="nickname-title">Enter Your Nickname</h2>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Enter your nickname"
          className="nickname-input"
          autoFocus
        />
        <button type="submit" className="nickname-button">
          Start Playing
        </button>
      </form>
    </div>
  );
}; 