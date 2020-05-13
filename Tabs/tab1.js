import React from 'react';
import { Tabs, Input, Form, Button } from 'antd';
import 'antd/dist/antd.css';
// import '.././App.css';
import './tab1.css'

const { Modal } = Tabs;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 7,
    },
};


class Tab1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    callback = (key) => {
        console.log(key);
    }

    render() {
        return (
            <div>
                <h4 style={{ "color": "darkgrey" }}>PX-Backup Configuration</h4>

                <hr /><br />

                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item
                        label="Organization Name (for PX-Backup)"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Organization Name required!',
                                
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="PX-Central Cluster Name"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'PX-Central required!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                </Form>


                <h4 style={{ "color": "darkgrey" }}>OIDC Configuration</h4>

                <hr /><br />

                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item
                        label="Admin email"
                        name="adminEmail"
                        rules={[
                            {
                                required: true,
                                message: 'Admin email required!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Admin username"
                        name="adminUsername"
                        rules={[
                            {
                                required: true,
                                message: 'Admin username required!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        label="Admin Password"
                        name="adminPass"
                        rules={[
                            {
                                required: true,
                                message: 'Admin Password required!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Confirm admin Password"
                        name="adminPassConfirm"
                        rules={[
                            {
                                required: true,
                                message: 'Confirm admin Password required!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    
                </Form>

                <hr />

                
            </div>
        )
    }
};
export default Tab1; 