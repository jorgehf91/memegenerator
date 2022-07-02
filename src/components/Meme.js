import React from "react";
import memeData from "../memesData"

/**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */

export default function Meme (){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImages, setAllMemeImage] = React.useState([])
    
    React.useEffect( () => {
        console.log("call api")
        fetch("https://api.imgflip.com/get_memes")
            .then( res => res.json())
            .then( resjson => setAllMemeImage(resjson.data.memes))
        },
        [meme.randomImage]
    )

    function getRandMeme(){
        const memesArray = allMemeImages
        const randIndex = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randIndex].url

        setMeme( prevMeme => ({
            ...prevMeme, 
            randomImage: url 
        }))
    }

    function handleText (e) {
        const {name, value} = e.target
        setMeme( prevMeme => (
            {
                ...prevMeme,
                [name] : value
            }
        ))
    }
    console.log(meme)

    return (
        <div className="meme">
            <div className="meme--form">
                <input 
                    className="meme--upper" 
                    type="text" 
                    name="topText" 
                    onChange={handleText} 
                    placeholder="top text"
                />
                <input 
                    className="meme--lower" 
                    type="text" 
                    name="bottomText" 
                    onChange={handleText} 
                    placeholder="bottom text"
                />

                <button onClick={getRandMeme} className="meme--submit" type="submit">Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img className="meme--image" src={meme.randomImage} alt="Random meme generated"/>
                <h1 className="meme--text top">{meme.topText}</h1>
                <h1 className="meme--text bottom">{meme.bottomText}</h1>
            </div>
            
        </div>
        
    )
}