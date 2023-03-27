import GameCreator from '@/components/GameCreator';
import GameEditor from '@/components/GameEditor';
import Head from 'next/head';
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm'


export default function Home() {
  const [gameName, setGameName] = useState<string>('');
  const [playerCount, setPlayerCount] = useState<string>('');
  return (

    <Router>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <div>
          <Head>
            <title>Login Page</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className="vh-100 d-flex justify-content-center align-items-center">
            <LoginForm />
          </main>
        </div>
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