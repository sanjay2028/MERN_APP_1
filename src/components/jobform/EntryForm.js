import React, {Component} from 'react';
import { Form, Input, Select, Button, Row, Col } from 'antd';

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class EntryForm extends Component{

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((error, data) => {
            if(!error){
                let _key = ((Object.values(data)).join("_")).toLowerCase();
                data._key = _key.split(" ").join("_");
                this.props.onAddEntry(data);
                this.props.form.resetFields();
            }
        });        
    }

    componentDidMount(){
        let {entry} = this.props;
        if(entry !== null){
            this.props.form.setFieldsValue(entry);
        }
    }

    render(){
        const { Option } = Select;        
        const { getFieldDecorator } = this.props.form;        
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };
        return(            
            <Form {...formItemLayout} className="job-entry" layout="horizontal" onSubmit={this.handleSubmit}>
                <Form.Item label="Cab" labelAlign="left">
                {
                    getFieldDecorator('cab', {
                        rules: [{
                            required: true, message: 'Required: Enter Cab'
                        }]
                    })(
                        <Select>
                            <Option value={null}>Select Cab</Option>
                            <Option value="Base 2 Door">Base 2 Door</Option>
                            <Option value="Base 1 Door L">Base 1 Door L</Option>
                            <Option value="Base 1 Door R">Base 1 Door R</Option>
                        </Select>
                    )
                }
                </Form.Item>
                <Form.Item label="Width" labelAlign="left">
                    {
                        getFieldDecorator('width', {
                            rules : [{
                                required: true, message: 'Required: Enter Width'
                            }]
                        })(<Input placeholder="Width" />)
                    }
                </Form.Item>
                <Form.Item label="Height" labelAlign="left">
                    {
                        getFieldDecorator('height',{
                            rules: [{
                                required: true, message: 'Required: Enter Height'
                            }]
                        })(<Input placeholder="Height" />)
                    }
                </Form.Item>
                <Form.Item label="Depth" labelAlign="left">
                    {
                        getFieldDecorator('depth', {
                            rules: [{
                                required: true, message: 'Required: Enter Depth'
                            }]
                        })(<Input placeholder="Depth" />)
                    }
                </Form.Item>
                <Form.Item label="Hinge Side" labelAlign="left">
                    {
                        getFieldDecorator('hingeSide', {
                            rules : [{
                                required: true, message:'Required: Select Hinge Side'
                            }]
                        })(
                            <Select>
                                <Option value={null}>Select Hinge Side</Option>
                                <Option value="left">Left</Option>
                                <Option value="right">Right</Option>
                                <Option value="Pair">Pair</Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label="Finished End?" labelAlign="left">
                    {
                        getFieldDecorator('isFinishedEnd', {
                            rules : [{
                                required: true, message: 'Required: Is Finished End?'
                            }]
                        })(
                            <Select>
                                <Option value={null}>Select Option</Option>
                                <Option value="N">No</Option>
                                <Option value="Y">Yes</Option>
                            </Select>
                        )
                    }                    
                </Form.Item>
                <Form.Item label="Quantity" labelAlign="left">
                    {
                        getFieldDecorator('quantity',{
                            rules: [{
                                required: true, message: 'Required: Quantity'
                            }]
                        })(<Input placeholder="Quantity" />)
                    }
                </Form.Item>
                <Row>
                    <Col span={12} style={{textAlign:"right"}}><Button htmlType="submit" type="primary" className="login-form-button">Submit</Button>&nbsp;&nbsp; </Col>
                    <Col span={12}>&nbsp;&nbsp;<Button onClick={() => this.props.cancelTarget() } type="primary" className="login-form-button">Cancel</Button></Col>
                </Row>
                
            </Form>
        );
    }

}

const JobEntryForm = Form.create({ name: 'entryform' })(EntryForm);

export default JobEntryForm;