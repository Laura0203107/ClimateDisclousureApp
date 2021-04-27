import React from 'react'
import {useState} from 'react'
import Axios from 'axios';


export default function Content() {

    const [response,setResposne] = useState({});
    const [togglePopup,setToggle] = useState(false);
  
    async function getClimate() {
      try {
        const res = await Axios.get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=201f60c0ad61a69dc0e0c011d68d4e69');
        debugger;
        setResposne(res.data)
        setToggle(!togglePopup)
      } catch (error) {
        console.error(error);
      }
    }
    return (
        <article className="grid-layout__content">
        <section className="container">
            <div className="page-title">
                <h1>Welcome to <b>Climate Disclosure App</b></h1>
                <div className="divider"></div>
                <p>Laura Camila Fernandez Ospina 67000117</p>
                <p>Nicolas Galvez Cardenas 67000127</p>
            </div>
            <div className='row'>
                <div className='column'>
                    <div className='blue-column'>
                        <h2>
                           ¿Quienes somos?
                        </h2>
                        <p>El nombre de la empresa Climate Disclosure App El programa
                            pretende ofrecer toda la información que pueda ser de interés sobre temas
                            climatológicos de las ciudades de Colombia.
                        </p>
                        <p>
                            La plataforma de Climate Disclosure permite exponer y dar seguimiento a los
                            principales
                            eventos sobre cambio climático en la región y el mundo; el desarrollo de iniciativas
                            y herramientas periodísticas; y la generación, difusión e intercambio de información
                            sobre cambio climático en América Latina y el Caribe.
                        </p>
                        <h2>
                           Antecedentes
                        </h2>
                        <p> La Comisión de Sistemas Básicos (CSB)  de la Organización Meteorológica Mundial (OMM) en su Duodécima Sesión en Ginebra, del 27 de Noviembre al 8 de Diciembe de 2000, 
                             debatió sobre la necesidad de reforzar el reconocimiento de los servicios meteorológicos para el público que los SMHN proporcionan a través de la creación de un proyecto piloto. 
                             La Comisión acordó que sería designado un Centro de Recogida para recopilar las predicciones meteorológicas suministradas por los SMHN participantes. El  Centro de Recogida generaría 
                             un producto integrado con las predicciones de las mayores ciudades del mundo y lo pondría a disposición para su uso por todos los miembros de la OMM para su difusión al público y a los medios de comunicación.
                         </p>
                         
                    </div>
                </div>
                <div className='column'>
                    <div className='green-column'>
                        <h2>Objetivo</h2>

                        <p>
                            El nombre de la empresa Climate-disclosure-app El programa
                            pretende ofrecer toda la información que pueda ser de interés sobre temas
                            climatológicos de las ciudades de Colombia.
                        </p>
                        
                        <button onClick={getClimate}>Traer clima</button>

                        {togglePopup && (
                            <div className="popup">
                            {response && response && (
                                <>
                                <p>name <b>{response.name}</b></p>        
                                <p>id <b>{response.id}</b></p>        
                                <p>timezone <b>{response.timezone}</b></p>     
                                <p>cod <b>{response.cod}</b></p>    
                                </>
                            )}
                            {!response && (
                                <>
                                <h1>response no tiene info</h1>
                                </>
                            )}
                            </div>
                            )}
                    </div>
                </div>
            </div>
        </section>
    </article>
    )
}
