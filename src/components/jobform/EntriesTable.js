import React, { Component } from 'react';
import { Table } from 'antd';

class EntriesTable extends Component {
    render(){
        const { columns, data } = this.props;        
        return (
            <Table 
                style={{marginTop:"25px", marginBottom:"25px"}} 
                rowKey={record => record._key} 
                dataSource={ data } 
                columns={columns} 
            />
        );
    }
}



export default EntriesTable;