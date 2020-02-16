import React from 'react';
import { Post } from './Post';

const PostList = ({ posts }) => {
    return(
        <div>
            {posts.map((post) => {
                return(
                    <Post 
                        title={post.title}
                        author={post.author}
                        postDate={post.postDate}
                        content={post.content}
                        tags={post.tags} 
                    />
                );
            })}
        </div>
    );
};

export { PostList };
