import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Grid, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import CategoryService from '../../Services/CategoryService';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [categories, setCategories] = useState([]);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const getAllCategories=((e)=>{
    CategoryService.getCategories()
    .then((result)=>{
      setCategories(result.data);
    }) 
  });

  useEffect(() => {
    getAllCategories();
  },[]);


  return (
    <Box>
    <Box  height={{ xs:"70px", sm: "100px", lg:"140px" }} 
    sx={{ flexGrow: 1,ml:{sx:"40px", sm:"50px", md:"50px"}, mr:{sx:"40px", sm:"50px", md:"50px"} }}
    
    >
      <Grid container sx={{display:"flex", flexDirection:"row",
     justifyContent:"center", alignItems:"center", paddingTop:"40px"}}>
        <Grid item>
        <Link to="/" style={{textDecoration:"none", color:"black"}}>
        <img src={require('../../Assets/Logos/rk-logo.png')} alt='logo0'/>
            </Link>
        </Grid>
        <Grid item>
          <Grid container spacing={1} display="flex" ml={"20px"} flexDirection={"row"}>
          <Grid item>
            <Link to="/" style={{textDecoration:"none", color:"black"}}>
            <HomeSharpIcon />
            </Link>
            </Grid>
            {categories.slice(0, 5).map((category)=>{
            return(
              <Grid item>
                {/* <Link onClick={()=>{SendNews1(category.categoryId)}}> */}
                <Link to="/category" style={{textDecoration:"none"}} state={{data: category}}>
              <Typography className='navtitle' sx={{fontWeight:"bold", fontSize:"17px",wordSpacing:"0px", lineHeight:"21px", color:"black", fontFamily:"roboto", textTransform:"uppercase"}}>{category.categoryName}</Typography>
                </Link>
                {/* </Link> */}
              </Grid>
            )})}
            <Grid item>
              <Box>
              <Tooltip title="more">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Typography sx={{fontWeight:"bold", fontSize:"17px",wordSpacing:"0px", lineHeight:"21px", color:"black", fontFamily:"roboto", textTransform:"uppercase"}}>more</Typography>
                <ArrowDropDownIcon/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '15px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >    
              {categories.slice(5).map((category) => (
                <MenuItem key={category.categoryId} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{category.categoryName}</Typography>
                </MenuItem>
              ))}
            </Menu>
              </Box>
            </Grid>

          </Grid>

        </Grid>
      </Grid>
    </Box>
    <Grid container bgcolor={"#C31833"} height="43px"  >
    </Grid>
    </Box>
  );
}



