import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col, Row } from 'react-bootstrap'
import Header from './components/Header'
import MyCard from './components/MyCard'
import Footer from './components/Footer'

function App() {


  return (
    <>

      <Header/>
      <Container>
        <Row>
          <Col>
            <MyCard img='/src/assets/img/pexels-julissa-helmuth-12538668.jpg' title={'Mike'} description={'Inquieto'} color={'primary'} text={'Beagle'} />
          </Col>
          <Col>
            <MyCard img='/src/assets/img/pexels-rebeca-medeiros-15795022.jpg' title={'Scooby'} description={'Regalon'} color={'success'} text={'Gran danés'} />
          </Col>
          <Col>
            <MyCard img='/src/assets/img/pexels-skyler-ewing-4592868.jpg' title={'Chorizo'} description={'Inteligente'} color={'warning'} text={'Pastor Ingles'} />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
