import { useState, useEffect } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import axios from 'axios';

function GalleryList() {
    console.log('in GalleryList')
    const [images, setImages] = useState([]);

    const getGallery = () => {
        console.log("we just fetched all the items from the database");

        axios
            .get("/api/gallery")
            .then((response) => {
                console.log("response.data:", response.data);
                setImages(response.data);
            })
            .catch((err) => {
                console.log("oops we got an error up in here.");
                console.error(err);
            });
    };


    useEffect(() => {
        getGallery();
    }, []);







    console.table("in GalleryList", images)
    return (
        <>
            {/* <h2>Images go here</h2> */}

            {images.map((image) => {

                return (


                    <GalleryItem data-testid="galleryItem" getGallery={getGallery} image={image} key={image.id} />);
            })}

        </>
    )
}

export default GalleryList