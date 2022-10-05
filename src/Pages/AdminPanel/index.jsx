import { Button, Grid } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const AdminPanel = () => {
  return (
    <>
    <Grid container sx={{width:"100vw",
     height:"100vh",
      backgroundColor:"#F0FFFF",
       display:"flex", 
       justifyContent:"center", 
       alignItems:"center",
       flexDirection:"column"
       }} >
        <Grid item >
        <Link to="categories">
    <Button variant="contained">
        News Categories
    </Button>
    </Link>
        </Grid>
    <Grid item >
    <Link to="locations">
    <Button variant="contained" >
        News Locations
    </Button>
    </Link>
    </Grid>
    </Grid>
    
    <Outlet/>
    </>
    
  )
}

export default AdminPanel