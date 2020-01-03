import {ADD_JOB_ENTRY, UPDATE_JOB_ENTRY, CANCEL_EDIT_ENTRY, EDIT_JOB_ENTRY, REMOVE_JOB_ENTRY, CLEAR_ALERT_TEXT } from './constants';

const addJobEntry = (dispatch, payload) => {
    return dispatch({
        type : ADD_JOB_ENTRY,
        payload
    })
}

const updateJobEntry = (dispatch, payload) => {
    return dispatch({
        type : UPDATE_JOB_ENTRY,
        payload
    })
}

const editJobEntry = (dispatch, payload) => {
    console.log("Payload in action", payload);
    return dispatch({
        type : EDIT_JOB_ENTRY,
        payload
    })
}

const removeJobEntry = (dispatch, payload) => {    
    return dispatch({
        type : REMOVE_JOB_ENTRY,
        payload
    })
}

const cancelEditEntry = {    
    type : CANCEL_EDIT_ENTRY        
}


const clearAlertText = ({    
  type : CLEAR_ALERT_TEXT          
})

export {addJobEntry, updateJobEntry, cancelEditEntry, editJobEntry, removeJobEntry, clearAlertText}