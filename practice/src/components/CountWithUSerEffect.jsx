import React, {useEffect, useState} from 'react'

const CountWithUSerEffect = () => {
    const [count,setCount] = useState(0)
  
  function handleIncrement(){
    setTimeout(()=> {
        setCount(() => count +1 );
    } ,1000);
  }

  useEffect(() => {
    handleIncrement();
    console.log("********happy holi")
  },[setCount])


  console.log(count);
  return (
    <div>CountWithUSerEffect
        {count}
        <button onClick={handleIncrement}>increment</button>
    </div> 
    

  )

  
}

export default CountWithUSerEffect