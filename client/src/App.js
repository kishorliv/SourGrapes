import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage';
import * as ROUTES from './constants/routes';
import { BlogPage } from './pages/BlogPage';


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
    title: "hjdf",
    author: "Kisser",
    postDate: "24-09-2019",
    content: "slkjf dfsdsdf sdfsdfsd sdfsdf sdfsdf sdfs lkasjdfasl dfjlas dfas skfjlaks skdfj asfj lasfj alskdjf laskdfjklas dflkjas df asdlkf ",
    tags: ['nodejs', 'people']
  }
];



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      //posts: null, update from api later
      posts: posts
    };
  }

  componentDidMount(){
    // call api to fetch posts data
  }

  render(){
    return (
      <div>
        <Switch>
          <Route exact path={ROUTES.HOME} render={() => (<HomePage posts={this.state.posts} />)} />
          <Route path='/:blogTitle' render={() => (<BlogPage />)} />
          <Route path='' render={() => (<p>Sorry, page not found.</p>)} />
        </Switch>
      </div>
      );
  }

}

export default App;
