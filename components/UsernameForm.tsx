import { Button, Grid, TextField } from "@mui/material"
import React, { useState } from 'react'

const UsernameForm = () => {
    const [username, setUsername] = useState('')

    const handleSubmit = () => {
        return username
    }

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
            <Grid item>
                <TextField id="username" label="Username" variant="filled" onChange={(i) => setUsername(i.target.value)} />
            </Grid>
            <Grid item>
                <Button variant="contained" size="large" onSubmit={handleSubmit}>
                    submit
                </Button>
            </Grid>
        </Grid >
    )
}

export default UsernameForm