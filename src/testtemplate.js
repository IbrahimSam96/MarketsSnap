import React, { Component } from 'react';
//BootStrap UI


import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import Drawer from "@material-ui/core/Drawer";

import Button from "@material-ui/core/Button";
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';
import BuyMeACoffe from "./BuymeCoffee"

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import {NavLink} from "react-router-dom"

class Template2 extends Component {

constructor(props){
    super(props)
    this.state = {
        top: false
    } 
}

render() {    

//Sidebar Callbacks I.E Open/Close, If IOS, disable discovery
        const toggleDrawer = (anchor, open) => (event) => {
            if (
              event.type === "keydown" &&
              (event.key === "Tab" || event.key === "Shift")
            ) {
              return;
            }
        
            this.setState({ top: open });
          };

// const iOS =

// typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);


		return (

		<div>
           
<Navbar  variant="dark"   > 

 <div className="MainNav" > 
 
<Button  onClick={toggleDrawer( this.state.top , true)}> {(!this.state.top) ? <DehazeIcon style={{color:"white", height:"10%", fontSize:"2rem"}}/> : <CloseIcon  style={{color:"yellow", height:"10%", fontSize:"2rem"}} />   }

</Button>

<NavLink className="MarketSnap" to="/" style={{textDecoration:"none",color:"white", fontSize:"2rem", position:"relative", top:"10%" }}> 
MarketSnap 

</NavLink>


<BuyMeACoffe/>

 </div>
</Navbar>	
           
			
         
		

<React.Fragment>
       
<Drawer
         anchor="bottom"
         open={this.state.top}
         onClose={toggleDrawer( this.state.top, false)}
       >  

						
<Nav to="/" className="flex-sm-column" id="sidebar">

<div >
<NavLink  className="navMS" to="/screener" > 

<ListItem button >
          <ListItemIcon >
            <InboxIcon className="MarScIcon"/>
          </ListItemIcon>
          <ListItemText primary="Market Screener"  />
        </ListItem>
 </NavLink>
 </div>

 <div >
<NavLink  className="navMS" to="/TechAnalysis" > 

<ListItem button >
          <ListItemIcon >
            <MultilineChartIcon className="MarScIcon"/>
          </ListItemIcon>
          <ListItemText primary="Technical Analysis"  />
        </ListItem>
 </NavLink>
 </div>

 </Nav>
</Drawer>
</React.Fragment>

		

			</div>
    );
  }
}




export default Template2;












