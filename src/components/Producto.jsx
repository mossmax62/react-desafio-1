//Recursos externos e imports
import './Producto.css';

//Funcion con el nombre de nuestro componente la cual sera exportada
const Producto = ({title="Valor por defecto", precio = 0, stock=0}) => {
    let nombre = "Monitor 20 Pulgadas";
    const myStyle = {
        color: "green",
    }
    //const {title, precio} = props;

    console.log("Producto");
  return (
    <>  
      <h1 className="titulo">{title}</h1>
      <p style={{fontSize: '12px' }}>Nombre: {nombre}</p>
      {/* <p style={myStyle}>Precio: {precio}</p> */}
        <p className={stock <= 0 ? "noDisponible": null }>Precio: ${precio}</p>
    </>
  );
}

//Exportamos la funcion
export default Producto;