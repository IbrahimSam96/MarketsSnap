import React from "react"; 

import Tabsshow from "./TradingView";
import StockGainer from "./TradingViewStockMarketGainer";
import Tabsshow3 from "./TadingViewForexheat";
import StockTicker from "./TradinViewticker";
import TradingViewWidget, {Themes} from 'react-tradingview-widget';
import Template2 from "./testtemplate"
// Company profile and Financials Widgets Below 

const MarketsComponent2 = (props) => {


const tradingViewlive = ( ) => (

<TradingViewWidget symbol="NASDAQ:AAPL" theme={Themes.DARK} autosize />

);


return ( 
    


<div className="MA">

<div style={{backgroundColor:"#181C28", position:"fixed", top:"0%", left:"-100vw", height:"100%", width:"500vw", zIndex:-3}}>

</div>


<div className="SideBar">
    <Template2/>
</div>


<div className="MaTick" >
<StockTicker/>
</div>

<div className="MaMar">
<Tabsshow/>
</div>

<div className="MaGraph">
{tradingViewlive()}  
</div>  


<div className="MaOver">
<StockGainer/>
</div>

<div className="MaForex" >
<Tabsshow3/>
</div>


</div>


);

}

export default MarketsComponent2
