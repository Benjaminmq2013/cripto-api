import React from 'react'

const Footer = () => {
  return (
    <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Made Using Coin Market Cap API</h5>
                <p className="grey-text text-lighten-4">You can check it here: <a className="white-text" href="https://coinmarketcap.com/api/">https://coinmarketcap.com/api/</a></p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Programadores Expertos:</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/adriel-benjamin-martinez-quintanilla/">Benjamin Martinez (JavaScript) - LinkedIn </a></li>
                  <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/search/results/all/?keywords=aldair%20cruz%20zelaya&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=adf48c52-cadd-42e2-a8b9-787e146ff655&sid=%3Ay3">Aldair Cruz (.NET UI-PATH) - LinkedIn</a></li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            @ 2022 Vivan las shitcoins!
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
  )
}

export default Footer