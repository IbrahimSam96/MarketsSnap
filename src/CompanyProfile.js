import React from "react"
import TradingViewWidget, {Themes} from 'react-tradingview-widget';
import Template2 from "./testtemplate"
import CompanyProfile1 from "./TradingViewComapny";
import Fundemental from "./TradingViewFundemental";
import SymbolOverview from "./TradingViewSymbolOverview";
import TechnicalAnalysis from "./TradinViewTechnicalAnalysis";

const CompanyProfile = (props) => {


    const tradingViewlive = ( ) => (

        <TradingViewWidget symbol={props.odd} theme={Themes.DARK} autosize />
        
        );

return (


<div className="CA">

<div style={{backgroundColor:"#181C28", position:"fixed", top:"0%", left:"-100vw", height:"100%", width:"500vw", zIndex:-3}}>

</div>

<div className="SideBar">
    <Template2/>
</div>


<div className="Symb">
<SymbolOverview odd={props.odd} />  
</div>

<div className="Comp">
<CompanyProfile1 odd={props.odd} />  
</div>  

<div className="CaGraph">
{tradingViewlive()}  
</div>  


<div className="Techn"> 
<TechnicalAnalysis odd={props.odd} />
</div>

<div className="Funde">
<Fundemental odd={props.odd} />
</div>

</div>

);

}


export default CompanyProfile; 
