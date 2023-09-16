import React, { useEffect, useState } from 'react';
import './App.scss';
import Title from "./components/Title"
import Button from "./components/Button"


function Test() {

  const [count, setCount] = useState(0);
  console.log(count);

/*   useEffect(() => {
    console.log("useEffect is working properly also when count is changing");
  }, [count]) */

  useEffect(() => {
  }, [])
  

    return (
    <div className='Test'>

    {/* <Title text = "texto del componente 1"/>
    <Title text = "texto del componente 2"/>
    <Title text = {count} /> */}

    {/* <Button text='Just another button'/>
    <Button onClick = {() => alert('Primer boton')} /> */}
    <Button onClick = {() => setCount (count + 1)} text={`Sumar 1 a ${count}`}/>
      
      </div>
  )
}

export default Test 
