import Cabecalho from './components/Cabecalho/Cabecalho'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Slider, Slide } from './components/Slider';
import pratos from './data/pratos.mock.json'
import Carta from './components/Card';
import Cardapio from './components/Formulario/Formulario';
import Footer from './components/Footer/Index';
import Carrinho from './components/Carrinho/Carrinho';

import './App.css'



function App() {

  const settings = {
    preventClicksPropagation: false,
    preventClicks: false,
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true,
    },
  };

  return (
    <Container className='Container'>
      <Row>
        <Col>
          <Cabecalho/>
        </Col>
      </Row>
      <br />
      <Row>
        <p className='Apresentacao'>Somos um Buffet gourmet da Zona Oeste do Rio de Janeiro inspirado a fazer pratos tipicos de todo o Brasil com o mais alto padrão de qualidade em cada receita. Nossa equipe formada com os melhores cheffs formados pelo Senac que estão sempre almejando preparar as melhores receitas para o nosso cardápio.  </p>
      </Row>
      <br />
        <Row>
          <h1 className='Title'> Pratos Especiais </h1>
        </Row>
        <Row>
        <Slider settings={settings}>
          {
            pratos.map(({id, imgUrl, title, description}) => {
              return (
                <Slide>
                  <Carta 
                    id={id}
                    imgUrl={imgUrl}
                    title={title}
                    description={description}
                  />
                  
                </Slide>
              )
            })
          }
        </Slider>
      </Row>
      <Row>
       <Cardapio/>

      </Row>
      <Row>
         <Carrinho/>
      </Row>
      <Row>
      <Footer/>
      </Row>
      
    </Container>
    
  )
}

export default App
