import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './gallery.jsx';

export default class GalleryPage extends React.Component
{

    render()
    {

        const images = [
            {
                original: './img/photo1.jpg',
                thumbnail: './img/photo2_small.jpg',
                description: 'opis zdjęcia 1',
                originalClass: 'picture'
            }, {
                original: './img/photo2.jpg',
                thumbnail: './img/photo2_small.jpg',
                originalClass: 'picture'

            }, {
                original: './img/photo3.jpg',
                thumbnail: './img/photo3_small.jpg',
                originalClass: 'picture'

            }
        ]

        return (
            <div>
                <div id="galleryContainer1" className='galleryContainer'>
                    <div id="gallery1" className="picture">
                        <div className="galleryTitle">Szkolenie 1</div>
                        <Gallery images={images}/>
                    </div>
                </div>
                <div id="galleryContainer2" className='galleryContainer'>
                    <div id="gallery2" className="picture">
                        <div className="galleryTitle">Szkolenie 2</div>
                        <Gallery images={images}/>
                    </div>
                </div>
                <div  id="galleryContainer1" className='galleryContainer'>
                    <div id="gallery3" className="picture">
                        <div className="galleryTitle">Pokaz</div>
                        <Gallery images={images}/>
                    </div>
                </div>
            </div>
        )
    }
}
