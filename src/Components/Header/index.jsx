import React from 'react'

//Import todos os componentes do './style'
import * as S from './Header.styles';

import logo from '../../assets/paw.png';

const Header = (props) => {
  return (
    <S.Container>
      <S.Logo>
        <img src={ logo } alt="" />
        <S.Link href="/">
          <h1>Pet Love</h1>
        </S.Link>
      </S.Logo>
      <S.Nav>
        <S.Link href="/Pets">
          PETS
        </S.Link>
        <S.Link href="/QuemSomos">QUEM SOMOS</S.Link>
        <S.Link href="/Contato">CONTATO</S.Link>
      </S.Nav>
    </S.Container>
  )
}

export default  Header
