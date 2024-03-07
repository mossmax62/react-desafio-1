import Badge from 'react-bootstrap/Badge';
const Tags = ({ color, texto }) => {
    return (
        <>
        <div>
            <Badge bg={color}>{texto}</Badge>
        </div>
        </>
    );
    }; 
export default Tags;