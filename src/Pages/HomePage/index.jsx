import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import ShowNewsServices from '../../Services/ShowNewsServices';
import"./index.css";

const HomePage = () => {
  const [news, setNews] = useState([]);
 
 
  useEffect(() => {
    getallnewss()
   },[]);

  //  const first = (news[0].newsTitle== undefined)? " ": news[0].newsTitle

  const getallnewss=(()=>{
    ShowNewsServices.getAllNews().then((res)=>{
      setNews(res.data);
    })
  });
  return (
    <>
    <Grid container sx={{width:"1200px", height:"653px", margin:"25px 120px 0 120px"}}>
           <Grid item sx={{width:"580px", height:"633px" , padding:"0 15px 0 15px"}} >
           {news.slice(0,1).map((n)=>{
                    return(
                      <> 
               <Grid container>
                   <Grid item sx={{width:"550px", height:"400px", border:"1px solid orange"}} >
                    <img sx={{objectFit:"cover"}} width="550px" height="400px" src={n.newsDetails}
                    alt='News Pic'
                />
                 </Grid>
                   <Grid item sx={{width:"580px", height:"36px", borderLeft:"8px solid #FF0000", padding:"0 15px 0 15px", margin:"6px 0 10px 0"}} >
                      <Typography fontSize={"20px"} fontWeight="600" fontFamily={"roboto"} lineHeight="36px">DEVELOPING NEWS</Typography>
                    </Grid>

                    
                   <Grid item sx={{width:"580px", height:"60px" , margin:"0 0 0px 0"}} >
                      <Link to={"/news"} state={{data: n}} style={{textDecoration: "none", color:"black"}} >
                      <Typography  sx={{fontSize:"25px", fontWeight:900, lineHeight:"30px"}}>{n.newsTitle}</Typography>
                      </Link>
                   
                    </Grid>
                    <Grid item className="descrip-box"sx={{width:"563px", height:"110px" , margin:"0 0 15px 0"}} >
                    <Typography
                    sx={{fontSize:"15px", lineHeight:"30px", display:"inline"}}><div  dangerouslySetInnerHTML={{__html: [`${n.newsDescription}`]}}/></Typography>
                    
                    </Grid>
                    </Grid>
                    </>
                     )
                    }
                      )}
         </Grid>
        <Grid item sx={{width:"590px", height:"633px" , padding:"0 0px 0 0px"}} >
        {news.slice(7,8).map((n)=>{
                    return(
                      <> 
               <Grid item sx={{width:"540px", height:"185px" , margin:"0 5px 10px 5px",display:"flex", flexDirection:"row"}} >
               <Grid item sx={{width:"270px", height:"185px" , padding:"0 15px 0px 15px"}} >
               <Grid item sx={{width:"240px", height:"185px" }} >
                      <img sx={{objectFit:"cover"}} width="240px" height="185px" src={n.newsDetails}/>
                      </Grid>
                      </Grid> 
                      <Grid item sx={{width:"270px", height:"185px" }} >
                       
                      <Grid item className='title2' sx={{width:"240px", height:"86px" ,margin:"0 0 8px 0"}} >
                      <Link to={"/news"} state={{data: n}} style={{textDecoration: "none", color:"black"}} >
                    <Typography 
                    sx={{fontSize:"24px",height:"auto", width:"auto", lineHeight:"28px",fontWeight:700, display:"inline"}}><div  dangerouslySetInnerHTML={{__html: [`${n.newsTitle}`]}}/></Typography>
                   </Link>

                      </Grid>
                      <Grid item  className='title21' sx={{width:"240px", height:"84px" }} >
                      <Link to={"/news"} state={{data: n}} style={{textDecoration: "none", color:"black"}} >
                      <Typography 
                    sx={{fontSize:"15px",lineHeight:"20px",height:"auto", width:"auto", display:"inline"}}><div  dangerouslySetInnerHTML={{__html: [`${n.newsDescription}`]}}/></Typography>
                   </Link>
                      </Grid>
                     
                      
                      </Grid>
                      
              </Grid>
              </>
              )
             }
               )}


              <Grid item sx={{width:"550px", height:"36px", borderLeft:"8px solid #FF0000", padding:"0 15px 0 15px", margin:"10px 0 10px 16px"}} >
                      <Typography fontSize={"20px"} fontWeight="600" fontFamily={"roboto"} lineHeight="36px">BREAKING</Typography>
               </Grid>
              <Grid item sx={{width:"560px", height:"377px" , margin:"0 5px 0px 5px", display:"flex", flexDirection:"row", overflow:"hidden", flexWrap:"wrap"}} >
              
                <Grid container sx={{display:"flex", flexDirection:"row"}}>
                {
                          news.slice(0,8).map((n1)=>{
                            return(
    <>
                <Grid item sx={{width:"260px", height:"75px" , margin:"0 0px 15px 0px",padding:"0 5px 0 15px"}} >
                  <Grid container  >
                  <Grid item sx={{width:"100px", height:"75px" , overflow:"hidden", textOverflow:"ellipsis"}} >
                  <img sx={{objectFit:"cover"}} width="100px" height="75px" src={n1.newsDetails}/>
                      </Grid>
                      <Grid item sx={{width:"132px", height:"75px" ,margin:"4px 0 4px 0"}} >
                        
                              <Grid item sx={{width:"122px", height:"67px" ,margin:"4px 0 4px 15px",  overflow:"hidden", textOverflow:"ellipsis"}} >
                              <Link to={"/news"} state={{data: n1}} style={{textDecoration: "none", color:"black"}} >
                                   <Typography 
                    sx={{fontSize:"14px",height:"auto", width:"auto", lineHeight:"16.8px",fontWeight:700, display:"inline"}}><div  dangerouslySetInnerHTML={{__html: [`${n1.newsTitle}`]}}/></Typography>
                   </Link>
                               </Grid>   
                  </Grid>
                  </Grid>
                  </Grid>
                  </>
                )
              })
            }


{/* 
                       {
                          news.slice(0,4).map((n1)=>{
                            return(
                              <>
                  <Grid item sx={{width:"260px", height:"75px" , margin:"0 0px 15px 0px",padding:"0 5px 0 15px"}} >
                  <Grid container  >
                  <Grid item sx={{width:"100px", height:"75px" }} >
                  <img sx={{objectFit:"cover", borderRadius:"10px"}} width="100px" height="75px" src={n1.newsDetails}/>
                      </Grid>
                      <Grid item sx={{width:"132px", height:"75px" ,margin:"4px 0 4px 0"}} >
                        
                              <Grid item sx={{width:"122px", height:"67px" ,margin:"4px 0 4px 15px"}} >
                                   <Typography 
                    sx={{fontSize:"14px",height:"auto", width:"auto", lineHeight:"16.8px",fontWeight:700, display:"inline"}}><div  dangerouslySetInnerHTML={{__html: [`${n1.newsTitle}`]}}/></Typography>
                   
                               </Grid>   
                  </Grid>
                  </Grid>
                  </Grid>
                </>
                )
              })
            } */}
            </Grid>
              </Grid>
        </Grid>

    </Grid>
    

    </>

  )
}

export default HomePage