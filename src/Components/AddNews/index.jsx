import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FeedIcon from '@mui/icons-material/Feed';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ShowNewsServices from '../../Services/ShowNewsServices';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom"
import { MenuItem, Select } from '@mui/material';
import LocationService from '../../Services/LocationService';
const theme = createTheme();

export default function AddNews() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const [addedNews, setAddedNews] = useState({});
  const [newsTitlee, setNewsTitlee] = useState("");
  const [newsDetailss, setNewsDetailss] = useState("");
  const [newsDescriptionn, setNewsDescriptionn] = useState("");
  const [newsLocationn, setNewsLocationn] = useState({});
  const [locations, setLocations] = useState([]);
  const selectedNews = useLocation().state.selectedNews;

 

  useEffect(() => {
    LocationService.getLocations() 
    .then((res)=>{
      setLocations(res.data);
    })
  },[]);



  const news1 ={
    newsTitle: newsTitlee,
    newsDetails:newsDetailss,
    newsDescription: newsDescriptionn,
    categoryId: selectedNews,
    locationId: newsLocationn
  }
const addNews=(()=>{
  setAddedNews(news1);
  console.log(news1);
})
useEffect(() => {
  ShowNewsServices.addNews(addedNews);
}, [addedNews]);
  
  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg"  sx={{border:"3px solid blue", marginTop:"20px"}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main', fontSize:"30px" }}>
            <FeedIcon  />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add News
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, minHeight:"500px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-title"
                  name="newsTitle"
                  required
                  fullWidth
                  onChange={(e)=>setNewsTitlee(e.target.value)}
                  id="newsTitle"
                  label="Title"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  onChange={(e)=>setNewsDetailss(e.target.value)}
                  id="newsDetails"
                  label="Details"
                  name="newsDetails"
                />
              </Grid>
              <Grid item xs={6}>
              <Select
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {locations.map(location1=>{
            return(
            <MenuItem key={location1.locationId} value={location1.locationName} onClick={()=>setNewsLocationn(location1.locationId)}>{location1.locationName} </MenuItem>
            )
          })}
          
        </Select>
              </Grid>
                <Grid item sx={12}>
            <ReactQuill theme="snow"  value={newsDescriptionn} onChange={setNewsDescriptionn} style={{height:"300px",width:"1160px", overflow:"inherit"}} />
                </Grid>
              </Grid>
    
          </Box>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={()=>addNews()}
              sx={{ mt: 3, mb: 2 }}
            >
              Add News
            </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}