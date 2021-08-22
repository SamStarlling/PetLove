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
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles/>
      <Router>

        <S.Container>
          <Header></Header>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/Pets' component={Pets}></Route>
            <Route path='/Contato' component={Contato}></Route>
            <Route path='/QuemSomos' component={QuemSomos}></Route>
          </Switch>
        </S.Container>
      </Router>
    </ThemeProvider>
  )
}

export default App
