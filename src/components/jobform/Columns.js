import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { Divider } from 'antd';
import RemoveEntry from './formActions/RemoveEntry';
import EditEntry from './formActions/EditEntry';

const columns = [
    { title:    "Cab", dataIndex : 'cab', key : 'cab'}, 
    { title:    'Width',dataIndex: 'width',key: 'width'}, 
    { title:    "Height",dataIndex: 'height','key': 'height'}, 
    { title:    "Depth",dataIndex: 'depth',    key: 'depth'}, 
    { title:    'Hinge Side',dataIndex: 'hingeSide',key: 'hingeSide'},
    { title:    "Finished End?",dataIndex: 'isFinishedEnd',key: 'isFinishedEnd'},
    { title:    "Quantity",dataIndex: 'quantity',key: 'quantity'}, 
    { title :   'Action',key: 'action',
                render: (text, record) => {                    
                    return (
                        <span>
                            <RemoveEntry _key={record._key}>Delete</RemoveEntry> | <EditEntry _key={record._key} />
                        </span>
                    
                    )
                }
                 
    }
];

export { columns}