import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'antd';
import JobEntryForm from './EntryForm';
import {startAddEntry , endAddEntry, hideModal, showModal} from '../../actions/jobForm';
import {addJobEntry , removeJobEntry} from '../../actions/jobList';
import ModalForm from './ModalForm';

class JobEntry extends Component{    

    handleOk = () => {
        console.log("Handle Okay")
    }

    handleCancel = () => {
        console.log("handleCancel")
    }

    handleJobEntry = (data) => {                
        this.props.startAddEntry();    
        this.props.addJobEntry(data);        
        this.props.hideModal();
        this.props.endAddEntry();    
    }
    
    render(){                
        return (
            <Fragment>
                <Button style={{marginTop:'15px'}} icon="plus" type="primary" onClick={this.props.showModal}>Add New Entry</Button>   
                <ModalForm 
                    title="Create a new collection"
                    visible={this.props.modalVisibility}
                    onCancel={this.props.hideModal}
                    onAddEntry={this.handleJobEntry}
                />                
            </Fragment>                       
        );
    }

}


const mapStateToProps = ({jobList}) => {
    return {        
        modalVisibility : jobList.modalVisibility
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addJobEntry     : (payload) => addJobEntry(dispatch, payload),
        removeJobEntry  : (payload) => removeJobEntry(dispatch, payload),
        startAddEntry   : () => dispatch(startAddEntry),
        endAddEntry     : () => dispatch(endAddEntry),
        showModal       : () =>  dispatch(showModal),
        hideModal       : () =>  dispatch(hideModal),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobEntry);