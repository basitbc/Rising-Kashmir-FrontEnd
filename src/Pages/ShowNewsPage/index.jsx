import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ShowNewsServices from '../../Services/ShowNewsServices';
import "./index.css"
import { Link, useLocation } from "react-router-dom";
const ShowNewsPage = (props) => {
    const [news, setNews] = useState([]);
    const location = useLocation();
    const newsToShow = location.state?.data;
    console.log(newsToShow , " useLocation Hook");

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
        <Grid item className='leftBox2'>
            <Grid container className="leftInnerContainer">
                <Grid item className='left-h1' >
<Typography fontSize={"40px"} fontWeight="700" lineHeight={"48px"} textOverflow="ellipsis">{newsToShow.newsTitle}</Typography>
                </Grid>
                <Grid item className='left-p' >
                <Typography fontSize={"15px"} lineHeight="27px" color="#4F4F4F">Post by ANI on Friday, October 7, 2022</Typography>
                </Grid>
                <Grid item className='left-img'>
       <img src={newsToShow.newsDetails} alt='HeaderImage'/>
                </Grid>
                <Grid overflow={"hidden"} textOverflow="ellipsis" item className='left-des'>
                <Typography fontSize={"22px"} fontWeight="500" font-family= "Georgia,Times,Times New Roman,serif"  lineHeight={"33px"}><div dangerouslySetInnerHTML={{__html: [`${newsToShow.newsDescription}`]}} /> </Typography>
                </Grid>
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

export default ShowNewsPage