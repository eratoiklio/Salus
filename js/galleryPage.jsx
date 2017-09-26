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
          },
          {
            original: 'http://lorempixel.com/1000/600/nature/2/',
            thumbnail: 'http://lorempixel.com/250/150/nature/2/'
          },
          {
            original: 'http://lorempixel.com/1000/600/nature/3/',
            thumbnail: 'http://lorempixel.com/250/150/nature/3/'
          }
      ]

        return (
        <div>
        <div>Szkolenie 1</div>
        <Gallery images={images}/>
        <div>Szkolenie 2</div>
        <Gallery images={images}/>
        <div>Pokaz</div>
        <Gallery images={images}/>
        </div>)
    }
}
