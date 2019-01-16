import React from 'react';
import WebpackerReact from 'webpacker-react';
import { Login } from '../components/registration/login'; // SIN DEFAULT, CON LLAVES
import CssBaseline from '@material-ui/core/CssBaseline';

import Grid from '@material-ui/core/Grid';

// Nos basamos en clases...

// La clase Registration extenderá la clase Component, es decir que será un componente

class Registration extends React.Component {

    // implementará el método render
    render(){
        //Salida del componente
        return (<CssBaseline>
          <Grid container spacing={16} justify="center">
            <Grid item xs={11} sm={6} >
            
              <Login/>
            
            </Grid>
          </Grid>
        </CssBaseline>);
          
    }
}

WebpackerReact.setup({Registration});