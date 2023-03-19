import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

export interface GameUpdateFunctions {
  setGameName(gameName: string): void;
  setPlayerCount(playerCount: string): void;
  gameName: string;
  playerCount: string;
}

const GameCreator = (props: GameUpdateFunctions) => {
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/game_editor');
  };

  const handleGameName = (event: React.FormEvent<HTMLInputElement>) => {
    props.setGameName(event.currentTarget.value);
  };

  const handlePlayerCount = (event: React.FormEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b]+$/;
    if (event.currentTarget.value === "" || regex.test(event.currentTarget.value)) {
      props.setPlayerCount(event.currentTarget.value);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Game Name: </label>
          <input
            id="game_name"
            type="text"
            value={props.gameName}
            required
            onChange={handleGameName} />
        </div>
        <div>
          <label>Player Count: </label>
          <input
            id="player_count"
            type="text"
            required
            value={props.playerCount}
            pattern="[0-9]*"
            onChange={handlePlayerCount} />
        </div>
        <button>Create Game</button>
      </form>
    </div>
  )
};

export default GameCreator;