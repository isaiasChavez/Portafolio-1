import React from "react";

const Alerta = ({datos}) => {

    const {color,mensaje} = datos
  return (
    <div class={`alert ${color}`} role="alert">
      {mensaje}
    </div>
  );
};

export default Alerta;
