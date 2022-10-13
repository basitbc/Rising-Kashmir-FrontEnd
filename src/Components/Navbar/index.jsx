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
      <Grid item >
      <Typography marginLeft={"200px"} marginTop={"10px"}  fontFamily={"poppins"} fontSize="15px" color="#5B5B5B">
        <Link to="/loginpage" style={{textDecoration:"none", color:"#5B5B5B"}}>
        AdminPanel 
        </Link>
        <span>  | Our Team | E-paper | Contact Us  </span>
      </Typography>
       
      </Grid>
    <Box  height={{ xs:"70px", sm: "100px", lg:"115px" }} 
    sx={{ flexGrow: 1,ml:{sx:"40px", sm:"50px", md:"50px"}, mr:{sx:"40px", sm:"50px", md:"50px"} }}
    
    >
      <Grid container sx={{display:"flex", flexDirection:"row",
     justifyContent:"center", alignItems:"center", paddingTop:"20px"}}>
        <Grid item>
        <Link to="/" style={{textDecoration:"none", color:"black"}}>
        <img src={require('../../Assets/Logos/rk-logo.png')} alt='logo0'/>
            </Link>
        </Grid>
        <Grid item>
          <Grid container spacing={1} display="flex" ml={"20px"} flexDirection={"row"}>
          <Grid item paddingRight={"10px"} >
            <Link to="/" style={{textDecoration:"none", color:"black"}}>
            <HomeSharpIcon />
            </Link>
            </Grid>
            {categories.slice(0, 5).map((category)=>{
            return(
              <Grid key={category.categoryId} item>
                {/* <Link onClick={()=>{SendNews1(category.categoryId)}}> */}
                <Link to="/category" style={{textDecoration:"none"}} state={{data: category}}>
              <Typography className='navtitle' paddingRight={"10px"} sx={{fontWeight:"bold", fontSize:"17px",wordSpacing:"0px", lineHeight:"21px", color:"black", fontFamily:"roboto", textTransform:"uppercase"}}>{category.categoryName}</Typography>
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
                  <Link key={category.categoryId} to="/category" style={{textDecoration:"none", color:"black"}} state={{data: category}}>
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{category.categoryName}</Typography>
                </MenuItem>
                  </Link>
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



