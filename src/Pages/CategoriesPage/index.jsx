import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ShowNewsServices from '../../Services/ShowNewsServices';
import "./index1.css"
import { Link, useLocation } from "react-router-dom";
const CategoriesPage = (props) => {
    const [news, setNews] = useState([]);
    const location = useLocation();
    const newsToShow = location.state?.data;
    console.log(newsToShow , " useLocation NEWS TO SHOW");

    useEffect(() => {
        getallnewss()
       },[]);
    
      const getallnewss=(()=>{
        ShowNewsServices.getAllNews().then((res)=>{
          setNews(res.data);
        })
      });

  return (
    <Grid className="outerGrid" container >
        <Grid container className="outerGrid2" >
        <Grid item className='leftBox1'>
            <Grid container className="leftInnerContainer" >
                {news.map(news1=>{
                    if(news1.categoryId === newsToShow.categoryId){
                        return(
                    <Grid className="categoryBox" container height={"353px"} width={"336px"} margin={"15px 10px 15px 10px"}   borderRadius={"10px"}>
                    <Grid item height={"300px"} width={"336px"}  borderRadius={"10px"}>
                        <img sx={{objectFit:"cover"}}  src={news1.newsDetails} alt="NewsPic" height="100%" width="100%" borderRadius={"10px"} />
                    </Grid>
                    <Grid className="categoryBox-title" item height={"83px"} width={"296px"} bgcolor="#FFFFFF" overflow={"hidden"} textOverflow="ellipsis"  margin="-40px 20px 0 20px" >
                        <Grid  item  height={"83px"} width={"296px"} marginTop="10px" textAlign={"center"}  overflow={"hidden"} textOverflow="ellipsis" >
                        <Link to={"/news"} state={{data: news1}} style={{textDecoration: "none", color:"black"}} >
                    <Typography display={"inline"}  fontSize={"22px"} fontWeight={700} lineHeight="33px" color={"#20247B"}  >{news1.newsTitle}</Typography>
                        </Link>
                        </Grid>
                         </Grid>
                </Grid>
                        )
                    }
                return(" ")
                })}
            </Grid> 
        </Grid>




        <Grid item className='rightBox'>
            <Grid container className="rightBoxContainer2">

            
        <Grid item className='right-header' >
        <Grid item className='right-header-h3' >
            Latest Post
            </Grid>
            </Grid>
            <Grid container className="rightInnerContainer">
            {news.map((news1)=>{
                        if(news){
                            return(
                 <Grid container className='right-inner-box' >
                <Grid item className='right-i-leftbox'>
                <Grid item className='right-title'>
                <Link to={"/news"} state={{data: news1}} style={{textDecoration: "none", color:"black"}} >

                    <Typography fontSize={"15px"} lineHeight="22.5px" fontWeight={"600"} color="#20247B">
                {news1.newsTitle}
                    </Typography>
                </Link>
                         </Grid>
                         <Grid item className='right-date'>
                         <Typography fontSize={"12px"}fontFamily="'Poppins', sans-serif" lineHeight="21.6px" fontWeight={"600"} color="#6F8BA4">
                         FRIDAY, OCTOBER 7, 2022
                    </Typography>
                         </Grid>
                         
                        </Grid>
                        <Grid item className='right-i-rightbox'>
                        <Grid item className='right-img'>
                                    <img src={news1.newsDetails} alt="smallimg" />
                             </Grid>
                        </Grid>
                </Grid>
                            )
                        }
                        return("")
                    })}
                
                
                
            </Grid>
            </Grid>
        </Grid>


        </Grid>
    </Grid>
  )
}

export default CategoriesPage