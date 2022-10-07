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
    <Grid container sx={{width:"1200px", height:"653px", margin:"25px 120px 0 120px"}}>
           <Grid item sx={{width:"580px", height:"633px" , padding:"0 15px 0 15px"}} >
               <Grid container>
                   <Grid item sx={{width:"550px", height:"400px", border:"1px solid orange"}} >
                    <img sx={{objectFit:"cover"}} width="550px" height="400px" src="http://admin.risingkashmir.com/Source/News/3cd0d7c7-8a60-4418-8ff1-b171a3252d48.jpg"
                    alt='News Pic'
                />
                 </Grid>
                   <Grid item sx={{width:"580px", height:"36px", borderLeft:"8px solid #FF0000", padding:"0 15px 0 15px", margin:"6px 0 10px 0"}} >
                      <Typography fontSize={"20px"} fontWeight="600" fontFamily={"roboto"} lineHeight="36px">DEVELOPING NEWS</Typography>
                    </Grid>

                   {news.slice(11,12).map((n)=>{
                    return(
                      <>  
                   <Grid item sx={{width:"580px", height:"60px" , margin:"0 0 0px 0"}} >
                      <Typography sx={{fontSize:"25px", fontWeight:900, lineHeight:"30px"}}>{n.newsTitle}</Typography>
                   
                    </Grid>
                    <Grid item className="descrip-box"sx={{width:"563px", height:"110px" , margin:"0 0 15px 0"}} >
                    <Typography
                    sx={{fontSize:"15px", lineHeight:"30px", display:"inline"}}><div  dangerouslySetInnerHTML={{__html: [`${n.newsDescription}`]}}/></Typography>
                    
                    </Grid>
                    </>
                     )
                    }
                      )}
              </Grid>
         </Grid>
        <Grid item sx={{width:"590px", height:"633px" , padding:"0 0px 0 0px"}} >
               <Grid item sx={{width:"540px", height:"185px" , margin:"0 5px 10px 5px",display:"flex", flexDirection:"row"}} >
               <Grid item sx={{width:"270px", height:"185px" , padding:"0 15px 0px 15px"}} >
               <Grid item sx={{width:"240px", height:"185px" }} >
                      <img sx={{objectFit:"cover"}} width="240px" height="185px" src='https://kashmirindepth.com/wp-content/uploads/2019/09/apple_kashmir_660x450_091019014351.jpg'/>
                      </Grid>
                      </Grid> 
                      <Grid item sx={{width:"270px", height:"185px" }} >
                      {news.slice(7,8).map((n)=>{
                    return(
                      <>  
                      <Grid item className='title2' sx={{width:"240px", height:"86px" ,margin:"0 0 8px 0"}} >
                    <Typography 
                    sx={{fontSize:"24px",height:"auto", width:"auto", lineHeight:"28px",fontWeight:700, display:"inline"}}><div  dangerouslySetInnerHTML={{__html: [`${n.newsTitle}`]}}/></Typography>
                   
                      </Grid>
                      <Grid item  className='title21' sx={{width:"240px", height:"84px" }} >
                      <Typography 
                    sx={{fontSize:"15px",lineHeight:"20px",height:"auto", width:"auto", display:"inline"}}><div  dangerouslySetInnerHTML={{__html: [`${n.newsDescription}`]}}/></Typography>
                   
                      </Grid>
                      </>
                     )
                    }
                      )}
                      
                      </Grid>
                      
              </Grid>
              <Grid item sx={{width:"550px", height:"36px", borderLeft:"8px solid #FF0000", padding:"0 15px 0 15px", margin:"10px 0 10px 16px"}} >
                      <Typography fontSize={"20px"} fontWeight="600" fontFamily={"roboto"} lineHeight="36px">BREAKING</Typography>
               </Grid>
              <Grid item sx={{width:"560px", height:"377px" , margin:"0 5px 0px 5px", display:"flex", flexDirection:"row", overflow:"hidden", flexWrap:"wrap"}} >
              {
                          news.slice(0,4).map((n1)=>{
                            return(
    <>
                <Grid container sx={{display:"flex", flexDirection:"row"}}>
                  <Grid item sx={{width:"260px", height:"75px" , margin:"0 0px 15px 0px",padding:"0 5px 0 15px"}} >
                  <Grid container  >
                  <Grid item sx={{width:"100px", height:"75px" }} >
                  <img sx={{objectFit:"cover"}} width="100px" height="75px" src='http://admin.risingkashmir.com/Source/News/7161ba3d-0437-4529-bc2f-830f2d5d63d4.jpeg'/>
                      </Grid>
                      <Grid item sx={{width:"132px", height:"75px" ,margin:"4px 0 4px 0"}} >
                        
                              <Grid item sx={{width:"122px", height:"67px" ,margin:"4px 0 4px 15px"}} >
                                   <Typography 
                    sx={{fontSize:"14px",height:"auto", width:"auto", lineHeight:"16.8px",fontWeight:700, display:"inline"}}><div  dangerouslySetInnerHTML={{__html: [`${n1.newsTitle}`]}}/></Typography>
                   
                               </Grid>   
                  </Grid>
                  </Grid>
                  </Grid>
                  <Grid item sx={{width:"260px", height:"75px" , margin:"0 0px 15px 0px",padding:"0 5px 0 15px"}} >
                  <Grid container  >
                  <Grid item sx={{width:"100px", height:"75px" }} >
                  <img sx={{objectFit:"cover", borderRadius:"10px"}} width="100px" height="75px" src='http://admin.risingkashmir.com/Source/News/51a2a0e7-ac0b-4ed8-b535-5d555c0dcb78.jpg'/>
                      </Grid>
                      <Grid item sx={{width:"132px", height:"75px" ,margin:"4px 0 4px 0"}} >
                        
                              <Grid item sx={{width:"122px", height:"67px" ,margin:"4px 0 4px 15px"}} >
                                   <Typography 
                    sx={{fontSize:"14px",height:"auto", width:"auto", lineHeight:"16.8px",fontWeight:700, display:"inline"}}><div  dangerouslySetInnerHTML={{__html: [`${n1.newsTitle}`]}}/></Typography>
                   
                               </Grid>   
                  </Grid>
                  </Grid>
                  </Grid>
                </Grid>
                </>
                )
              })
            }
              </Grid>
        </Grid>

    </Grid>
    

    </>

  )
}

export default HomePage