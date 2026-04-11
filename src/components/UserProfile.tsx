import { useState } from "react";

type Props = {
    firstname: string;
    lastname: string;
    email?: string;
    birthyear: number;
}

export function UserProfile(props: Props) {
  const [state, setState] = useState ('');

  return <>
    <input 
    type="text" 
    value={state}
    onChange={(e) =>{
        setState(e.target.value)
    }}
    />
    

    <p>{props.lastname}</p>
    <p>{props.firstname}</p>
    <p>{props.email}</p>
    <p>{props.birthyear}</p>
  </>
}