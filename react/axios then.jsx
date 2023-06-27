import React, { useEffect, useState } from "react";
import axios from "axios";

export default  function PokemonPowers() {
    const [data, setData] = useState([])

    useEffect(()=> {
        axios.get("https://pokeapi.co/api/v2/berry/1").then(res=> setData(res.data))
    },[])

  console.log(data.item.name);


   /* Without using useeffect causes problems 

            axios.get("https://pokeapi.co/api/v2/berry/1").then(res=> setData(res.data))

        It will log infinite times because it updates the state using setData(res.data). When the state is updated, it triggers a 
        re-render of the component, causing the function to be invoked again. 

        So we have to use hook useEffect()

    */

}
