import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { green, yellow, orange } from '@mui/material/colors';
import Layout from './components/Layout';


const theme = createTheme({
  palette: {
    primary: {
      main: yellow[500],
    },
    secondary: {
      main: orange[500],
    },
  },
  typography: {
    fontFamily: 'Josefin Sans, sans-serif, Playfair Display, Tajawal, Lora, Varela Round',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
});


function App() {


  return (

    <ThemeProvider theme={theme}>

    <Router>

      <Layout>

        <Routes>

          <Route path="/" element={<Notes />} />
            
          <Route path="/create" element={<Create />} />

        </Routes>

      </Layout>

    </Router>

    </ThemeProvider>
  );

};

export default App;
