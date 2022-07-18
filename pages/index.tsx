import { useEffect } from 'react'
import { firebaseCloudMessaging } from '../utils/webPush'
import type { NextPage } from 'next'
import { Grid, Typography } from '@mui/material'

const Index: NextPage = () => {
  // useEffect(() => {
  //   firebaseCloudMessaging.init()
  // }, [])

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid direction="row">
        <Grid item>
          <Typography variant="h4">Welcome To QUICK-MESSENGER-APP!</Typography>
        </Grid>
      </Grid>

    </Grid>

  )
}

export default Index
