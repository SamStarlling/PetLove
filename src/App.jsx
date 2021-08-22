import React from 'react'; //rafce (cria o componente)
import { ThemeProvider } from 'styled-components';
import Contato from './Pages/Contato';
import Home from './Pages/Home';
import { GlobalStyles } from './Styles/GlobalStyles';
import { light } from './Styles/Themes/light';
// import Template from './Template';


const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles/>
      <div>
        <Home></Home>
        <Contato></Contato>
      </div>
    </ThemeProvider>
  )
}

export default App
