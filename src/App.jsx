import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col, Row } from 'react-bootstrap'
import Header from './components/Header'
import MyCard from './components/MyCard'
import Footer from './components/Footer'

function App() {


  return (
    <>

      <Header />
      <Container>
        <Row>
          <Col>
            <MyCard img='https://via.placeholder.com/50' title={'Mike'} description={'Inquieto'} color={'primary'} text={'Beagle'} />
          </Col>
          <Col>
            <MyCard img='https://via.placeholder.com/50' title={'Mike'} description={'Regalon'} color={'primary'} text={'Beagle'} />
          </Col>
          <Col>
            <MyCard img='https://via.placeholder.com/50' title={'Mike'} description={'Inteligente'} color={'primary'} text={'Beagle'} />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
