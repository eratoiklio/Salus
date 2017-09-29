import React from 'react';
import ReactDOM from 'react-dom';
import {HashLink as Link} from 'react-router-hash-link';
import MediaQuery from 'react-responsive';

class NavList extends React.Component
{

    render()
    {
        return (
            <ul className={this.props.class}>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/">misja</Link>
                </li>
                <li>
                    <Link to="/">oferta</Link>
                </li>
                <li>
                    <Link to="/employees">personel</Link>
                </li>
                <li>
                    <Link to="/">badania projektowe</Link>
                </li>
                <li>
                    <Link to="/gallery">galeria</Link>
                </li>
                <li>
                    <Link to="/contact">kontakt</Link>
                </li>
            </ul>
        )
    }
}
class HeaderMenu extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            clicked: false
        }
    }
    handleClick=()=>{
        this.setState({clicked: !this.state.clicked});
        console.log(this.state.clicked);
    }
    render()
    {

        return (
            <div className="container">
            <div className="menuContainer">
                <div className="headerMenu">
                    <MediaQuery maxDeviceWidth={884}>
                        <div id="hamburger" onClick={this.handleClick}>&#9776;
                        {this.state.clicked ? <NavList class="phoneMenu"/>: null}
                        </div>
                    </MediaQuery>
                    <MediaQuery minDeviceWidth={884}>
                        <NavList class="desktopMenu"/>
                    </MediaQuery>
                </div>
                </div>
            </div>
        )
    }
}
class Motto extends React.Component
{
    constructor(props)
    {
        super(props);
        this.mottos = ["Wasze bezpieczeństwo jest naszym priorytetem", "Najlepszy sprzęt jest tylko tak dobry jak operator, który go obsluguje"];
        this.state = {
            mottoId: 0,
            motto: this.mottos[1]
        }
    }
    componentDidMount()
    {
        this.idInterval = setInterval(() => {
            this.setState({
                mottoId: (this.state.mottoId + 1) % 2,
                motto: this.mottos[this.state.mottoId]
            })
        }, 5000);
    }
    componentWillUnmount()
    {
        clearInterval(this.idInterval);
    }
    render()
    {
        return (
            <h1 className="banner">{this.state.motto}</h1>
        )
    }
}
class Banner extends React.Component
{
    render()
    {
        //return <div id="bannerSpace" className="container clearfix"><p className="arrow left-arrow"> {"<"} </p><Motto></Motto><p className="arrow right-arrow"> {">"} </p></div>
        return <div id="bannerSpace" className="container">
            <Motto></Motto>
        </div>

    }
}
export default class Header extends React.Component {
    render() {
        const style = {
            // minHeight: '100%',
            // minWidth: '100%',
            width: '100%',
            height: '20rem',
            background: 'green',
            background: 'url("img/header-image.jpg")',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        };

        return (
            <div id="headerSpace" style={style}><HeaderMenu/><Banner/></div>
        );
    }
}
