
import React, { Component } from 'react';
import MyQrReader from './MyQrReader';


class NormalScannerControl extends Component {

    constructor(props) {
        super(props);

        this.handleScanClick = this.handleScanClick.bind(this);
        this.handleCloseScanClick = this.handleCloseScanClick.bind(this);
        this.handleScanDataChange = this.handleScanDataChange.bind(this);

        this.state = {
            isScanning: false,
            scanResult: '',
        }
    }

    handleScanClick() {
        this.setState({isScanning: true});
    }

    handleCloseScanClick() {
        this.setState({isScanning: false});
    }

    handleScanDataChange(data) {
        this.setState({ scanResult: data });
    }

    render() {
        let scanButton = null;
        let myQrReader = null;

        if(this.state.isScanning) {
            scanButton = <CloseScanButton onClick={this.handleCloseScanClick}/>;
            myQrReader = <MyQrReader onDataChange={this.handleScanDataChange}/>;
        }else {
            scanButton = <ScanButton onClick={this.handleScanClick}/>;
        }

        let scanString = this.state.scanResult;
        return (
            <div>
                <p>普通二维码扫描</p>
                <p>扫描结果: {scanString}</p>
                {scanButton}
                {myQrReader}
            </div>
        );
    }
}

function ScanButton(props) {
    return (
        <button onClick={props.onClick}>扫描输入 </button>
    );
}

function CloseScanButton(props) {
    return (
        <button onClick={props.onClick}>关闭扫描 </button>
    );
}



export default NormalScannerControl;
