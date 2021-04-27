import React from 'react'

export default function Ingreso() {
    return(

        <form>
        <h1 className='ingreso'> Aqui usted podra ingresar los datos climaticos de su ciudad</h1>
        <label for="seleccion">Seleccione Su Ciudad:</label>
        <select>            
            <option value="graperfruit"></option>
            <option value="lime"></option>
            <option value="Cali">Cali</option>
            <option value="Bogota">Bogota</option>
            <option value="Cali">Cartagena</option>
            <option value="Bogota">Santa Marta</option>
            <option value="Cali">Villavicencio</option>
            <option value="Bogota">Bucaramanga</option>
            <option value="Cali">San Andres</option>
            <option value="Bogota">Pasto</option>
            <option value="Bogota">Medellin</option>
 
        </select>

        <label for="nya">Fecha </label>
        <input type="text" name="nya" id="nya" />

        <label for="nya">Hora </label>
        <input type="text" name="nya" id="nya" />
        
        <label for="tempe">Temperatura</label>
        <input type="text" name="temp" id="temp" />

        <input type="submit" value="Agregar" />

       
        </form>
        
        
    )
}
      