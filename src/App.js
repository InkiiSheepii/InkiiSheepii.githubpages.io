import React from 'react';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";

  

function App() {
  return (
    <div className="App">
      <h1>Login Page</h1>
    </div>
  );
  const {loginWithRedirect} = useAuth0();
  loginWithRedirect();
};

export default App;
