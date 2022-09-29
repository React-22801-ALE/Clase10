import React from 'react';
import './Banner.css'

// Declaracion export
export let msg = "Hello World!"
// Esto es un componente de React
export function Banner(props) {
    return <div className='banner'>{ props.msg }</div>
}

// Esto es solo una funcion
// Default export, cuando importo no puedo cambiar el nombre
export default function HelloWorld() {
    alert(msg);
}