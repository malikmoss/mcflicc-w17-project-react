import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import {createPhoto} from "../../store/photo";
import {useSelector} from "react-redux";
import {useHistory} from 'react-router-dom'

const FileUpload = ({setShowModal}) => {
    const user = useSelector((state) => state.session.user)
    const dispatch = useDispatch()
    const history = useHistory()
    const [image, setImage] = useState(null)
    console.log(createPhoto, "!!!")

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPhoto(user.id, image))
        setShowModal(false)
        history.push('/explore')
    }

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setImage(file);
      };

    return (
        <>
        <div className="upload-box">File Upload</div>
        <form onSubmit= {handleSubmit}>
            <input type="file" onChange={updateFile}/>
            <button type="submit">Upload</button>
        </form>
        </>
    )
}


export default FileUpload;