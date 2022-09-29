import React  from "react";

export default function Navbar(props) {
    return <img src={ props.logo } width={ props.size } alt='logo2' />
}

// Podemos definir valores por defecto si nadie los define
Navbar.defaultProps = {
    size: 60
}