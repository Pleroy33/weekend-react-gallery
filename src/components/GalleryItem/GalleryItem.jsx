import axios from "axios";
import { useState } from 'react';



export default function GalleryItem({ image, getGallery }) {
    const [toggleImgDesc, setToggleImgDesc] = useState(true)
    console.log("image:", image)
    const addLike = () => {
        console.log("hey you clicked the add like button")
        axios.put(`/api/gallery/like/${image?.id}`)
            .then((response) => {
                console.log("Inside add like in gallery comp. response:", response);
                getGallery();
            })
            .catch((err) => {
                console.log("we got an error in here in GalleryItem component.");
                console.error(err);
            })
    }

    const imageToggle = () => {
        console.log('in toggle click')
        if (toggleImgDesc === true) { setToggleImgDesc(false) }
        else (setToggleImgDesc(true))
    }
    console.log("in galleryItem", {})
    return (
        <>
            <h2>Gallery goes here!</h2>
            <div onClick={imageToggle} data-testid="toggle" >
                {toggleImgDesc ? (
                    <img src={image.url}/>) :
                    (<p data-testid="description">{image.description} </p>
                    )}
            </div>
            <p >{image.likes} Likes</p>
            <button onClick={addLike} data-testid="like">Add like!</button>

        </>
    );
}
