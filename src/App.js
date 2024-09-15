import React, { useEffect, useState } from 'react';
import './App.css';
import  Movieapp, { About, Home, Trailer, AddMovie } from './components/movieapp'
import popup from './components/popup';
import './popup.css'
import './Basicform.js';
import { Routes, Route,Link} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate, Navigate} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Basicform } from './Basicform';




export default function App(){

  const[movi,setMovi]=useState([]);



  const navigate=useNavigate();

  const [mode, setMode]=useState('light');
  const darkTheme = createTheme({
    palette: {
      mode:mode,
    },
  });

  return(

    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <div className="App">

    <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movie App
          </Typography>
        <Button color="inherit" onClick={()=>navigate("/")}>Home</Button>
        <Button color="inherit" onClick={()=>navigate("/about")}>About</Button>
        <Button color="inherit" onClick={()=>navigate("/movies")}>Movies</Button>

          <Button 
          startIcon={mode==="dark"?<Brightness7Icon />:<Brightness4Icon />}
          color="inherit" onClick={()=>setMode(mode==="dark"?"light":"dark")}>
            {mode==="dark"?"light":"dark"}mode</Button>
        </Toolbar>
      </AppBar>

<Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/movies" element={<Movieapp />} />
    <Route path="/movies/:id" element={<Trailer />} />
    <Route path="/form" element={<Basicform/>} />

    </Routes>
    {/* const router = createBrowserRouter([ */}
  {/* {
    path : "/",
    element: <div>Hello world!</div>,
  }, */}
{/* ]); */}

</div>

</ThemeProvider>

 
  )
}







  







