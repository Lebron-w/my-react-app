import React, {Component}from 'react';
import './nav.css';
let style1 = {
    color:"blue"
}
let arr = [
    <div>1</div>,
    <div>2</div>
]
export default class Nav extends Component {
    constructor () {
        super()
        this.state = {
            time:new Date()
        }
    }
    render () {
        return (
            <div>
                <div className="color">{arr}</div>
                {/* 注释 */}
                <div>qwewqe {this.props.navId}</div>
                <div style={style1}>style</div>
            </div>
        )
    }
}