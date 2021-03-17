import MarketsComponent2 from "./MarketsComponent2"
import CompanyProfile from "./CompanyProfile"
import {Switch, Route} from "react-router-dom"
import queryString from "query-string"
import MarketsScreen from "./MarketsScreener"
import CryptoProfile from "./CryptoProfile"
import { useEffect } from "react"
import fire from "./fire"
import TechAnalysis from "./TechnicalAnalysis"


 const App = (props) => {



   const odd =  queryString.parse(window.location.href);

   useEffect( () => {

    fire.analytics();

   } )

return (


<div>

{console.log(window.location.href)}



<Switch >

<Route  exact path={"/"}  component={MarketsComponent2} /> 
<Route  exact path={"/overview"}  children={<CompanyProfile odd={odd["https://marketssnap.web.app/overview?tvwidgetsymbol"]}/>} /> 
<Route exact path ={"/screener"} component={MarketsScreen} />
<Route exact path ={"/TechAnalysis"} component={TechAnalysis} />
<Route exact path ={"/crypto"} children={<CryptoProfile odd={odd["https://marketssnap.web.app/crypto?tvwidgetsymbol"]}/>} />
</Switch>


</div>


  );
}




export default App;
