import React from 'react';
import ReactDOM from 'react-dom';
import Shortcut from './shortcut.jsx';
export default class Employees extends React.Component
{
    render()
    {
        return <div className="mainSection">
        <div className="container">
        <Shortcut parentClass="employeesArticle shortcut" insideLink="gallery#gallery3" title="Doświadczenie bojowe" img="img/art1.jpg" short="Doświadczenie bojowe (w zakresie C-IED oraz taktyk specjalnych), w tym z Bliskiego Wschodu i Afganistanu"></Shortcut>
        <Shortcut parentClass="employeesArticle shortcut" title="Ochrona VIP" img="./img/art1.jpg" short="Doświadczenie w ochronie VIP m.in.: Jana Pawła II, Margaret Thatcher, Georga Busha i wielu innych osób"></Shortcut>
        <Shortcut parentClass="employeesArticle shortcut" title="Ochorna obiektów" img="./img/art1.jpg" short="Doświadczenia w ochronie ważnych obiektów np.  Ambasady RP w Kabulu"></Shortcut>
        <Shortcut parentClass="employeesArticle shortcut" title="Uprawnienia instruktorskie" img="./img/art1.jpg" short="Uprawnienia instruktorskie w zakresie działań o charakterze EOD i C-IED/ IEDD"></Shortcut>
        <Shortcut parentClass="employeesArticle shortcut" insideLink="gallery#galleryContainer3" title="Wykształcenie pedagogiczne" img="./img/art1.jpg" short="Wykształcenie i doświadczenie pedagogiczne "></Shortcut>
        <Shortcut parentClass="employeesArticle shortcut" title="Szkolenia" img="./img/art1.jpg" short="Szkoliliśmy m.in. żołnierzy Jednostki GROM, komandosów 1 Pułku Specjalnego w Lublińcu, Żołnierzy  US Army, policjantów pododdziałów antyterrorystycznych i pirotechnicznych"></Shortcut>
        </div>
        </div>
    }
}
