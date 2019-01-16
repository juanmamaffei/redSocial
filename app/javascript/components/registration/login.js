import React from 'react';
import Formsy from 'formsy-react';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';


const styles = {
    card: {
        margin: '20px',
        padding: '10px',
        textAlign: 'center',
    },
    button: {
        width: '80%',
        backgroundColor: 'lightBlue',
        margin: '10px',
    },
    textBox: {
        width: '80%',
    }
}
export class Login extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            canSubmit: true, email: '', password: ''
        }
        this.disableSubmitBtn = this.disableSubmitBtn.bind(this);
        this.enableSubmitBtn = this.enableSubmitBtn.bind(this);
        this.mostrarSubmit = this.mostrarSubmit.bind(this);
    }

    enableSubmitBtn(){
        this.setState({ canSubmit: true });
    }

    disableSubmitBtn(){
        this.setState({ canSubmit: false });
    }

    syncField(evento, campo){
        let element = evento.target;
        let value = element.value;

        let jS = {};
        jS[campo] = value;

        this.setState(jS);

    }
    mostrarSubmit(){
        console.log(this.state.email);
        console.log(this.state.password);
    }

    render(){
        //Salida del componente
        
        return (
            <Card style={styles.card}>
                <Formsy onSubmit={this.submit} onValid={()=>this.enableSubmitBtn()} onInvalid={()=>this.disableSubmitBtn()}>
                    <h1>Red social</h1>
                    <div>
                        <TextField label="Correo electrónico" style={styles.textBox} required type="email" name="email" onChange={ (e)=> this.syncField(e, "email") }></TextField>
                    </div>
                    <div>
                        <TextField label="Contraseña" style={styles.textBox} required type="password" name="password" onChange={ (e)=> this.syncField(e, "password") }></TextField>
                    </div>
                    <div>
                        <Button disabled={!this.state.canSubmit} style={styles.button} type="submit">
                            Ingresar
                        </Button>
                    </div>
                </Formsy>
            </Card>  
        )
    }
}
