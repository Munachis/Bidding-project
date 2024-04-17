import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar/Navbar';
import LandingPage from './LandingPage';

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <Navbar/>
      <LandingPage/>
    </div>
    </ChakraProvider>
  );
}

export default App;
