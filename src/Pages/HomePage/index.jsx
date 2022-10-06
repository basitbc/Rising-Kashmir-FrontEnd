import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import ShowNewsServices from '../../Services/ShowNewsServices';
import"./index.css";

const HomePage = ({categoryNews}) => {
  const [news, setNews] = useState([]);
 
 
  useEffect(() => {
    getallnewss()
   },[categoryNews]);

  //  const first = (news[0].newsTitle== undefined)? " ": news[0].newsTitle

  const getallnewss=(()=>{
    ShowNewsServices.getAllNews().then((res)=>{
      setNews(res.data);
    }).then(()=>{
      console.log(categoryNews, "category News");
    })
  });
  return (
    <>
    <Grid container sx={{width:"1200px", height:"653px", border:"1px solid", margin:"0 120px 0 120px"}}>
           <Grid item sx={{width:"580px", height:"633px", border:"1px solid blue", padding:"0 15px 0 15px"}} >
               <Grid container>
                   <Grid item sx={{width:"550px", height:"400px", border:"1px solid orange"}} >
                    <img sx={{objectFit:"cover"}} width="550px" height="400px" src="https://s.yimg.com/ny/api/res/1.2/g2aLOI_ILrPBbJmnlcEgUg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MTA-/https://s.yimg.com/os/creatr-uploaded-images/2021-09/ce93f410-1310-11ec-afd8-329152fb26d7"
                    alt='News Pic'
                />
                 </Grid>
                   <Grid item sx={{width:"580px", height:"36px", borderLeft:"8px solid #FF0000", padding:"0 15px 0 15px", margin:"6px 0 10px 0"}} >
                      <Typography fontSize={"20px"} fontWeight="600" fontFamily={"roboto"} lineHeight="36px">DEVELOPING NEWS</Typography>
                    </Grid>

                   {news.slice(1,2).map((n)=>{
                    return(
                      <>  
                   <Grid item sx={{width:"580px", height:"60px", border:"1px solid blue", margin:"0 0 0px 0"}} >
                      <Typography sx={{fontSize:"25px", fontWeight:900, lineHeight:"30px"}}>{n.newsTitle}</Typography>
                   
                    </Grid>
                    <Grid item className="descrip-box"sx={{width:"563px", height:"110px", border:"1px solid blue", margin:"0 0 15px 0"}} >
                    <Typography
                    sx={{fontSize:"15px", padding:"2px", lineHeight:"30px", margin:-1, display:"block"}}><div  dangerouslySetInnerHTML={{__html: [`${n.newsDescription}`]}}/></Typography>
                    
                    </Grid>
                    </>
                     )
                    }
                      )}
              </Grid>
         </Grid>
        <Grid item sx={{width:"580px", height:"633px", border:"1px solid blue", padding:"0 15px 0 15px"}} >
               <Grid item sx={{width:"540px", height:"220px", border:"1px solid blue", margin:"0 5px 10px 5px",display:"flex", flexDirection:"row"}} >
               <Grid item sx={{width:"270px", height:"185px", border:"1px solid blue", padding:"0 15px 0px 15px"}} >
               <Grid item sx={{width:"240px", height:"185px", border:"1px solid blue"}} >
                      <img sx={{objectFit:"cover"}} width="240px" height="185px" src='https://static.toiimg.com/photo/msid-94658245/94658245.jpg'/>
                      </Grid>
                      </Grid> 
                      <Grid item sx={{width:"270px", height:"185px", border:"1px solid blue"}} >
                      {news.slice(4,5).map((n)=>{
                    return(
                      <>  
                      <Grid item className='title2' sx={{width:"240px", height:"86px", border:"1px solid blue",margin:"0 0 8px 0"}} >
                    <Typography 
                    sx={{fontSize:"24px", padding:"2px", lineHeight:"28px",fontWeight:700, margin:-1, display:"block"}}><div  dangerouslySetInnerHTML={{__html: [`${n.newsTitle}`]}}/></Typography>
                   
                      </Grid>
                      <Grid item  className='title21' sx={{width:"240px", height:"84px", border:"1px solid blue"}} >
                      <Typography 
                    sx={{fontSize:"15px",lineHeight:"20px", margin:-3, display:"block"}}><div  dangerouslySetInnerHTML={{__html: [`${n.newsDescription}`]}}/></Typography>
                   
                      </Grid>
                      </>
                     )
                    }
                      )}

                      
                      </Grid>
              </Grid>
              <Grid item sx={{width:"540px", height:"377px", border:"1px solid blue", margin:"0 5px 0px 5px"}} >
                <Grid container sx={{display:"flex", flexDirection:"row"}}>
                <Grid item sx={{width:"267px", height:"75px", border:"1px solid blue", margin:"0 0px 15px 0px",padding:"0 15px 0 15px"}} >
                  <Grid container  >
                  <Grid item sx={{width:"100px", height:"75px", border:"1px solid blue"}} >
                      
                      </Grid>
                      <Grid item sx={{width:"132px", height:"75px", border:"1px solid blue",margin:"4 0 4 0"}} >
                      <Grid item sx={{width:"122px", height:"67px", border:"1px solid blue",margin:"4 0 4 0"}} >
                      
                  </Grid>
                  </Grid>
                  </Grid>
                  
                  </Grid>
                  <Grid item sx={{width:"267px", height:"75px", border:"1px solid blue", margin:"0 0px 15px 0px",padding:"0 15px 0 15px"}} >
                  <Grid container  >
                  <Grid item sx={{width:"100px", height:"75px", border:"1px solid blue"}} >
                      
                      </Grid>
                      <Grid item sx={{width:"132px", height:"75px", border:"1px solid blue",margin:"4 0 4 0"}} >
                      <Grid item sx={{width:"122px", height:"67px", border:"1px solid blue",margin:"4 0 4 0"}} >
                      
                  </Grid>
                  </Grid>
                  </Grid>
                  
                  </Grid>
    
                  
                </Grid>
              </Grid>
        </Grid>

    </Grid>
    

    </>

  )
}

export default HomePage