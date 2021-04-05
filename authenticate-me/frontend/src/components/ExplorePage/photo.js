import React from 'react';
import { Link } from 'react-router-dom';
import './../ExplorePage/ExplorePage.css'

const PhotoItem = props => {
    const photoURL = props.photo.photoURL;
    
    return (
        <div className="photos-item">
            <Link to={`/photos/${props.photo.id}`}>
                <img className="photo-img" src={photoURL} alt=""/>
            </Link>
        </div>
    );
}

export default PhotoItem;