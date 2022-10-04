import React, { useEffect, useState } from 'react'

import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, Grid, MenuItem, Select, TextField, Typography} from '@mui/material';
import { TextFields } from '@mui/icons-material';
import ReactQuill from 'react-quill';
import LocationService from '../../Services/LocationService';
import CategoryService from '../../Services/CategoryService';
import ShowNewsServices from '../../Services/ShowNewsServices';
import { getValue } from '@testing-library/user-event/dist/utils';



const UpdateDialog = ({openUpdateDialog,setOpenUpdateDialog, newsToUpdate}) => {
    const [newsTitlee, setNewsTitlee] = useState("");
  const [newsDetailss, setNewsDetailss] = useState("");
  const [newsDescriptionn, setNewsDescriptionn] = useState("");
  const [newsLocationn, setNewsLocationn] = useState("");
  const [newsCategoriess, setNewsCategoriess] = useState("");
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

  const getValue1=(event)=>{
    const name = event.target.name;
    const value = event.target.value
    console.log(name, "name");
    console.log(value, "value")
  }

  
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
const updateNews1=(()=>{
   ShowNewsServices.updateNews(newsToUpdate.newsId,news1).then((e)=>{
    console.log("Submitted");
   })
})


  const news1 ={
    newsTitle : (newsTitlee==='')?  newsToUpdate.newsTitle : newsTitlee,
    newsDetails:(newsDetailss==='')? newsToUpdate.newsDetails : newsDetailss,
    newsDescription: (newsDescriptionn==='')? newsToUpdate.newsDescription : newsDescriptionn,
    categoryId: (newsCategoriess==='')? newsToUpdate.categoryId : newsCategoriess,
    location: (newsLocationn==='')? newsToUpdate.location : newsLocationn
  }
  



      const  handleCloseDialog=((e)=>{
        e.preventDefault();
        return setOpenUpdateDialog(false);
      });
  return (
    <Dialog open={openUpdateDialog} onClose={handleCloseDialog} fullScreen>
  <DialogTitle>Update News</DialogTitle>
        <DialogContent>
        <Box component="form" noValidate sx={{ mt: 3, minHeight:"500px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-title"
                  name="newsTitle"
                  required
                  fullWidth
                  defaultValue={newsToUpdate.newsTitle}
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
                  defaultValue={newsToUpdate.newsDetails}
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
              defaultValue={newsToUpdate.categoryId}
              onChange={handleChangeLoc}
              fullWidth
              >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {locations.map(location1=>{
            return(
            <MenuItem key={location1.locationId} value={location1.locationId}>{location1.locationName} </MenuItem>
            )
          })} 
        </Select>
        </Grid>
        <Grid item xs={6}>

        {/* Select Option for Categories */}
        <Select
            label="Select Category"
            defaultValue={newsToUpdate.categoryId}
            onChange={handleChangeCat}
            fullWidth
            helpertext="Please Select the category"
            >
          <MenuItem selected value="None">
            <em>None</em>
          </MenuItem>
          {categories.map(category1=>{
            return(
            <MenuItem key={category1.categoryId} value={category1.categoryId} >{category1.categoryName} </MenuItem>
            )
          })} 
        </Select>
              </Grid>
                <Grid item>
            <ReactQuill defaultValue={newsToUpdate.newsDescription} onChange={setNewsDescriptionn} theme="snow"  style={{height:"300px",width:"1160px", overflow:"inherit"}} />
            
                </Grid>
              </Grid>
          </Box>
 
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} >Cancel</Button>
          
          <Button onClick={updateNews1}  >Update</Button>
        </DialogActions>
  </Dialog>
  )
}

export default UpdateDialog