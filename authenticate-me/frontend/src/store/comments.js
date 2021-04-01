import {csrfFetch}  from "./csrf.js";

const GET_COMMENT = 'GET_COMMENT'
const RECEIVE_ALL_COMMENTS = "RECIEVE_ALL_COMMENTS"
const DELETE_COMMENT = 'DELETE_COMMENT'

const getComment = comment => ({
    type: GET_COMMENT,
    payload: comment
});

const receiveAllComments = comments => ({
    type: RECEIVE_ALL_COMMENTS, 
    payload: comments
});

const deleteComment = (comment) => ({
    type: DELETE_COMMENT,
    payload: comment.id
});

export const createComment = (authorId, body) => async(dispatch) => {
    const formData = new FormData()
    formData.append("authorId", authorId)
    formData.append("body", body)

    const res = await csrfFetch('/api/explore/photo', {
        method: "POST",
        headers: {"Content-Type": "multipart/form-data"},
        body: formData
    })
    const data = await res.json();
    dispatch(getComment(data))
}



export default function commentReducer (state = {}, action){
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case GET_COMMENT:
            newState = Object.assign({}, state, { [action.comment.id]: action.comment } );
            return newState;
        case RECEIVE_ALL_COMMENTS:
            return action.comments;
        case DELETE_COMMENT:
            newState = Object.assign({}, state);
            delete newState[action.comment.id];
            return newState;
        default:
            return state;
    }
};