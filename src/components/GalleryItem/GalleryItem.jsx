import axios from "axios";
import {useState} from 'react';



export default function GalleryItem({ image })  {
    const [toggleImgDesc, setToggleImgDesc] = useState('')
    console.log("image:", image)
    // console.log("In gallery:",gallery?.id);
    const addLike = (event, id)=>{
        console.log("hey you clicked the add like button")
        axios.put(`/api/gallery/like/${image?.id}`)
        .then((response) => {
            console.log("Inside add like in gallery comp. response:", response);
            setToggleImgDesc();
        })
        .catch((err) => {
            console.log("we got an error in here in GalleryItem component.");
            console.error(err);
        })
    }
    console.log ("in galleryItem",{})
    return (
        <>
        <h2>Gallery goes here!</h2>
        
        
            <p>{image.id}</p>
            <img src={image.url}/>
            <p>{image.description}{image.likes}</p>
            <button onClick={addLike}>Add like!</button>
            
        </>
     );
}
