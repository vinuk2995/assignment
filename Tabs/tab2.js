import React from 'react';
import { Tabs, Form, Button, Select, Checkbox } from 'antd';
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

class Tab2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cloudEnable: true
        }
    }

    callback = (key) => {
        console.log(key);
    }

    handleChange = (value) => {
        console.log(value);
        if (value == "Cloud")
            this.setState({ cloudEnable: false })
        else
            this.setState({ cloudEnable: true })
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
                        label="Select your environment"
                        name="environment"
                        rules={[
                            {
                                required: true,
                                message: 'Admin email required!',
                            },
                        ]}
                    >
                        <Select defaultValue="On-Prem" onChange={this.handleChange} >
                            <Option value="On-Prem">On-Prem</Option>
                            <Option value="Cloud">Cloud</Option>

                        </Select>
                    </Form.Item>

                    <Form.Item hidden={this.state.cloudEnable}
                        label="Choose your cloud infrastructure"
                        name="infrastructure"
                        rules={[
                            {
                                required: true,
                                message: 'PX-Central required!',
                            },
                        ]}

                    >
                        <Select defaultValue="GCP" style={{ backgroundColor: "black" }}>
                            <Option value="GCP">GCP</Option>
                            <Option value="AWS">AWS</Option>
                            <Option value="Azure">Azure</Option>
                            <Option value="vSphere">vSphere</Option>
                            <Option value="IBM">IBM</Option>

                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Choose your kubernetes provider"
                        name="kubernetes_provider"
                        rules={[
                            {
                                required: !this.state.cloudEnable,
                                message: 'PX-Central required!',
                            },
                        ]}

                    >
                        <Select defaultValue="Other" style={{ backgroundColor: "black" }}>
                            <Option value="Other">Other</Option>
                            <Option value="Cloud">Cloud</Option>

                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="PX-Central Endpoint"
                        name="PX-Central"

                    >
                        <Select defaultValue="auto" style={{ backgroundColor: "black" }}>
                            <Option value="auto">Auto-Generated</Option>
                            <Option value="lucy">Lucy</Option>

                        </Select>
                    </Form.Item>

                    <Checkbox className="checkBox">Ingress Controller</Checkbox>

                </Form>

                <h4 style={{ "color": "darkgrey" }}>Disk Provisioning</h4>

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
                <hr />

            </div>
        )
    }
};
export default Tab2; 