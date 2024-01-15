
import { useState, useEffect } from "react";
import axios from "axios";



function App() {

  useEffect(() => {
    fetchGallery();
}, []);

const [gallery, setGallery] = useState([]);

    const fetchGallery = () => {
        console.log("we just fetched all the items from the database");

        axios
            .get("/api/gallery")
            .then((response) => {
                console.log("response.data:", response.data);
                setGallery(response.data);
            })
            .catch((err) => {
                console.log("oops we got an error up in here.");
                console.error(err);
            });
    };



    return (
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
