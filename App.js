import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouting from './CLASSDATA/AppRouting';

function App() {
  return (
   <>
   <BrowserRouter>
   <AppRouting/>
   </BrowserRouter>
   </>
  );
}

export default App;
