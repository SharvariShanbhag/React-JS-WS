// rafce

import React from "react";

function GreetingFunction({data,age}){
    console.log(data)

    return(
        <h2>Greeting To {data} <span>{age}</span></h2>
    )

}

export default GreetingFunction