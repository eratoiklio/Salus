
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';

document.addEventListener('DOMContentLoaded', function(){



    class App extends React.Component {
        render() {
            return <Header />
        }
    }
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
