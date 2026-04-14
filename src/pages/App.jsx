import { useState } from 'react';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';


export default function App() {

  return (
    <>
      <Home/>
      <Login />
      <Dashboard />
    </>
  );
}
