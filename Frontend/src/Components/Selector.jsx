import React, { Component } from 'react';
import './CSS/Selector.css';

export default class Selector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        };

        this.renderOptions = this.renderOptions.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    renderOptions(){
        console.log(this.props.options);
        return this.props.options.map(op => {
            return (
                <option value={op.value}>{op.label}</option>
            )
        })
    }

    handleChange(event){
        this.setState({value : parseInt(event.target.value)})
        console.log(event.target.value)
        this.props.context.setState({typeId : parseInt(event.target.value)})
    }

    render() {
        return (
            <select id = "select" value={this.state.value} onChange={(event) => this.handleChange(event)}>
                {this.renderOptions()}
            </select>
        );
    }
}