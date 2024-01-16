import {useState, useEffect} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import axios from 'axios';

function GalleryList()   {
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
        <h2>Images go here</h2>
            <div className='galleryList' data-testid="galleryList">
                {images.map((image) => {

                    return (
                    <div className="galleryItem" key={image.id} data-testid="galleryItem">

                    <GalleryItem image={image} key={(image.id)} /></div>);
                })}
            </div>
        </>
    )
}

export default GalleryList