import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import ReactDOM from 'react-dom/client';
import "./index.css"

export default function ShowNewsDialog({newsToUpdate, openShowDialog, setOpenShowDialog}) {

    // const div1 = document.getElementById("div").innerHTML(`"${newsToUpdate.newsDescription}"`)
    // ReactDOM.render(<p>Hello</p>, document.getElementById('div'));
  
  const handleClose = () => {
    setOpenShowDialog(false);
    console.log(newsToUpdate.location.locationName," Show Location");
  };

  const locationtitle = (newsToUpdate.location==null ? " " : newsToUpdate.location.locationName );

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (openShowDialog) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openShowDialog]);

  return (
    <div>
      <Dialog
        open={openShowDialog}
        onClose={handleClose}
        scroll="body"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">   
          <DialogContentText>
          <div  dangerouslySetInnerHTML={{__html: [`<h3>Location: <span class="locationtitle">${locationtitle}</span></h3>`]}}/>
         </DialogContentText>
          </DialogTitle>
        <DialogContent dividers='paper'>
         <DialogContentText>
         <div dangerouslySetInnerHTML={{__html: [`<h1>${newsToUpdate.newsTitle}</h1>`]}} /> 
         </DialogContentText>
         <DialogContentText>
         <div dangerouslySetInnerHTML={{__html: [`${newsToUpdate.newsDescription}`]}} /> 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
