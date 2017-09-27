import React from 'react';
import ReactDOM from 'react-dom';
import {HashLink as Link } from 'react-router-hash-link';
export default class Employees extends React.Component
{
    render()
    {
        return <Link to="/gallery#galleryContainer1"><div style={{backgroundColor:"pink", width: "300px", height:"300px"}}></div></Link>
    }
}
