
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header";
import GalleryList from "../GalleryList/GalleryList";
// import responseList from "../GalleryList/GalleryList";


function App() {



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

  return (
    <div data-testid="app" className="app">
      <Header />


      <GalleryList images={images} setImages={setImages} />

    </div>
  );
}

export default App;
