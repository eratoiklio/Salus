import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';
import MainSection from './mainSection.jsx';
import Footer from './footer.jsx';





    export default class HomePage extends React.Component {
        render() {
            return <div><Header /><MainSection/><Footer/></div>
        }
    }
