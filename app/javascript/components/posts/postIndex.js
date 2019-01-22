import React from 'react';
import { Post } from './post';

export class PostIndex extends React.Component {

    constructor(props){
        super(props);

        this.state= {
            posts: [],
        }
    }

    listPosts(){
        if(this.state.posts){
            let posts = [];

            for(var i=0; i<this.state.posts.length; i++) {
                let posT = this.state.posts[i];
                posts.push(<Post html_content={posT.html_content} key={i}></Post>);
            }

            return posts;
        }
        return "";
    }
    componentDidMount(){
        this.agregarPost();
    }

    componentWillReceiveProps(nextProps){
        this.setState({posts: nextProps.posts});
    }

    agregarPost(){
        App.post = App.cable.subscriptions.create("PostChannel",{
            connected: ()=>{console.log("conectado a la websocket")},
            // received: (data)=>{console.log(data)},
            received: (data)=>{
                let post = JSON.parse(data.data)

                this.setState({
                    posts: [post].concat(this.state.posts),
                })
            }
        });
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
