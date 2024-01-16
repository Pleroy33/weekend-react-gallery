import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
// import axios from 'axios';

function GalleryList({ images, setImages }) {





    console.table("in GalleryList", images)
    return (
        <>
        <h2>Images go here</h2>
            <div className='galleryList' data-testid="galleryList">
                {images.map((image) => {
                    <div className="galleryItem" key={image.id} data-testid="galleryItem">

                    <GalleryItem image={image} setImages={setImages} /></div>
                })}
            </div>
        </>
    )
}

export default GalleryList