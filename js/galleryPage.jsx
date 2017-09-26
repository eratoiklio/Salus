import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './gallery.jsx';

export default class GalleryPage extends React.Component
{
    render()
    {


        const images = [
          {
            original: 'http://lorempixel.com/1000/600/nature/1/',
            thumbnail: 'http://lorempixel.com/250/150/nature/1/',
            description: 'opis zdjęcia 1',
            originalClass: 'picture'
          },
          {
            original: 'http://lorempixel.com/1000/600/nature/2/',
            thumbnail: 'http://lorempixel.com/250/150/nature/2/',
            originalClass: 'picture'

          },
          {
            original: 'http://lorempixel.com/1000/600/nature/3/',
            thumbnail: 'http://lorempixel.com/250/150/nature/3/',
            originalClass: 'picture'

          }
      ]

        return (
        <div className="picture">
        <div>Szkolenie 1</div>
        <Gallery images={images} useBrowserFullscreen="false"/>
        <div>Szkolenie 2</div>
        <Gallery images={images} useBrowserFullscreen={false}/>
        <div>Pokaz</div>
        <Gallery images={images} useBrowserFullscreen={false}/>
        </div>)
    }
}
