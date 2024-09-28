import React from 'react';

import LikeSVG from './svg/like'
import DislikeSVG from './svg/dislike'


const ErrorButton = ({ click, id, clicked }) => {
    if (clicked === false) {
        return (
            <button className="btn btn-circle btn-error" onClick={() => click(id, null)}>
                <DislikeSVG/>
            </button>
        )
        
    } else {
        return (
            <button className="btn btn-circle btn-error clicked-error-button" onClick={() => click(id, false)}>
                <DislikeSVG/>
            </button>
        )
    }
}

const SuccessButton = ({ click, id, clicked }) => {
    if (clicked === true) {
        return (
            <button className="btn btn-circle btn-success" onClick={() => click(id, null)}>
                <LikeSVG/>
            </button>
        )
        
    } else {
        return (
            <button className="btn btn-circle btn-success clicked-access-button" onClick={() => click(id, true)}>
                <LikeSVG/>
            </button>
        )
    }
}


const Post = ({ id, value, clicked, click }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl post">
            <figure>
                <img
                    src="/mock.png"
                    alt="react logo" 
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{value[0]}</h2>
                <p>{value}</p>
                <div className="card-actions justify-end">

                <ErrorButton click={click} id={id} clicked={clicked}/>
                <SuccessButton click={click} id={id} clicked={clicked}/>

                

                </div>
            </div>
        </div>
  );
};



export default Post;
