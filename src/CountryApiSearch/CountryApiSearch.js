import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Typography } from "@mui/material";


export default function CountryApiSearch() {

    const [countryResult, setCountryResult] = useState(null)

    const urlParams = useParams()
    console.log(urlParams)
    console.log(countryResult)

    useEffect(
        () => {
            console.log('request to country')
            axios.get(`https://restcountries.com/v3.1/name/${urlParams.country_name}`)
            .then((response)=> {
                console.log(response)
                console.log(response.data)
                setCountryResult(response.data)
            })
        },
        [urlParams.country_name]
    )

    
    

    return(
        <>
        <p>{urlParams.country_name}</p>
        {countryResult &&
            countryResult.map((country) => (
                    
                    <Typography variant="p">
                    country name: {country.name.common}
                    country official: {country.name.official}
                    </Typography>
                    
            )
            )
        }
        </>
    )
}