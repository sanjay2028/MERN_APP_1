import {START_ADD_ENTRY_PROCESS, END_ADD_ENTRY_PROCESS, SHOW_ENTRY_FORM, HIDE_ENTRY_FORM } from './constants';

const startAddEntry =  {
    type : START_ADD_ENTRY_PROCESS
}


const endAddEntry = {
    type : END_ADD_ENTRY_PROCESS
}

const showModal = {
    type : SHOW_ENTRY_FORM
}

const hideModal = {
    type : HIDE_ENTRY_FORM
}


export {startAddEntry , endAddEntry, hideModal, showModal}