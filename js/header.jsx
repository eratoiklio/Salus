import React from 'react';
import ReactDOM from 'react-dom';

class HeaderMenu extends React.Component
{
    render()
    {
        return(
            <div  className="container">
                <ul className="headerMenu clearfix">
                    <li><a href="http://thecodinglove.com/">misja</a></li>
                    <li><a href="#2">oferta</a></li>
                    <li><a href="#3">personel</a></li>
                    <li><a href="#4">badania projektowe</a></li>
                    <li><a href="#5">galeria</a></li>
                    <li><a href="#6">kontakt</a></li>
                </ul>
            </div>
        )
    }
}
class Motto extends React.Component
{
    constructor(props)
    {
        super(props);
        this.mottos=["wasze bezpieczeństwo jest naszym priorytetem","najlepszy sprzęt jest tylko tak dobry jak operator, który go obsluguje"];
        this.state=
        {
            mottoId:0,
            motto:this.mottos[1]
        }
    }
    componentDidMount()
    {
        this.idInterval=setInterval(()=>{
            this.setState({mottoId: (this.state.mottoId+1)%2, motto:this.mottos[this.state.mottoId]})},5000);
    }
    componentWillUnmount()
    {
        clearInterval(this.idInterval);
    }
    render()
    {
        return(<h1 className="banner">{this.state.motto}</h1>)
    }
}
class Banner extends React.Component
{
    render()
    {
        //return <div id="bannerSpace" className="container clearfix"><p className="arrow left-arrow"> {"<"} </p><Motto></Motto><p className="arrow right-arrow"> {">"} </p></div>
        return <div id="bannerSpace" className="container"><Motto></Motto></div>

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

        return (
            <div style={style}><HeaderMenu/><Banner/></div>
        );
    }
}
