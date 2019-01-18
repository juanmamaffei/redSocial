import React from 'react';
import Formsy from 'formsy-react';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import { Base } from './base';
import reqwest from 'reqwest';


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
export class SignUp extends Base {

    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(e){
        e.preventDefault();
        // validaciones!!!
        if(this.state.password == this.state.passwordConfirmation){
            reqwest({
                url: '/users.json',
                method: 'POST',
                data: {
                    user:{
                        email: this.state.email,
                        password: this.state.password,
                        passwordConfirmation: this.state.passwordConfirmation,
                        
                    }
                },
                headers: {
                    'X-CSRF-TOKEN': window.tkS2331458344q,
                }
            }).then(data=>{console.log(data);this.reload();}).catch(err => this.handleError(err));
        }
        else{
            this.setState({errors: "Las contraseñas no coinciden."})
        }
    }
    handleError(err){
        const errorMess = JSON.parse(err.response).errors;

        let errRes = [];

        for(let key in errorMess){
            errRes.push(<span>{errorMess[key]}<br></br></span>);
        }

        this.setState({errors: errRes});
    }
    render(){
        //Salida del componente
        // onSubmit={ } onValid={()=>this.enableSubmitBtn()} onInvalid={()=>this.disableSubmitBtn()}
        return (
            <Card style={styles.card}>
                <form onSubmit={this.submit}> 
                    <h1>Red social</h1>
                    <h2>Crear cuenta</h2>
                    <h3>{ this.state.errors }</h3>
                    <div>
                        <TextField label="Correo electrónico" style={styles.textBox} required type="email" name="email" onChange={ (e)=> this.syncField(e, "email") }></TextField>
                    </div>
                    <div>
                        <TextField label="Contraseña" style={styles.textBox} required type="password" name="password" onChange={ (e)=> this.syncField(e, "password") }></TextField>
                    </div>
                    <div>
                        <TextField label="Confirmar contraseña" style={styles.textBox} required type="password" name="passwordConfirmation" onChange={ (e)=> this.syncField(e, "passwordConfirmation") }></TextField>
                    </div>
                    <div>
                        <Button disabled={!this.state.canSubmit} style={styles.button} type="submit">
                            Crear cuenta
                        </Button>
                    </div>
                    <div>
                         Ya tengo cuenta, <a href="#" onClick={this.props.toggle} className="btn">Iniciar Sesión</a>
                    </div>
                    <div>
                        <a href="#">Entrar con Google</a>
                    </div>
                    <div>
                        <a href="#">Entrar con Facebook</a>
                    </div>
                </form>
            </Card>  
        )
    }
}
