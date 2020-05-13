import React from 'react';
import { Tabs, Form, Button, Select, Checkbox, Input } from 'antd';
import 'antd/dist/antd.css';
// import '.././App.css';
import './tab1.css'

const { Modal } = Tabs;
const { Option } = Select;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 7,
    },
};

class Tab3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cloudEnable: true,
            checkboxSelect: true,
        }
    }

    callback = (key) => {
        console.log(key);
    }

    handleChange = (value) => {
        console.log(value);
        if (value == "Cloud")
            this.setState({ cloudEnable: false })
    }

    onCheckboxSelect = (e) => {
        console.log(`checked = ${e.target.checked}`);
        this.setState({ cloudEnable: !this.state.cloudEnable })

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
                        label="Namespaces"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Admin email required!',
                            },
                        ]}
                    >
                        <Input placeholder="Portworks" id="Portworks" />
                    </Form.Item>

                    <Form.Item
                        label="Kubeconfig Path"
                        name="Kubeconfig Path"

                    >
                        <Input />
                    </Form.Item>

                </Form>
                <h4 style={{ "color": "darkgrey" }}>License Management</h4>

                <hr /><br />

                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item
                        label="Password"
                        name="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Password required!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Confirm Password"
                        name="confirm_Password"
                        rules={[
                            {
                                required: true,
                                message: 'Confirm Password required!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                </Form>

                <h4 style={{ "color": "darkgrey" }}>Centralized Monitoring </h4>

                <hr /><br />

                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                >

                    <Checkbox className="checkBox">Portworks provision storage disks</Checkbox>

                </Form>
                <br />


                <h4 style={{ "color": "darkgrey" }}>Monitoring on PX-Central</h4>

                <hr /><br />

                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                >

                    <Checkbox className="checkBox marginbottom" onChange={this.onCheckboxSelect} >Air-grapped</Checkbox>

                    <Form.Item hidden={this.state.cloudEnable}
                        label="Custom Registry"
                        name="Registry"
                        rules={[
                            {
                                required: true,
                                message: 'Custom Registry required!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item hidden={this.state.cloudEnable}
                        label="Image Repository"
                        name="img_repo"
                        rules={[
                            {
                                required: true,
                                message: 'Image Repository required!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item hidden={this.state.cloudEnable}
                        label="Image Pull Secret"
                        name="img_repo"
                        rules={[
                            {
                                required: true,
                                message: 'Image Pull Secret required!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                </Form>
                <br />
                <hr />

            </div>
        )
    }
};
export default Tab3; 