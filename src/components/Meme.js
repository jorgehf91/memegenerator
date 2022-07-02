import React from "react";
import memeData from "../memesData"

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
        const randIndex = Math.floor(Math.random() *  allMemeImages.length)
        const url =  allMemeImages[randIndex].url

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