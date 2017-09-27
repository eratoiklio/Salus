import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
class Shortcut extends React.Component
{
    render()
    {
        return <article className="shortcut"><img src={this.props.img}/><h1>{this.props.title}</h1><p>{this.props.short}</p></article>;
    }
}
export default class MainSection extends React.Component
{
    render()
    {
        return <div className="mainSection">
        <div className="container">
        <Shortcut title="oferta" img="img/art1.jpg" short="akdsljfg ajngjakngjka a gjanregan arjgnaejg arneuanae ,asdiawg kajriegjfdg kasjirngakjg asgnakjngr ajgnrjnga"></Shortcut>
        <Shortcut title="badania projektowe" img="./img/art1.jpg" short="akdsljfg ajngjakngjka a gjanregan arjgnaejg arneuanae ,asdiawg kajriegjfdg kasjirngakjg asgnakjngr ajgnrjnga"></Shortcut>
        <Link to="/employees"><Shortcut title="o personelu " img="./img/art1.jpg" short="akdsljfg ajngjakngjka a gjanregan arjgnaejg arneuanae ,asdiawg kajriegjfdg kasjirngakjg asgnakjngr ajgnrjnga"></Shortcut></Link>
        <Link to="/gallery"><Shortcut title="galeria" img="./img/art1.jpg" short="akdsljfg ajngjakngjka a gjanregan arjgnaejg arneuanae ,asdiawg kajriegjfdg kasjirngakjg asgnakjngr ajgnrjnga"></Shortcut></Link>
        <Link to="/contact"><Shortcut title="kontakt" img="./img/art1.jpg" short="akdsljfg ajngjakngjka a gjanregan arjgnaejg arneuanae ,asdiawg kajriegjfdg kasjirngakjg asgnakjngr ajgnrjnga"></Shortcut></Link>
        </div>
        </div>
    }
}
