import {csrfFetch}  from "./csrf.js";

const GET_COMMENT = 'GET_COMMENT'
const RECEIVE_ALL_COMMENTS = "RECIEVE_ALL_COMMENTS"
const DELETE_COMMENT = 'DELETE_COMMENT'

const getComment = comment => ({
    type: GET_COMMENT,
    comment: comment
});

const receiveAllComments = comments => ({
    type: RECEIVE_ALL_COMMENTS, 
    comments: comments
});

const deleteComment = (comment) => ({
    type: DELETE_COMMENT,
    commentId: comment.id
});



export default function commentReducer (state = {}, action){
    Object.freeze(oldState);
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