import React from 'react'

//Import todos os componentes do './style'
import * as S from './Header.styles';

import logo from '../../assets/paw.png';

const Header = (props) => {
  return (
    <S.Container>
      <S.Logo>
        <img src={ logo } alt="" />
        <a href="#">
          <h1>Pet Love</h1>
        </a>
      </S.Logo>
      <S.Nav>
        <a href="#">
          Pets
        </a>
        <a href="#">Quem Somos</a>
        <a href="#">Constato</a>
      </S.Nav>
    </S.Container>
  )
}

export default  Header
