import Card from 'react-bootstrap/Card';
import './card.css'

export default function Carta({ imgUrl, title, description }) {
  return (
    <>
      <Card className="Card">
        <Card.Img className="CardImg" variant="top" src={imgUrl} />
            <Card.Body className="CardBody">
                <Card.Title className='CardTitle'>
                    {title}
                </Card.Title>
                <Card.Text className='CardText'>
                    {description}
                </Card.Text>
            </Card.Body>
      </Card>
    </>
  );
}