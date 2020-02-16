import React from 'react';
import { Link } from 'react-router-dom';

const PostHeader = ({ title, author, postDate }) => {
    const link = '/'+title;
    return(
        <div>
            <Link to={link}>{title}</Link>
            <div>
                <i className="fas fa-user">&nbsp;</i>{author}
                <span>&nbsp;| </span>{postDate}
            </div>
        </div>
    );
};

export { PostHeader };
