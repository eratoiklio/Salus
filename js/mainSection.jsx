import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Shortcut from './shortcut.jsx';
export default class MainSection extends React.Component
{
    render()
    {
        return <div className="mainSection">
        <div className="container">
        <Link to="/"><Shortcut parentClass="shortcut" title="oferta" img="img/art1.jpg" short="akdsljfg ajngjakngjka a gjanregan arjgnaejg arneuanae ,asdiawg kajriegjfdg kasjirngakjg asgnakjngr ajgnrjnga"></Shortcut></Link>
        <Link to="/"><Shortcut parentClass="shortcut" title="badania projektowe" img="./img/art1.jpg" short="akdsljfg ajngjakngjka a gjanregan arjgnaejg arneuanae ,asdiawg kajriegjfdg kasjirngakjg asgnakjngr ajgnrjnga"></Shortcut></Link>
        <Link to="/employees"><Shortcut parentClass="shortcut" title="o personelu " img="./img/art1.jpg" short="akdsljfg ajngjakngjka a gjanregan arjgnaejg arneuanae ,asdiawg kajriegjfdg kasjirngakjg asgnakjngr ajgnrjnga"></Shortcut></Link>
        <Link to="/gallery"><Shortcut  parentClass="shortcut" title="galeria" img="./img/art1.jpg" short="akdsljfg ajngjakngjka a gjanregan arjgnaejg arneuanae ,asdiawg kajriegjfdg kasjirngakjg asgnakjngr ajgnrjnga"></Shortcut></Link>
        <Link to="/contact"><Shortcut parentClass="shortcut" title="kontakt" img="./img/art1.jpg" short="akdsljfg ajngjakngjka a gjanregan arjgnaejg arneuanae ,asdiawg kajriegjfdg kasjirngakjg asgnakjngr ajgnrjnga"></Shortcut></Link>
        </div>
        </div>
    }
}
