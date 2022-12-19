import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './cabecalho.css'



export default function Cabecalho(){
    return (
      <Container className='ContainerHeader' width={20}>
      <Row>
        Buffet Delamo'ur
      </Row>
    </Container>
    )
}