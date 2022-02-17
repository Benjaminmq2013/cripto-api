import React from 'react'
import CriptoItem from './CriptoItem'
import "../styles/CriptosList.css"
import useGetCriptos from "../Hooks/useGetCriptos"

const CriptosList = () => {
    const criptos = useGetCriptos()
  return (
    <div className="CriptosList">
      <ul className="collapsible">
        {criptos.map((cripto) => (
          <CriptoItem cripto={cripto} key={cripto.id} />
        ))}
      </ul>
    </div>
  );
};

export default CriptosList