import React from 'react';
import { Post } from './post';

export class PostIndex extends React.Component {

    listPosts(){
        if(this.props.posts){
            let posts = [];

            for(var i=0; i<this.props.posts.length; i++) {
                let posT = this.props.posts[i];
                posts.push(<Post html_content={posT.html_content} key={i}></Post>);
            }

            return posts;
        }
        return "";
    }

    render(){
        return(
            <div>
                { this.listPosts() }
            </div>
        );
    }
}


WebpackerReact.setup({PostIndex});
