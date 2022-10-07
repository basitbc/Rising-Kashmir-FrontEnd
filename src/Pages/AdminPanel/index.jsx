import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./index.css";


const AdminPanel = () => {
  return (
    <>
    
    <Grid container sx={{width:"100vw",
     height:"100vh",
      backgroundColor:"#F0FFFF",
       display:"flex", 
       alignItems:"center",
       flexDirection:"column",
       
       }} >
        <Typography color={"purple"} fontWeight="700" fontFamily="monospace" mt={"50px"} variant='h4'>Welcome to Administration</Typography>
        <Grid item sx={{marginTop:"50px"}} >
        <Link to="/categories" style={{ textDecoration: 'none' }}>
    <Button  variant="contained" sx={{margin:"10px", fontSize:"20px"}}>
      News Categories
    </Button>
    </Link>
        </Grid>

    <Grid item >
    <Link to="/locations" style={{ textDecoration: 'none' }}>
    <Button variant="contained"sx={{margin:"11px", fontSize:"20px"}} >
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