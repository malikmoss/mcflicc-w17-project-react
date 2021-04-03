import React, { useState, useEffect } from "react";
import './ExplorePage.css'
import {useSelector, useDispatch} from 'react-redux'
import {getPhotos, getPhoto} from "../../store/photo";
import {Redirect, useHistory} from 'react-router-dom';

function ExplorePage() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const photos = useSelector(state => state.photos ? Object.values(state.photos) : null)
    useEffect(()=>{
        if(user) {dispatch(getPhotos(user.id))}
    }, [dispatch, user])

    useEffect(()=>{
        dispatch(getPhoto())
    },[dispatch])


    const history = useHistory();
    // console.log(photos)
     if (!photos) return null;

     return ( 
      <div className="photos-main">
      <div className="explore-container">
       {photos.map(photo =>
            <img src={photo.photoURL} />
            /* <img src='https://thezebra.org/wp-content/uploads/2020/07/Training-Time-Aug2020-GR-with-ball-scaled.jpg' /> */
            
            )}
      </div>
      </div>
   )
}

export default ExplorePage;