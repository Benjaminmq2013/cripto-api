import React, { useEffect } from 'react'
import CriptoDetails from './CriptoDetails'
import favorite_icon from "../assets/icons/favorites_star_icon.svg"
import "../styles/CriptoItem.css"
import M from "materialize-css"

const CriptoItem = ({ cripto }) => {
  useEffect(() =>{
    M.AutoInit();
  }, [])
  return (
    <li className="cripto_item">

        <div className="collapsible-header">   
          <img className="cripto_item_favorite" src={favorite_icon}></img>       
          <span className="cripto_name blue-text text-lighten-2"> { cripto.name } &nbsp; </span>
          <span className="cripto_price orange-text "> ${ cripto.quote.USD.price.toFixed(2) }</span>
          <span className="new badge blue" data-badge-caption="">{ (cripto.quote.USD.volume_change_24h).toFixed(2) }%</span>
        </div>

        <div className="collapsible-body">
          <CriptoDetails cripto={ cripto }/>        
        </div>

    </li>
  )
}

export default CriptoItem