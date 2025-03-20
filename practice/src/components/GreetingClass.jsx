import React from "react";

class GreetingClass extends React.Component{
    
    render(){
    console.log(this.props)
        return <h2 style={{color:"white",textDecoration:"underline"}}>Greeting to {this.props.data}</h2>
    }
}

export default GreetingClass;