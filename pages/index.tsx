import { useEffect } from 'react'
import FirebaseCloudMessaging from '../utils/webPush'
import type { NextPage } from 'next'
import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import UsernameForm from '../components/UsernameForm'
import SendMessageForm from '../components/SendMessageForm'

const firebaseCloudMessaging = FirebaseCloudMessaging.getInstance()

const Index: NextPage = () => {
  useEffect(() => {
    firebaseCloudMessaging.init()
  }, [])

  return (
    <Grid
      container
      direction="row"
      justifyContent="stretch"
      alignItems="flex-end"
    >
      <Grid
        item
        container
        direction="column"
        justifyContent="stretch"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h4">Welcome To QUICK-MESSENGER-APP!</Typography>
        </Grid>
        <br />
        <Card variant="outlined">
          <CardContent>
            <Grid item>
              <Typography variant="h6">Please enter your desired username below</Typography>
            </Grid>
          </CardContent>
          <Grid item>
            <UsernameForm />
          </Grid>
          <br />
        </Card>
        <br />
        <Grid item>
          <SendMessageForm />
        </Grid>
        {/* <br />
        <br />
        <Button variant="outlined" onClick={async () => await firebaseCloudMessaging.getFireBaseMessage()}> GET MESSAGE</Button>
        <br />
        <br />
        <Button variant="outlined" onClick={async () => await firebaseCloudMessaging.tokenInlocalforage}> GET Token</Button> */}
      </Grid>
    </Grid>
  )
}

export default Index
