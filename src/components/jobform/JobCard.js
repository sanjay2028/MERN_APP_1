import React, { Component} from 'react';
import { Card, Row, Col, Input, Alert, Button } from 'antd';
import { connect } from 'react-redux';
import JobEntry from './JobEntry';
import EntriesTable from './EntriesTable';
import { columns } from './Columns';
import { clearAlertText } from '../../actions/jobList'
import { generateFile } from '../../actions/file';
import fileService from '../../services/fileService';
class JobCard extends Component{
    generateFile = () => {
        const { entries } = this.props.jobList;    
        this.props.generateFile({entries})
    }
    render(){        
        const {entries, success} = this.props.jobList;        
        const jobAlert = success !== null? <Alert style={{ marginTop: "15px", marginBottom:"15px" }} message={success} closable onClose={this.props.closeAlert} /> : '';
        return (            
            <Card title="Job Card">                
                {jobAlert}
                <Row gutter={16}>
                    <Col span={8}><Input placeholder="Job Name" /></Col>
                    <Col span={8}><Input placeholder="Material" /></Col>                    
                </Row>
                <Row gutter={16}>                    
                    <EntriesTable columns={columns} data={entries} pagination={false} />
                </Row>
                <Row gutter={16}>
                    <Col span={24} style={{textAlign:'right'}}><Button type="primary" icon="download" onClick={this.generateFile}>Download File</Button> &nbsp; <JobEntry /></Col>
                </Row>                
            </Card>
        );
    }
};

const mapStateToProps = ({jobList, file}) => ({
    jobList, file
})

const mapDispatchToProps = (dispatch) => ({
    closeAlert : () => dispatch(clearAlertText),
    generateFile: (payload) => generateFile(dispatch, payload)
})

export default connect(mapStateToProps, mapDispatchToProps)(JobCard);