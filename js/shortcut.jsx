import React from 'react';
import ReactDOM from 'react-dom';
import {HashLink as Link} from 'react-router-hash-link';
export default class Shortcut extends React.Component
{
    render()
    {let btn;
        if(this.props.insideLink!=null)
        {
            btn =<Link to={this.props.insideLink}>
            <div className="btn">Zobacz galerię</div>
            </Link>
        }

        return <article className={this.props.parentClass}>
        <img src={this.props.img}/>
        <h1>{this.props.title}</h1>
        <p>{this.props.short}</p>
        {btn}
        </article>;;
    }
}
