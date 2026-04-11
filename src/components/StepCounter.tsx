import { useState } from "react";


export function StepCounter (){
    const [steps, setSteps] = useState(0); 

    function click(){
        setSteps(steps+1);
    }

    return <>
    <button onClick={click}>+1</button>
    <p>{steps}</p>
    </>
}