import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PokemonPowers() {

    const [pokemonData, setPokemonData] = useState([])
    
    useEffect(()=>{

        async function fetchData(){
             
          const response =  await axios.get("https://pokeapi.co/api/v2/berry/1") // instead os response {data} destructure directly
          setPokemonData(response.data)
        }

        fetchData()
    }, [])

    return (
        <>
            {pokemonData.item && 
                <h3>{pokemonData.item.name}</h3>
            }
        </>
    )

}
