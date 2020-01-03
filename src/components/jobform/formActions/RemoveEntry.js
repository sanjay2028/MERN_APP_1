import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { removeJobEntry } from '../../../actions/jobList';

class RemoveEntry extends Component{
    handleClick = (e) => {
        e.preventDefault()
        this.props.removeJobEntry(this.props._key)
    }
    render(){        
        return(
            <a href="#" onClick={this.handleClick}>Delete</a>
        );        
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        removeJobEntry : (payload) => removeJobEntry(dispatch, payload)   
    }    
}

export default connect(null,mapDispatchToProps)(RemoveEntry)

