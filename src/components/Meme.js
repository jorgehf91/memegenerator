import React from "react";
import memeData from "../memesData"

 /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */
    

export default function Meme (){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImages, setAllMemeImage] = React.useState(memeData);


    function getRandMeme(){
        const memesArray = allMemeImages.data.memes;
        const randIndex = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randIndex].url;

        setMeme( prevMeme => ({
            ...prevMeme, 
            randomImage: url 
        }))
    }

    return (
        <div className="meme">
            <div className="meme--form">
                <input className="meme--upper" type="text" name="caption-upper" placeholder="top text"/>
                <input className="meme--lower" type="text" name="caption-lower" placeholder="bottom text"/>

                <button onClick={getRandMeme} className="meme--submit" type="submit">Get a new meme image 🖼</button>
            </div>
            <img className="meme--image" src={meme.randomImage} alt="Random meme generated"/>
        </div>
        
    );
}