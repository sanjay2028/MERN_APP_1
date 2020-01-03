import React from 'react';
import {Modal} from 'antd';
import JobEntryForm from './EntryForm';

const ModalForm = ({title, visible, onCancel,onAddEntry,entry=null }) => 
        <Modal                   
            title={title}
            visible={visible}                
            okText={null}
            footer={null}
            onCancel={onCancel} >
            <JobEntryForm entry={entry} onAddEntry={onAddEntry} cancelTarget={onCancel} />
        </Modal>


export default ModalForm;