import React, { Component, Fragment } from 'react';
import { Layout } from 'antd';
import JobCard from './jobform/JobCard';

const { Header, Content, Footer  }  = Layout;


class AppLayout extends Component{

    render(){        
        return(  
        <Layout style={{height:"100vh"}}>
            <Header>Header Goes here</Header>
            <Content className="layout-content">
                <JobCard></JobCard>
                {this.props.children}
            </Content>
            <Footer style={{textAlign:'center'}}>Copyright &copy; 2020. All Rights Reserved</Footer>
        </Layout>
        );
    }
}

export default AppLayout;