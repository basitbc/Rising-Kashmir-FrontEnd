import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField} from '@mui/material'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlus, faTrash } from '@fortawesome/fontawesome-free-solid'
import LocationService from '../../Services/LocationService'


const Location = () => {
  const [openAddDialog, setOpenAddDialog] = React.useState(false);
  // const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [locn, setLocn] = useState({});
  // const [delLocation, setdelLocation] = useState({});
  const [openUpdateDialog, setOpenUpdateDialog] = React.useState(false);
  const [location, setLocation] = useState("");
  const [locations, setLocations] = useState([]);
  
  
  const addLocation=(e)=>{
    e.preventDefault()
    const newlocation = {"locationName": location};
    LocationService.addLocation(newlocation).catch((e)=>console.log(e, "addError"));;
    setOpenAddDialog(false);
    setLocation("");
  }

  const updateLocation=(locationId, locationName)=>{
    LocationService.updateLocation(locationId,locationName).catch((e)=>console.log(e, "UpdateError"));
    handleCloseUpdateDialog();
    setLocation("");

  }

  const deleteLocation=(id)=>{
      return LocationService.deleteLocation(id);
  }
  
  

  useEffect(() => {
    LocationService.getLocations() 
    .then((res)=>{
      setLocations(res.data);
    })
  },[]); 


  //  Functions For handling Delete Dialog 
  // const handleClickOpenDeleteDialog = (locn) => {
  //   console.log(delLocation, "Deletebefore");
  //   setdelLocation(locn);
  //   console.log(delLocation, "DeleteAfter");
  //   setOpenDeleteDialog(true);

  // };

  // const handleCloseDeleteDialog = () => {
  //   setOpenDeleteDialog(false);
  // };
  

  // Functions for handling Add Dialog
  const handleClickOpenAddDialog = () => {
    setOpenAddDialog(true);
  };

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
  };

  // Functions for handling Update dialog
  const handleClickUpdateDialog = (locn) => {
    setOpenUpdateDialog(true);
    setLocn(locn);
  };

  const handleCloseUpdateDialog = () => {
    setOpenUpdateDialog(false);
  };

  return ( 
    <Grid container>
        <Grid item 
        height="60px"
        width="100vw"
        border="1px solid black"
        bgcolor="#cc2b5e"
        >     
    <Typography fontFamily={'Ubuntu'} variant="h3" color="white" mt={0} sx={{flexGrow:1,textAlign:"center"}}>Locations
    </Typography>
    
        </Grid>
    <Stack ml={2} gap={2} direction="row" flexWrap="wrap" justifyContent="start" mt={2} >
        {locations.map(locn=>(
          <Card key={locn.locationId} sx={{backgroundColor:"#6B5B95"}}>
          <CardContent>
              <Typography color={"whitesmoke"} variant='h3' paddingTop={"10px"} textAlign={"center"}>
                  {locn.locationName}
              </Typography>
              <Typography mt={2}  variant='h6'>
                <Stack direction="row" spacing={2} justifyContent="center">
                <FontAwesomeIcon onClick={()=> handleClickUpdateDialog(locn)} className='Edit'  cursor={'pointer'} color='#7FCDCD' icon={faEdit} />
                <FontAwesomeIcon 
                  onClick={()=>deleteLocation(locn.locationId)} className='Trash' cursor={'pointer'}  color='red' icon={faTrash} />
                </Stack>   
              </Typography> 
          </CardContent>
      </Card>
        ))}
    </Stack>
    <Box mt={2} ml={2}>
    <Card sx={{backgroundColor:"#7FCDCD"}}>
            <CardContent>
                <Typography variant='h1'>
                <FontAwesomeIcon onClick={handleClickOpenAddDialog} className='Plus' icon={faPlus} fontSize="90px"/>
                </Typography>
               
            </CardContent>
        </Card>
    </Box>

  <Dialog open={openAddDialog} onClose={handleCloseAddDialog}>
  <DialogTitle>Add New Location</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="location"
            label="Location"
            type="text"
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddDialog}>Cancel</Button>
          <Button onClick={addLocation}>Add</Button>
        </DialogActions>
  </Dialog>

  {/* Dialog for Delete */}
  {/* <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
  <DialogTitle>Delete Category</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete category
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
          <Button onClick={deleteLocation(delLocation.locationId)}>Delete</Button>
        </DialogActions>
  </Dialog> */}

  {/* Dialog for update */}
  <Dialog open={openUpdateDialog} onClose={handleCloseUpdateDialog}>
  <DialogTitle>Update Location</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="location"
            label="Location"
            type="text"
            defaultValue={locn.locationName}
            onChange={(e)=>setLocation(e.target.value)}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseUpdateDialog}>Cancel</Button>
          <Button onClick={()=>updateLocation(locn.locationId, location)}>Update</Button>
        </DialogActions>
  </Dialog>
    </Grid>
  )
}

export default Location