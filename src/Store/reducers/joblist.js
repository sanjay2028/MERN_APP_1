import {ADD_JOB_ENTRY, EDIT_JOB_ENTRY,CANCEL_EDIT_ENTRY,REMOVE_JOB_ENTRY,SHOW_ENTRY_FORM,HIDE_ENTRY_FORM, CLEAR_ALERT_TEXT } from '../../actions/constants';

const initialState = {
    jobName : null,
    material: null,
    entries: [],
    modalVisibility : false,
    error:null,
    success: null,
    editing : {
        _key : null,
        entry : {}
    } 
};


const jobList = (state=initialState, {type, payload}) => {
    switch(type){        
        case ADD_JOB_ENTRY:   
        let entries = [payload];
        entries = entries.concat(state.entries);
        return Object.assign({}, state, {
            entries : entries,
            success : 'Entry Added successfully'
        });        
        case REMOVE_JOB_ENTRY:
            console.log("Yuor Payload is: ", payload);
            let filteredEntries = state.entries.filter(item => item._key !== payload)                        
            return Object.assign({}, state, {
                entries : filteredEntries,
                success : 'Entry removed successfully'
            });
        case EDIT_JOB_ENTRY:
            let record = state.entries.filter(item => item._key == payload)
            console.log("See record here", record);
            console.log("See Payload here", payload);
            if(record.length > 0){                

                return Object.assign({}, state, {
                    editing : {
                        _key : payload,
                        entry : record.shift()
                    }
                });

            } else {
                return {
                    ...state, error : "Unable to find record"                
                }
            }            
        case CANCEL_EDIT_ENTRY:
            return {
                ...state, editing : {_key : null, entry : {}}                
            }
        case SHOW_ENTRY_FORM:
            return {
                ...state, modalVisibility : true
            }
        case HIDE_ENTRY_FORM:
            return {
                ...state, modalVisibility : false
            }
        case CLEAR_ALERT_TEXT:
            return {
                ...state, success : null
            }
        default:
            return state;
    }
}

export default jobList;