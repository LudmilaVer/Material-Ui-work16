import React from 'react';
import { AppBar, Toolbar, Typography, Container, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Material UI Dialog Example
          </Typography>
          <Button color="inherit" onClick={handleClickOpen}>Open Dialog</Button>
        </Toolbar>
      </AppBar>

      <Container>
        <Typography variant="body1" component="p" gutterBottom>
          Click the button to open the dialog.
        </Typography>
      </Container>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;