
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';
import MainSection from './mainSection.jsx';

document.addEventListener('DOMContentLoaded', function(){



    class App extends React.Component {
        render() {
            return <div><Header /><MainSection/></div>
        }
    }
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
