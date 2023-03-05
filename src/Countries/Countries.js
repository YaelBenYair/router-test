import Button from '@mui/material/Button';
import { CardContent, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import { border, borderRadius, Container } from '@mui/system';
import { Navigate, Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



export default function Countries() {
    
    const [textInsert, setTextInsert] = useState('')
    const [submitTextInsert, setSubmitTextInsert] = useState(null)
    const navigate = useNavigate();
    // const [countryFlag, setCountryFlag] = useState(false)
    
    console.log('submitTextInsert', submitTextInsert)
    console.log(`${submitTextInsert}/`)


    const hendleSubmit = event => {
        event.preventDefault()
        setSubmitTextInsert(textInsert)
        navigate(`${textInsert}/`)
        // setCountryFlag(false)
        // window.open(`${textInsert}/`)
    }

    return(
        <>
            <h1>Countries</h1>
            <Container sx={{
                maxWidth: 700,
                border: '1px solid #bdbdbd',
                borderRadius: '5px',
                padding: '20px'
            }}>
            <form onSubmit={hendleSubmit}>
                <Grid container spacing={1}>
                    <Grid xs={12} sm={8} item>
                        <TextField label='country' placeholder='country name' variant='outlined' fullWidth required
                            value={textInsert} onChange={(event) => setTextInsert(event.target.value)} />
                    </Grid>
                    <Grid xs={12} sm={4} item>
                        <Stack spacing={2}>
                            <Button type='submit' style={{ height: 55.97}}>SEARCH</Button>
                        </Stack>

                    </Grid>
                </Grid>
            </form>
            </Container>

            {/* {submitTextInsert &&
                <Navigate to={`${submitTextInsert}/`} />
                // <Navigate to={"is/"} />
            } */}
            

            <hr/>

            <Outlet/>
        </>
    )
}