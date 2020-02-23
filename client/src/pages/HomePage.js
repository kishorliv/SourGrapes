import React from 'react';
import { PostList } from '../components/Post';

const HomePage = ({ posts }) => {
    return(
        <div className="container border">
            <p>SourGrapes blog</p>
            <PostList posts={posts} />
      </div>
  
    );
};

export { HomePage };
