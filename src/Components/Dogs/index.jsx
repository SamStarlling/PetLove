import React, { useEffect,useState } from 'react'
import { Card } from '../Cards/Card.styles';
import { Img, Items } from '../Cards/Items/Items';

//Import todos os componentes do './style'
import * as S from './Dogs.styles';

const Dogs = () => {
  const [dadosApi, setDadosApi] = useState([]);
  const [apiChegou, setApiChegou] = useState(false)
  
  //DidAmount
  useEffect(() => {
    fetch('https://guarded-atoll-70106.herokuapp.com/pets/dogs')
    .then((res) => res.json())
    .then((data) => {
      setDadosApi(data.results)
      setApiChegou(true)
    })
    .catch((error) => console.log(error))
  }, [])
  return (
    <S.Container>
      {!!dadosApi && apiChegou ? (dadosApi.map((item, j) => (
        <Card>
          <Img
          foto={item.foto} raca={item.raca}/>
          <Items>
            {item.nome}
          </Items>
          
          <Items>raça: {item.raca}</Items>
          <Items>gênero: {item.genero}</Items>
          <Items>idade: {item.idade} anos</Items>
        </Card>
      ))) : (<Items>Carregando</Items>)}
    </S.Container>
  )
}

export default  Dogs
