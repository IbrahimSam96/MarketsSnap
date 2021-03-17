import React from "react"; 

export default  class CryptoOverview extends React.PureComponent {
    constructor(props) {
        super(props);
        this._ref = React.createRef();
    }
 componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js' 
        script.async = true;
        this._ref.current.appendChild(script);
        script.innerHTML = JSON.stringify(
            {
                  "width": "100%",
                  "height": "100%",
                  "defaultColumn": "overview",
                  "screener_type": "crypto_mkt",
                  "displayCurrency": "USD",
                  "colorTheme": "dark",
                  "locale": "en"
                })
    }
   


    render() {

        return(

        <div className="tradingview-widget-container" ref={this._ref}>
          
         <div className="tradingview-widget-container__widget"> </div>
           
        </div>
        );
    }
   
}

