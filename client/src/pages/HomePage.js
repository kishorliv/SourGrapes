import React from 'react';
import { PostList } from '../components/Post';

const HomePage = () => {

    const posts = [
        {
          postId: 541,
          title: "Why tech is not so useful these days.",
          author: "Asmita Gaire",
          postDate: "24-09-2019",
          content: "slkjf aslkfdjlas lksj fs a vlkjsdf lkasjdfasl dfjlas dfas skfjlaks skdfj asfj lasfj alskdjf laskdfjklas dflkjas df asdlkf ",
          tags: ['tech', 'nodejs', 'people']
        },
        {
          postId: 120,
          title: "hjdf djf kdfhjk",
          author: "Kisser",
          postDate: "24-09-2019",
          content: "slkjf dfsdsdf sdfsdfsd sdfsdf sdfsdf sdfs lkasjdfasl dfjlas dfas skfjlaks skdfj asfj lasfj alskdjf laskdfjklas dflkjas df asdlkf ",
          tags: ['nodejs', 'people']
        }
      ];

    return(
        <div className="container border">
            <p>SourGrapes blog</p>
            <PostList posts={posts} />
      </div>
  
    );
};

export { HomePage };
