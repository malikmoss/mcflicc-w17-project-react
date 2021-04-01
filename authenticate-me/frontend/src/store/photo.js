import { csrfFetch } from './csrf';

const UPLOAD_PHOTO = 'UPLOAD_PHOTO'
const GET_PHOTOS = 'GET_PHOTOS'

const setPhoto = (photo) => ({
    type: UPLOAD_PHOTO,
    photo
});

const setPhotos = (photos) => ({
    type: GET_PHOTOS,
    photos
});

export const createPhoto = (authorId, image) => async(dispatch) => {
    const formData = new FormData()
    formData.append("authorId", authorId)
    formData.append("image", image)
    // console.log(image, "!!!")
    const res = await csrfFetch("/api/explore/photo", {
        method: "POST",
        headers: {"Content-Type": "multipart/form-data"},
        body: formData
    })
    const data = await res.json();
    // console.log('DATA!', data)
    dispatch(setPhoto(data))
}

export const getPhotos = ({authorId}) => async(dispatch) => {
    console.log(authorId)
    const res = await csrfFetch(`/api/explore/${authorId}`)
    const data = await res.json();
    dispatch(setPhotos(data))
}

export const getPhoto = () => async(dispatch) => {
    const res = await csrfFetch(`/api/explore`)
    const data = await res.json();
    // console.log('Data!!!', data)
    dispatch(setPhotos(data))
}

export default function reducer(state=null, action){
    switch (action.type) {
        case UPLOAD_PHOTO:
            return {...state, [action.photo.id]:action.photo}
        case GET_PHOTOS:
            let nextState = {...state}
            action.photos.forEach(photo => {
                nextState[photo.id] = photo
            })
            return nextState
        default :
          return state
    }
}