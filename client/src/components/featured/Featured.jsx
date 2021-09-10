import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import React from 'react';
import './Featured.scss';


const Featured = ({type}) => {
    return (
        <div className="featured">  
           {type &&  <div className="category">
                <span>{type === "movie" ? "Movies" : "Sermons"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>}
        
            {/* <img
                src="/images/misc/Todd.jpg"
                alt="Pastor Todd"
            /> */}
             <video autoplay muted loop poster="/images/misc/Todd.jpg">
                <source src="/videos/bunny.mp4" type="video/mp4"></source>
            </video>
           
            <div className="info">
                <h1>It's Not Safer in the Shallow</h1>
                <span className="desc">
                Watch Pastor Michael Todd shares a word to challenge and encourage us to go deeper in our walk with God.
                
                </span>
                <div className="buttons">
                    <div className="left">
                        <button className="play">
                            <PlayArrow className="icon" />
                            <span>Play</span>
                        </button>
                        <button className="more">
                            <InfoOutlined className="icon" />
                            <span>More Info</span>
                        </button>
                    </div>
                    <div className="right">
                        <span>Uplifting</span>   
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Featured
