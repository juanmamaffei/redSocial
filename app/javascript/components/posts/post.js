import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';

import renderHTML from 'react-render-html';

export class Post extends React.Component{
    render(){
        return(
            <Card className="mar">
                <CardHeader avatar={<Avatar>HM</Avatar>}/>
                <CardContent>
                    {renderHTML(this.props.html_content)}
                </CardContent>
                <CardActions></CardActions>
            </Card>
        );
    }
}

WebpackerReact.setup({Post});