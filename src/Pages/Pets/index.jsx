import React from 'react'
import Dogs from '../../Components/Dogs';


//Import todos os componentes do './style'
import * as S from './Pets.styles';

const Pets = () => {
  return (
    <S.Container>
      Pets

      <Dogs></Dogs>
    </S.Container>
  )
}

export default  Pets
