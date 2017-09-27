import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';
import Footer from './footer.jsx';
import ContactPage from './contactPage.jsx';
import GalleryPage from './galleryPage.jsx';
import MainSection from './mainSection.jsx';
import Employees from './employees.jsx';
import {BrowserRouter as Router,
Route,
IndexLink,
IndexRoute,
hashHistory,
Switch
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { HashLink as Link } from 'react-router-hash-link';

document.addEventListener('DOMContentLoaded', function() {

    class App extends React.Component {
        render() {
            // const history = createHistory();
    //         const HomePage =() =>(
    //       <Switch>
    //         <Route exact path='/' component={MainSection} />
    //         <Route path='/employees' component={Employees}/>
    //         <Route path='/contact' component={ContactPage}/>
    //         <Route path='/gallery' component={GalleryPage}/>
    //       </Switch>
    //   )
      return <Router>
      <div>
      <Route path='/' component={Header} />
      <Switch>
        <Route exact path='/' component={MainSection} />
        <Route path='/employees' component={Employees}/>
        <Route path='/contact' component={ContactPage}/>
        <Route path='/gallery' component={GalleryPage}/>
      </Switch>
       <Route path='/' component={Footer} />
     </div>
     </Router>

        }
    }

    ReactDOM.render(
        <App/>, document.getElementById('app'));
});
