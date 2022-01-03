import React from 'react';
import './App.css';
import { useRoutes } from "react-router-dom";
import { appRoutes } from './Routes';


const App: React.FC = (): JSX.Element => {
  const routes = useRoutes(appRoutes)
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
