import Tags from './Tags';
import Card from 'react-bootstrap/Card';
const MyCard = ({ img, title, description, color, text }) => {
    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top fluid" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Tags color={color} texto={text} />
            </Card.Body>
        </Card>
        </>
    );
}
export default MyCard;