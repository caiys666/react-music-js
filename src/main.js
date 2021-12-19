import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
// import './index.less';
import 'antd-mobile/es/global'

class FlowComp {
    constructor(options = {}) {
    }
    showFlowBox() {
        try {
            this.insertDom()
        } catch (error) {
            console.log(error)
        }
    }
    insertDom() {
        const template = document.createElement('DIV')
        template.id = 'root'
        document.body.appendChild(template)
        ReactDOM.render(<App />, document.getElementById('root'));
    }
}

const flowComp = function (options = {}) {
    let dataCache = new FlowComp(options)
    return dataCache
}

window.flowComp = flowComp

