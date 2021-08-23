import React from 'react'
import * as S from './Items.styles'

export const Items = (props) => {
  return (
    <p>
      {props.children}
    </p>
  )
}

export const Img = (props) => (
  <S.Imagem src={props.foto} alt={props.raca} />
)