import axios from "axios";
export default function GalleryItem({ image, setImages })  {
    // {id, url, title, description, likes}
    console.log("image:", gallery)
    // console.log("In gallery:",gallery?.id);
    const addLike = ()=>{
        console.log("hey you clicked the add like button")
        axios.put(`/api/gallery/like/${image?.id}`)
        .then((response) => {
            console.log("Inside add like in gallery comp. response:", response);
            setImages();
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
        
        
            <p>{image?.id}</p>
            <p>{image?.url}{image?.description}{image?.likes}</p>
            <button onClick={addLike}>Add like!</button>
            
        </>
     );
}
