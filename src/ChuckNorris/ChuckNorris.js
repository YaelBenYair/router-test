import { Button } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"



export default function ChuckNorris() {

    const [joke, setJoke] = useState(null)
    // const [anotherJoke, setAnotherJoke] = 

    const requestChuckNorris = () => {
        console.log('ChuckNorris request')
        axios.get('https://api.chucknorris.io/jokes/random')
        .then((response) => {
            setJoke(response.data.value)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(
        () => {
            requestChuckNorris()
        },
        []
    )

    const hendleAnotherJoke = () => {
        requestChuckNorris()
    }

    return(
        <>
        <h1>chuckNorris</h1>
        {joke &&
        <p>{joke}</p>
        }
        <Button onClick={hendleAnotherJoke}>GET ME ANOTHER JOKE</Button>
        </>
    )
}