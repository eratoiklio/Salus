import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';

export default class ContactPage extends React.Component
{
    render()
    {
        return <div className='contactArea'>
        <div className='container contactContainer'>
    <MediaQuery minDeviceWidth={1260}>
        <div className="contactBG"></div>
        </MediaQuery>
        <div className='half'>
        <div><p className='contactHeader'>mail</p><p>salus-eod@home.pl</p></div>
        <div><p className='contactHeader'>telefon</p><p>+48 609 117 227</p></div>
        <div><p className='contactHeader'>adres</p><p>Kombajnistów 19a, 04-679 Warszawa</p></div>
        <div><p className='contactHeader'>NIP</p><p>575-00071-21</p></div>
        <div><p className='contactHeader'>regon</p><p>142214952</p></div>
        </div>
        </div>
        </div>

    }
}
