// create your App component here
import React, { useState, useEffect} from "react";


function App() {
const [img, setImg] = useState([]);
const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
        setImg(data.message);
        setIsLoaded(true);
    });
}, []);
if (!isLoaded) return <p>Loading...</p>;

return(
    <div>
        <img src={img} alt="A Random Dog"></img>
    </div>
)

}






export default App;