import React, {useContext} from 'react'
import { myContext } from './App'

export default function Details() {
    const data = useContext(myContext);
    // console.log(data);
  return (
    <div>
        Accessing First Name: 
        {data.fname}
    </div>
  )
}
