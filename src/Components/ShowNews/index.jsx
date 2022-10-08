import * as React from 'react';
import { styled } from '@mui/material/styles';
import "./index.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ShowNewsServices from '../../Services/ShowNewsServices';
import { useState, useEffect } from 'react';
import { Fab, Grid} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';

import UpdateDialog from '../UpdateDialog';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';
import ShowNewsDialog from '../ShowNewsDialog';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function ShowNews({selectedNews}) {
    const [news, setNews] = useState([]);
    const [newsToUpdate, setNewstoUpdate] = useState([]);
    const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
    const [openShowDialog, setOpenShowDialog] = useState(false);
    
    useEffect(() => {
       getallnewss()
      },[newsToUpdate]);
      
      const getallnewss=(()=>{
        ShowNewsServices.getAllNews().then((res)=>{
          setNews(res.data);
        })
      });

      const DeleteNews1=((news)=>{
        ShowNewsServices.deleteNews(news.newsId).then((e)=>{
          getallnewss();
        })
    })
    

    const UpdateNews=((news1)=>{
      setNewstoUpdate(news1);
      setOpenUpdateDialog(true);
    })

    const ShowNews1=((news1)=>{
      setNewstoUpdate(news1);
      setOpenShowDialog(true);
      console.log(news1, "News Showed")
    })


      


  return (
    <Grid container>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 900 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{fontWeight:"900"}}>Id</StyledTableCell>
            <StyledTableCell sx={{fontWeight:"900"}}>Title</StyledTableCell>
            <StyledTableCell sx={{fontWeight:"900"}}>Details</StyledTableCell>
            <StyledTableCell sx={{fontWeight:"900"}} >Location</StyledTableCell>
            <StyledTableCell sx={{fontWeight:"900"}}align='center' >Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

            {news.map(news1=>{
              if(news1.categoryId===selectedNews){
                return(
                <StyledTableRow key={news1.newsId}>
                  <StyledTableCell sx={{fontWeight:"900"}}>
                    {news1.newsId}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" sx={{fontWeight:"900", color:"purple"}}>{news1.newsTitle}</StyledTableCell>
                  <StyledTableCell>{news1.newsTitle}</StyledTableCell>
                  <StyledTableCell sx={{fontWeight:"900", color:"green"}}>{news1.location.locationName}</StyledTableCell>
                  <StyledTableCell align='center' >
                  <Fab onClick={()=>{ShowNews1(news1)}} size='small' color="primary" aria-label="add"  sx={{marginRight:"4px"}}>
                     <RemoveRedEyeIcon  />
                      </Fab>
                  </StyledTableCell>
                </StyledTableRow> )
              }
              else if(selectedNews==="-1"){
                return(
                <StyledTableRow key={news1.newsId}>
                  <StyledTableCell sx={{fontWeight:"900"}}>{news1.newsId} </StyledTableCell>
                  <StyledTableCell sx={{fontWeight:"900", color:"purple"}} component="th" scope="row">
                  <Link href="#" onClick={()=>{ShowNews1(news1)}} className='Link' >
                    {news1.newsTitle}</Link></StyledTableCell>
                  <StyledTableCell>{news1.newsTitle}</StyledTableCell>
                  <StyledTableCell sx={{fontWeight:"900", color:"green"}}>{news1.location.locationName}</StyledTableCell>
                  <StyledTableCell align="center">
                  <Grid container spacing={2} display={"flex"} flexDirection="row" wrap='nowrap' >
                   <Fab  onClick={()=>{DeleteNews1(news1)}} size='small' color="primary" aria-label="add"  sx={{marginRight:"4px"}}>
                     <DeleteIcon  />
                      </Fab>
                        <Fab onClick={()=>{UpdateNews(news1)}} size='small' color="secondary" aria-label="edit" sx={{marginRight:"4px"}}>
                        <EditIcon  />
                          </Fab>
                        <Fab size='small' aria-label="like" sx={{marginRight:"4px"}}>
                          <FavoriteIcon />
                          </Fab>
                           </Grid>
                           
                  </StyledTableCell>
                </StyledTableRow> )
              }
              return(
               ""
              )
            })
            }

        </TableBody>
      </Table>
    </TableContainer>
    <UpdateDialog openUpdateDialog={openUpdateDialog} setOpenUpdateDialog={setOpenUpdateDialog} newsToUpdate={newsToUpdate} />
    <ShowNewsDialog newsToUpdate={newsToUpdate} openShowDialog={openShowDialog} setOpenShowDialog={setOpenShowDialog}/>
    
    </Grid>
  );
}
