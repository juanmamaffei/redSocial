import React from 'react';
import WebpackerReact from 'webpacker-react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

class Navigation extends React.Component{
    constructor(props){
        super(props);
        this.state={
           // estado
        }
      }
     


    render(){
        
        return(<div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Red Social
                    </Typography>
                    <div className="botonera">
                        <a data-method="delete" href="/users/sign_out">
                            Cerrar sesión
                        </a>
                    </div>

                </Toolbar>
            </AppBar>
        </div>);
    }
}

WebpackerReact.setup({Navigation});