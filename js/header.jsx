import React from 'react';
import ReactDOM from 'react-dom';

class HeaderMenu extends React.Component
{
    render()
    {

        return(
            <ul className="headerMenu">
            <li>misja</li>
            <li>oferta</li>
            <li>personel</li>
            <li>badania projektowe</li>
            <li>galeria</li>
            <li>kontakt</li>
            </ul>
        )

    }
}
export default class Header extends React.Component {
    render() {
        const style = {
            // minHeight: '100%',
            // minWidth: '100%',
            width: '100vw',
            height: '16.667vw',
background: 'pink',
            background: 'url("img/header-image.jpg")',
backgroundPosition: 'center',
backgroundRepeat: 'no-repeat',
backgroundSize :'contain',


        };
        console.log();
        return (
            <div style={style}><HeaderMenu/></div>
        );
    }
}
