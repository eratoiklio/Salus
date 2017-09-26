import React from 'react';
import ReactDOM from 'react-dom';

export default class ContactPage extends React.Component
{
    render()
    {
        return <div className='contactArea'>
        <div className='container contactContainer' >
        <div className="contactBG"></div>
        <div className='half'>
        <div><p className='contactHeader'>mail</p><p>salus-eod@home.pl</p></div>
        <div><p className='contactHeader'>telefon</p><p>+48 609 117 227</p></div>
        <div><p className='contactHeader'>adres</p><p>Kombajnistów 19a, 04-679 Warszawa</p></div>
        <div><p className='contactHeader'>nip</p><p>575-00071-21</p></div>
        <div><p className='contactHeader'>regon</p><p>142214952</p></div>
        </div>
        </div>
        </div>

    }
}
