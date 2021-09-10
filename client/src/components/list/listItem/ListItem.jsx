import { Add, ArrowDownwardOutlined, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import React, { Fragment, useState } from 'react';
import "./ListItem.scss";

const ListItem = ({imgSrc, index}) => {

    const [isHovered, setIsHovered] = useState(false);
    const [video, setVideo] = useState(false);

    const handleHoverIn = () =>{
       setIsHovered(true);
       setTimeout(() => {
           setVideo(true)
       }, 500);
    };

    const handleHoverOut = () =>{
        setIsHovered(false);
        setVideo(false)
    };


    const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

    const trailer1 = "/videos/bunny.mp4"

    return (
        <div 
            className="listItem" 
            style={{left: isHovered && index * 225 + index * 2.5}} 
            onMouseEnter={handleHoverIn} 
            onMouseLeave={handleHoverOut}
        >
           {isHovered? 
                <Fragment>
                {video? <video src={trailer1} autoPlay={true} loop /> : <img src={imgSrc} alt="" />}
                
               
                <div className="itemInfo">
                    <div className="icons">
                        {/* <div className="left"> */}
                            <PlayArrow className="icon" />
                            <Add className="icon" />
                            <ThumbUpAltOutlined className="icon" />
                            <ThumbDownOutlined className="icon" />
                        {/* </div> */}
                        {/* <div className="right">
                            <ArrowDownwardOutlined />
                        </div> */}
                    </div>
                    <div className="itemInfoTop">
                    <span>1 hour 14 mins</span>
                    <span className="limit">+16</span>
                    <span>1999</span>
                    </div>
                    <div className="desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.
                    </div>
                    <div className="genre">Action</div>
                </div>
                </Fragment>
           : <img src={imgSrc} /> } 
        </div>
        
    )
}

export default ListItem


// {isHovered ? (
//     <Fragment >
//         <video src={trailer} autoPlay={true} loop />
//         {/* <img src={imgSrc} alt="" /> */}
//         <div className="itemInfo">
//             <div className="icons">
//                 <div className="left">
//                     <PlayArrow className="icon" />
//                     <Add className="icon" />
//                     <ThumbUpAltOutlined className="icon" />
//                     <ThumbDownOutlined className="icon" />
//                 </div>
//                 <div className="right">
//                     <ArrowDownwardOutlined />
//                 </div>
//             </div>
//             <div className="itemInfoTop">
//             <span>1 hour 14 mins</span>
//             <span className="limit">+16</span>
//             <span>1999</span>
//             </div>
//             <div className="desc">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//             Praesentium hic rem eveniet error possimus, neque ex doloribus.
//             </div>
//             <div className="genre">Action</div>
//         </div>
//     </Fragment>
// ): <img src={imgSrc} alt="" />}