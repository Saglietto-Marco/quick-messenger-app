import { Button, Grid, TextField } from "@mui/material"
import React, { useState } from 'react'
import FirebaseCloudMessaging from '../utils/webPush'

const firebaseCloudMessaging = FirebaseCloudMessaging.getInstance()

const SendMessageForm = () => {
    const [message, setMessage] = useState('')

    const handleSubmit = () => {
        return message
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
                <TextField id="message" label="Message" variant="outlined" multiline rows={4} onChange={(i) => setMessage(i.target.value)} />
            </Grid>
            <Grid item>
                <Button variant="contained" size="large" onSubmit={handleSubmit}>
                    Send Message
                </Button>
            </Grid>
        </Grid >
    )
}

export default SendMessageForm