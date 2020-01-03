const initialState = {
    
    processing : false,
    error: null    
};


const jobForm = (state=initialState, {type}) => {
    switch(type){ 

        case "START_ADD_ENTRY_PROCESS": 
            return {...state, processing: true}
        
        case "END_ADD_ENTRY_PROCESS": 
            return {...state, processing: false}            
        
        default:
            return state;

    }
}

export default jobForm;