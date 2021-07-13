import React from 'react'
import './Tarjeta.css'

export const Tarjeta = ({id, name, img, type}) => {

    const estilo = type + ' img'

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    return (
            <div className="card">
                    <div className="tituloDiv">
                        <h3 className="title">{capitalizeFirstLetter(name)}</h3>
                        <h3 className="numPokemon">#{id}</h3>
                    </div>
                    <div>
                        <img className={estilo} alt="poke" src={img}></img>
                    </div>
            </div>
    )
}

export default Tarjeta;
