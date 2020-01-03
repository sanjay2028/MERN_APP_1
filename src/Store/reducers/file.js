import {FILE_GENERATION_STARTED, FILE_GENERATION_ENDED, FILE_GENERATION_SUCCESS, FILE_GENERATION_FAILED } from '../../actions/constants';

const initialState = [];

const file = (state = initialState, {type, payload=null}) => {

    switch(type){

        case FILE_GENERATION_STARTED:
            console.log("File Generation Started");
            return state;
        case FILE_GENERATION_ENDED:
            console.log("file Generation Ended");
            return state;
        case FILE_GENERATION_SUCCESS:
            console.log("file Generation Succeded");
            return state;
        case FILE_GENERATION_FAILED:
            console.log("file Generation failed");
            return state;
        default:
            return state;
    }

}

export default file;