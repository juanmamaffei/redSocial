import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import reqwest from 'reqwest';
import { markdown } from 'markdown';

export class NewPost extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            html_content: '',
            markdown_content: '',
            error: '',
            
        };
        this.nuevoPost = this.nuevoPost.bind(this);
    }

    nuevoPost(e){
        e.preventDefault();
        reqwest({
            url: '/posts.json',
            method: 'POST',
            data: {
                post:{
                    user_id: this.state.user,
                    html_content: markdown.toHTML(this.state.markdown_content),
                    markdown_content: this.state.markdown_content,
                },
                authenticity_token: window.tkS2331458344q,
            }}
        ).then(datos => this.props.agregarPost(datos)).catch(console.log);
        // LIMPIAR FORM
        this.setState({markdown_content: " "})
    }

    syncField(evento, campo){
        let element = evento.target;
        let value = element.value;

        let jS = {};
        jS[campo] = value;

        this.setState(jS);
        // console.log(this.state);

    }

    render(){
        return(<div>

            <Card className="mar">
                <form onSubmit={this.nuevoPost}>
                    <CardContent>
                        <TextField onChange={ (e)=> this.syncField(e, 'markdown_content') }
                            placeholder="Escribí lo que querés compartir..."
                            className="cuadroPublica"
                            multiline
                            rows="6"
                            value = {this.state.markdown_content}
                        />
                    </CardContent>
                    <CardActions>
                        <Button className="btnPublicar" type="submit">Publicar</Button>
                    </CardActions>
                </form>
            </Card>
        </div>);
    }
}

WebpackerReact.setup({NewPost});