import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { Cards } from './components/molecules/Card';
import { theme } from './themes';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Cards/>
    </ThemeProvider>
  );
}

export default App;
