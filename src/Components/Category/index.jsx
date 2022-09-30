import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import {  Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField} from '@mui/material'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/fontawesome-free-solid'
import CategoryService from '../../Services/CategoryService'
import ShowNews from '../ShowNews'


const Category = () => {
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [catg, setCatg] = useState({});
  const [selectedNews, setSelectedNews] = useState("2");
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false)
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const addCategory=(e)=>{
    e.preventDefault()
    const newcategory = {"categoryName": category};
    CategoryService.addCategory(newcategory).catch((e)=>console.log(e, "addError"));;
    setOpenAddDialog(false);
  }

const deleteCategory=(id)=>{
  try {
    CategoryService.deleteCategory(id);
  } catch (error) {
    console.log(error);
  }
}

const updateCategory=(categoryId, categoryName)=>{
  CategoryService.updateCategory(categoryId, categoryName);
  setOpenAddDialog(false);
  
}


  useEffect(() => {
    CategoryService.getCategories()
    .then((result)=>{
      setCategories(result.data);
    })
  },[category]);
  

  const handleClickOpen = () => {
    setOpenAddDialog(true);
    setCategory(" ");
  };

  const handleClose = () => {
    setOpenAddDialog(false);
  };

  const handleClickOpenUpdateDialog = (catg) => {
    setOpenUpdateDialog(true);
    setCatg(catg);
  };

  const handleCloseUpdateDialog = () => {
    setOpenUpdateDialog(false);

  };
  return ( 
    <Grid container>
      <Grid container
      justifyContent={"space-between"}
      height="65px"
      width="100vw"
      border="1px solid black"
      bgcolor="#cc2b5e">
        <Grid item>
        </Grid>
      <Grid item>     
    <Typography fontFamily={'Ubuntu'} variant="h3" color="white" mt={0}>Categories
    </Typography>
    </Grid>
    <Grid item m={"9px"}>
    <Button onClick={handleClickOpen} sx={{alignSelf:"center"}} variant="contained">Add Category</Button>
    </Grid>
      </Grid>
        
        <Grid container sx={{overflowX:"scroll"}} height="150px" backgroundColor="#F7CAC9">
    <Stack m={2} gap={2} direction="row" justifyContent="start" >
        {categories.map(catg=>(
          <Card  key={catg.categoryId} sx={{backgroundColor:"#6B5B95", minWidth:"250px", height:"100px"}}>
          <CardContent>
              <Button onClick={() => setSelectedNews(catg.categoryId)} className='textCategories' color={"whitesmoke"} fontFamily={'Ubuntu'}  variant='h5'>
                  {catg.categoryName}
              </Button>
              <Typography mt={2}  variant='h6'>
                <Stack direction="row" spacing={2} justifyContent="center">
                <FontAwesomeIcon onClick={()=>handleClickOpenUpdateDialog(catg)} className='Edit'  cursor={'pointer'} color='#7FCDCD' icon={faEdit} />
                  <FontAwesomeIcon 
                  onClick={()=>deleteCategory(catg.categoryId)} className='Trash' cursor={'pointer'}  color='red' icon={faTrash} />
                </Stack>   
              </Typography> 
          </CardContent>
      </Card>
        ))}
    </Stack>
    </Grid>

  <Dialog open={openAddDialog} onClose={handleClose}>
  <DialogTitle>Add New Category</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="category"
            type="text"
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addCategory}>Add</Button>
        </DialogActions>
  </Dialog>

  <Dialog open={openUpdateDialog} onClose={handleCloseUpdateDialog}>
  <DialogTitle>Update Category</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Category"
            type="text"
            defaultValue={catg.categoryName}
            onChange={(e)=>setCategory(e.target.value)}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseUpdateDialog}>Cancel</Button>
          <Button onClick={()=>updateCategory(catg.categoryId, category)}>Update</Button>
        </DialogActions>
  </Dialog>
  <ShowNews selectedNews = {selectedNews}/>
  
    </Grid>

    
    
  )
}

export default Category