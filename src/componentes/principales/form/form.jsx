import React from "react";
import './form.css'

function Form(prop){
    return(
        <form id="form" name="form">
            <label for="nombre">Nombre: </label><input type="text" name="nombre" id="nombre" placeholder="Juan Alberto..."></input>
            <label for="apellido">Apellido: </label><input type="text" name="apellido" id="apellido" placeholder="Perez..."></input>
            <label for="DNI">DNI: </label><input type="number" name="DNI" id="DNI"></input>
            <label for="email">Correo Electrónico: </label><input type="email" name="email" id="email" placeholder="ejemplo123@gmail.com"></input>
            <label for="tel">Teléfono: </label><input type="number" name="tel" id="tel" placeholder="4480-8888"></input>
            <label for="tipo">Tipo de Seguro: </label>
            <select id="tipo">
                <option selected>Seleccione una opción</option>
                <option value="1">Básico</option>
                <option value="2">Intermedio</option>
                <option value="3">Premium</option>
            </select>
        </form>
    )   
}

export default Form;