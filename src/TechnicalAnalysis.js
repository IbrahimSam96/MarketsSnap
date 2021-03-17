import React from "react"

import Template2 from "./testtemplate"
import TradingViewWidget, {Themes} from 'react-tradingview-widget';


const TechAnalysis = () => {


    const tradingViewlive = ( ) => (

        <TradingViewWidget symbol="NASDAQ:AAPL" theme={Themes.DARK} autosize hide_side_toolbar={false} details={true} />
        
        );


return (


<div className="TA">

<div style={{backgroundColor:"#181C28", position:"fixed", top:"0%", left:"-100vw", height:"100%", width:"500vw", zIndex:-3}}>

</div>


<div className="SideBar">
<Template2/>
</div>

<div className="TaChart">
{tradingViewlive()}
</div>


</div>

);

}


export default TechAnalysis; 
