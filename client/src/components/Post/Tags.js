import React from 'react';
import { Link } from 'react-router-dom';

const Tags = ({ tags }) => {
    return(
        <div>
            {tags.map((tag) => {
                return <a href="#">#{tag}&nbsp;&nbsp;</a>
            })}
        </div>
    );
};

export { Tags };
