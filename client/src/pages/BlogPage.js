import React from 'react';
import { Route } from 'react-router-dom';

import { Post } from '../components/Post';

//// for testing purpose only, remove this after calling the api
const post =     {
    postId: 120,
    title: "hjdf",
    author: "Kisser",
    postDate: "24-09-2019",
    content: "slkjf dfsdsdf sdfsdfsd sdfsdf sdfsdf sdfs lkasjdfasl dfjlas dfas skfjlaks skdfj asfj lasfj alskdjf laskdfjklas dflkjas df asdlkf ",
    tags: ['nodejs', 'people']
  };

class BlogPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            post: null 
        };
    }

    componentDidMount(){
        // call api to fetch post by title
        this.setState({title: 'hjdf'});
    }

    render(){
        const path = '/' + this.state.title;
        console.log(path);
        return(
            <Route path={path} render={() => { 
                return(        
                <Post 
                    title={post.title}
                    author={post.author}
                    postDate={post.postDate}
                    content={post.content}
                    tags={post.tags} 
                />
            )}} 
            />
        );
    }
}

export { BlogPage };
