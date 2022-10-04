import { Fab, Grid } from '@mui/material'
import React from 'react'


import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShowNewsServices from '../../Services/ShowNewsServices';


const Actions = ({newsId}) => {
  return (
    <Grid container spacing={2} display={"flex"} flexDirection="row" wrap='nowrap' >
  <Fab  size='small' color="primary" aria-label="add"  sx={{marginRight:"4px"}}>
  <DeleteIcon  />
</Fab>
<Fab size='small' color="secondary" aria-label="edit" sx={{marginRight:"4px"}}>
  <EditIcon />
</Fab>
<Fab size='small' aria-label="like" sx={{marginRight:"4px"}}>
  <FavoriteIcon />
</Fab>
    </Grid>
  )
}

export default Actions