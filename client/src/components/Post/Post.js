import React, { Component } from 'react';
import './style.css';
import { PostContent } from './PostContent';
import { PostHeader } from './PostHeader';
import { Tags } from './Tags';


const Post = ({ title, author, postDate, content, tags}) => {
    return(
        <div className="container border">
            <PostHeader title={title} author={author} postDate={postDate} />
            <PostContent content={content} />
            <Tags tags={tags} />
        </div>
    );
}

export { Post };
