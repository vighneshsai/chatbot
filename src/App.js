import logo from './logo.svg';
import './App.css';
import Chatbot from './pages/home_page';
import Header from './component/header';
import { Box } from '@mui/material';
import backgroundImage from './assets/background.jpg';

function App() {
  return (
    <Box sx={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100%',
  }}>
            <Header />
            <Chatbot />
        </Box>
  );
}

export default App;
