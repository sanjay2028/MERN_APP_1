import {FILE_GENERATION_STARTED, FILE_GENERATION_ENDED, FILE_GENERATION_SUCCESS, FILE_GENERATION_FAILED } from './constants';
import fileService from '../services/fileService';

const startFileGeneration = {
    type : FILE_GENERATION_STARTED,    
}

const endFileGeneration = {
    type : FILE_GENERATION_ENDED,    
}

const successFileGeneration = {
    type : FILE_GENERATION_SUCCESS,    
}

const failedFileGeneration = {
    type : FILE_GENERATION_FAILED,    
}

export const generateFile =  (dispatch, payload) => {
    dispatch(startFileGeneration);
    fileService.create(payload).then(data => {
        dispatch(endFileGeneration);  
        console.log(data);
    }).catch(error => {
        dispatch(failedFileGeneration);
        console.log(error);
    })
}