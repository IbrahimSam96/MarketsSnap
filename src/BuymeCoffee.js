
 import React from "react"
 
 class BuyMeACoffe extends React.Component {
    constructor(props){
        super(props)
        const script = document.createElement("script");
        script.setAttribute('data-name','BMC-Widget')
        script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        script.setAttribute('data-id', 'Ibra96');
        script.setAttribute('data-description', 'Thank you for your support!');
        script.setAttribute('data-message', 'This web-page is free to use. Do you want to help supporting it?');
        script.setAttribute('data-color',"#FF5F5F")
        script.setAttribute('data-position','right')
        script.setAttribute('data-x_margin','18')
        script.setAttribute('data-y-margin','18')
        script.async = true
        //Call window on load to show the image
        script.onload=function(){
            var evt = document.createEvent('Event');  
            evt.initEvent('DOMContentLoaded', false, false);  
            window.dispatchEvent(evt);
        }
        this.script=script
    }

    componentDidMount () {    
        document.head.appendChild(this.script)
    }

    componentWillUnmount(){
        document.head.removeChild(this.script);
        document.body.removeChild(document.getElementById("bmc-wbtn"))
     }

    render(){
        return(null)
    }
}

export default BuyMeACoffe;


  


