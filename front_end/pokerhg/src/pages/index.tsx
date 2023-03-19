import GameCreator from '@/components/GameCreator';
import GameEditor from '@/components/GameEditor';
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function Home() {
  const [gameName, setGameName] = useState<string>('');
  const [playerCount, setPlayerCount] = useState<string>('');
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
      </div>
      <Routes>
        <Route path="/"
          element={
            <GameCreator
              setGameName={setGameName}
              setPlayerCount={setPlayerCount}
              gameName={gameName}
              playerCount={playerCount} />
          } />
        <Route path="/game_editor"
          element={
            <GameEditor
              gameName={gameName}
              playerCount={Number(playerCount)} />
          } />
      </Routes>
    </Router>
  );
}