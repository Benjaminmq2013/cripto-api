import React from 'react'

const CriptoDetails = ( { cripto } ) => {
  return (
    <div className="collection">
        <a href="#!" className="collection-item">Market Cap: ${ cripto.quote.USD.market_cap } USD</a>
        <a href="#!" className="collection-item">En Circulación: {cripto.circulating_supply}</a>
        <a href="#!" className="collection-item">Volumen 24h: { cripto.quote.USD.volume_24h }</a>
        <a href="#!" className="collection-item">Market Cap Dominance: { (cripto.quote.USD.market_cap_dominance).toFixed(1) }%</a>
    </div>
  )
}

export default CriptoDetails