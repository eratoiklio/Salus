import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './homePage.jsx';
import ContactPage from './contactPage.jsx';
import GalleryPage from './galleryPage.jsx';
import MainSection from './mainSection.jsx';
import {Router,
Route,
Link,
IndexLink,
IndexRoute,
hashHistory} from 'react-router';
document.addEventListener('DOMContentLoaded', function() {

    class App extends React.Component {
        render() {
            return <Router history={hashHistory}>
            <Route path='/' component={HomePage}>
                <IndexRoute component={MainSection}/>
                <Route path='/contact' component={ContactPage}/>
                <Route path='/gallery' component={GalleryPage}/>
                </Route>
            </Router>
        }
    }
    ReactDOM.render(
        <App/>, document.getElementById('app'));
});
