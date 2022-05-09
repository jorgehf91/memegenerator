import React from "react";

export default function Meme (){
    return (
        <div className="meme">
            <form className="meme--form">
                <input className="meme--upper" type="text" name="caption-upper" placeholder="top text"/>
                <input className="meme--lower" type="text" name="caption-lower" placeholder="bottom text"/>

                <button className="meme--submit" type="submit">Get a new meme image 🖼</button>
            </form>
        </div>
        
    );
}