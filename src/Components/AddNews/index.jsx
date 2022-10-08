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
import { useEffect, useState } from 'react';
import { Alert, MenuItem, Select } from '@mui/material';
import LocationService from '../../Services/LocationService';
import CategoryService from '../../Services/CategoryService';
import ShowNewsServices from '../../Services/ShowNewsServices';
const theme = createTheme();

export default function AddNews() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };
  const [newsTitlee, setNewsTitlee] = useState("");
  const [newsDetailss, setNewsDetailss] = useState("");
  const [newsDescriptionn, setNewsDescriptionn] = useState("");
  const [newsLocationn, setNewsLocationn] = useState("");
  const [newsCategoriess, setNewsCategoriess] = useState('');
  const [locations, setLocations] = useState([{}]);
  const [categories, setCategories] = useState([]);
  const [loc, setloc] = useState("");

  

  const getLocationData=(()=>{
    LocationService.getLocations() 
    .then((res)=>{
      setLocations(res.data);
    })
  })
  const getCategoriesData=(()=>{
    CategoryService.getCategories()
    .then((res1)=>{
      setCategories(res1.data);
    })
  })

  const getlocbyid=(()=>{
    LocationService.getLocById(loc).then((res)=>{
      return setNewsLocationn(res.data);
    })  
  })

  
  useEffect(() => {
    getLocationData();
    getCategoriesData();
  },[newsTitlee]);

  useEffect(()=>{
    getlocbyid();
  },[loc]);



  const handleChangeCat = (event)=>{
      setNewsCategoriess(event.target.value);
      
  }
  const handleChangeLoc = (event)=>{
    const locoid= ( event.target.value)
    return setloc(locoid);
}

  const news1 ={
    newsTitle: newsTitlee,
    newsDetails:newsDetailss,
    newsDescription: newsDescriptionn,
    categoryId: newsCategoriess,
    location: newsLocationn
  }


  const SubmitNews=(()=>{
    ShowNewsServices.addNews(news1).then((e)=>{
    
      
    })

  })

  const value1 = newsLocationn.locationId;
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


          {/* Select Option for Categories */}
              <Select
              label="Select Location"
              value={loc}
              onChange={handleChangeLoc}
              fullWidth
              >
          <MenuItem value={value1}>
            <em>None</em>
          </MenuItem>
          {locations.map(location1=>{
            return(
            <MenuItem key={location1.locationId} value={location1.locationId}>{location1.locationName} </MenuItem>
            )
          })} 
        </Select>

        {/* Select Option for Categories */}
        <Select
            label="Select Category"
            value={newsCategoriess}
            onChange={handleChangeCat}
            fullWidth
            helpertext="Please Select the category"
            >
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
          {categories.map(category1=>{
            return(
            <MenuItem key={category1.categoryId} value={category1.categoryId} >{category1.categoryName} </MenuItem>
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
              onClick={()=>SubmitNews()}
              sx={{ mt: 3, mb: 2 }}
            >
              Add News
            </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}