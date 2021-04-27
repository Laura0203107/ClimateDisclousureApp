import React,{useState} from 'react'
import Footer from './Footer'

export default function Aprendiendo() {
    //composicion
  //emmet
  //destructuring array 
  // hooks moderno react
  const [edad,setEdad] = useState(24);
  const [nombre, setNombre] = useState('cristian');

  // const edad = 24;
    return (
        <div>
            <>
<h1>test</h1>
<p> mi edad {edad} </p>
<p> mi nombre {nombre} </p>
</>

{/*onClick prop */}
<div>
<button onClick={() => setEdad(50)} >Aumentar mi edad</button>
<button onClick={() => setEdad(24)} >Reset edad</button> <br/>
<button onClick={() => setNombre('nicolas')}>Cambiar nombre</button>
<button onClick={() => setNombre('cristian')}>reset nombre</button>

</div>



<Footer/>
        </div>
    )
}
