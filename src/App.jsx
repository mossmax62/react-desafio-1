import './App.css'
import Producto from './components/Producto'
import 'bootstrap/dist/css/bootstrap.min.css'
import  Button  from 'react-bootstrap/Button'

function App() {
 

  return (
  <>
  <Producto title= 'Producto 1' precio = '300' stock='5' />
  <Producto title= 'Producto 2' precio = '700' stock='0'/>
  <Producto title= 'Producto 3' precio = '1200' stock = '15'/>
  <Button>Boton de boostrap</Button>
  </>
  )
}

export default App
