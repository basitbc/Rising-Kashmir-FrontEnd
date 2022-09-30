import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ShowNewsServices from '../../Services/ShowNewsServices';
import { useState, useEffect } from 'react';
import { Grid} from '@mui/material';
import { Link } from 'react-router-dom';

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
    
    useEffect(() => {
        ShowNewsServices.getAllNews()
        .then((res)=>{
          setNews(res.data);
        })
      },[]);
      

      


  return (
    <Grid container>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 900 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell >Title</StyledTableCell>
            <StyledTableCell >Details</StyledTableCell>
            <StyledTableCell align="right">Location</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

            {news.map(news1=>{
              if(news1.categoryId===selectedNews){
                return(<StyledTableRow key={news1.newsId}>
                  <StyledTableCell>
                    {news1.newsId}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">{news1.newsTitle}</StyledTableCell>
                  <StyledTableCell>{news1.newsDetails}</StyledTableCell>
                  <StyledTableCell align="right">{news1.location.locationName}</StyledTableCell>
                  <StyledTableCell align="right">Actions</StyledTableCell>
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

    <Link to="/addNews" state={{selectedNews : selectedNews}} >
          <button >Add News in</button>
        </Link>
    </Grid>
  );
}
