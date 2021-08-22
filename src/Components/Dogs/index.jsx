import React, { useEffect,useState } from 'react'

//Import todos os componentes do './style'
import * as S from './Dogs.styles';

const Dogs = () => {
  const [dadosApi, setDadosApi] = useState([]);
  const [apiChegou, setApiChegou] = useState(false)

  console.log(dadosApi);
  
  //DidAmount
  useEffect(() => {
    fetch('https://salty-harbor-83280.herokuapp.com/pets/dogs')
    .then((res) => res.json())
    .then((data) => {
      setDadosApi(data.results)
      setApiChegou(true)
    })
  }, [])
  return (
    <S.Container>
      {!!dadosApi && apiChegou ? (dadosApi.map((item) => console.log(item.nome))) : (<p>Carregando</p>)}
    </S.Container>
  )
}

export default  Dogs
