import React from "react";
import { useState } from "react";

export interface GameInfo {
  gameName: string;
  playerCount: number;
}

const GameEditor = (props: GameInfo) => {
  return (
    <div>
      <div>
        Game Name: {props.gameName}
      </div>
      <div>
        Player Count: {props.playerCount}
      </div>
    </div>
  )
}
export default GameEditor;