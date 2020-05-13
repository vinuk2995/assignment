import React from 'react';
import { Tabs, Button } from 'antd';
import 'antd/dist/antd.css';
import './App.css'
import TAB1 from './Tabs/tab1.js';
import TAB2 from './Tabs/tab2.js';
import TAB3 from './Tabs/tab3.js'
import TAB4 from './Tabs/tab4.js';
import {
    DoubleRightOutlined
  } from '@ant-design/icons';



const { TabPane } = Tabs;

class TableData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            num: "1",
            hideBack: false,
            hideNext: false,

        }
    }

    componentDidMount() {
        if (parseInt(this.state.num) <= 1)
            this.setState({ hideBack: true })
    }

    callback = (key) => {
        console.log(key);
        this.setState({ num: key })

        if (parseInt(key) >= 4)
            this.setState({ hideNext: true })
        else
            this.setState({ hideNext: false })


        if (parseInt(key) <= 1)
            this.setState({ hideBack: true })
        else
            this.setState({ hideBack: false })

    }

    nextbutton = () => {
        var numNext = parseInt(this.state.num) + 1;
        this.setState({ num: numNext.toString(), hideBack: false })

        if (numNext >= 4)
            this.setState({ hideNext: true })
    }

    backbutton = () => {
        var numBack = parseInt(this.state.num) - 1;
        if (numBack <= 1)
            this.setState({ hideBack: true })

        this.setState({ num: numBack.toString(), hideNext: false })
    }

    render() {
        console.log("rowData", this.state.num);
        return (
            <div>
                <h4 style={{ "color": "darkgrey" }}>Backup Using PX_Central</h4>

                <Tabs defaultActiveKey="1" onChange={this.callback} activeKey={this.state.num}>

                    <TabPane tab="Basic" key="1" style={{ "color": "white" }}>
                        <TAB1 />
                    </TabPane>
                    <TabPane tab="Environment" key="2" style={{ "color": "white" }}>
                        <TAB2 />
                    </TabPane>
                    <TabPane tab="Advanced" key="3" style={{ "color": "white" }}>
                        <TAB3 />
                    </TabPane>
                    <TabPane tab="Customize" key="4" style={{ "color": "white" }}>
                        <TAB4 />
                    </TabPane>
                </Tabs>

                <Button className="resetButton">Reset</Button>
                <Button className="backButton" hidden={this.state.hideBack} onClick={this.backbutton} >Back</Button>
                <Button className="nextButton" hidden={this.state.hideNext} onClick={this.nextbutton} htmlType="submit">Next </Button>
                <Button className="nextButton" hidden={!this.state.hideNext} >Finish</Button>
            </div>
        )
    }
};
export default TableData; 