import { Grid, Typography } from '@mui/material'
import React from 'react'

const Main = () => {
  return (
    <>
    <Typography 
    variant='h3'
     sx={{flexGrow:1,textAlign:"center"}}
     fontFamily={'Ubuntu'}
     >
        Main Menu
    </Typography>
    <Grid>
        <Typography>
            Location
        </Typography>
        
    </Grid>

    </>

  )
}

export default Main