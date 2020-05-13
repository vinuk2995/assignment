import React from 'react';
import {  Form, Button,  Checkbox, Input  } from 'antd';
import 'antd/dist/antd.css';
import './tab1.css';
import {
    CopyOutlined 
  } from '@ant-design/icons';

const { TextArea } = Input;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 7,
    },
};

class Tab4 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cloudEnable: true,
            checkboxSelect: true,
        }
    }

    copyTextAreaData =()=> {
        let textarea = document.getElementById("textarea");
        textarea.select();
        document.execCommand("copy");
      }

    render() {
        return (
            <div>

                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item 
                        label="Copy data"
                        name="copy"
                        
                    >
                        <div className="resultsBarDiv">
                        <TextArea rows={5} id = "textarea"/>
                        <CopyOutlined onClick={this.copyTextAreaData} style = {{marginLeft : "10px"}}/>
                        </div>
                    </Form.Item>

                </Form>
                <br />
                <hr />

            </div>
        )
    }
};
export default Tab4; 