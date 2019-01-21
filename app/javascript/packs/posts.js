import React from 'react';
import WebpackerReact from 'webpacker-react';
// import { Post } from '../components/posts/post';
import { PostIndex } from '../components/posts/postIndex';
import { NewPost } from '../components/posts/newPost';
import reqwest from 'reqwest';

export class Posts extends React.Component{

    constructor(props){
        super(props);
        this.state={
            posts:[]
        }
        this.agregarPost = this.agregarPost.bind(this);
    }
    componentDidMount(){
        this.obtenerPosts();
    }
    obtenerPosts(){
        reqwest({
            url: '/posts.json',
            method: 'GET',
        }).then(posts =>{this.setState({posts: posts})});
    }
    agregarPost(p){
        this.setState(
            {posts: [p].concat(this.state.posts)}
        );
    }
    render(){
        return(
            <div>
                <NewPost agregarPost={this.agregarPost}></NewPost>
                <PostIndex posts={this.state.posts}/>
            </div>
        );
    }
}

WebpackerReact.setup({Posts});