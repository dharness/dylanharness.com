import * as React from "react";
import { createRoot } from 'react-dom/client';
import { Landing } from './pages/Landing'


export function App() {
    return (
    <div>
      <Landing></Landing>  
    </div>);
  }

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);