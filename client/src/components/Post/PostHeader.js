import React from 'react';
import { Link } from 'react-router-dom';

const PostHeader = ({ title, author, postDate }) => {
    return(
        <div>
            <a href="#">{title}</a>
            <div>
                <i className="fas fa-user">&nbsp;</i>{author}
                <span>&nbsp;| </span>{postDate}
            </div>
        </div>
    );
};

export { PostHeader };
