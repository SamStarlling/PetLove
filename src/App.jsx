import React from 'react'; //rafce (cria o componente)
import { ThemeProvider } from 'styled-components';
import Contato from './Pages/Contato';
import Home from './Pages/Home';
import Pets from './Pages/Pets';
import QuemSomos from './Pages/QuemSomos';
import { GlobalStyles } from './Styles/GlobalStyles';
import { light } from './Styles/Themes/light';
import * as S from './Styles/App.styles'
import Header from './Components/Header';



const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles/>
      <S.Container>
        <Header></Header>
        <Home></Home>
        <Pets></Pets>
        <Contato></Contato>
        <QuemSomos></QuemSomos>
      </S.Container>
    </ThemeProvider>
  )
}

export default App
