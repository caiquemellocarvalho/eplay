import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquam
      incidunt assumenda ab non obcaecati! Tenetur ipsum rerum illum adipisci
      magnam corporis a in delectus minima. Omnis dolor qui nemo?
    </Descricao>
  </Card>
)

export default Product
