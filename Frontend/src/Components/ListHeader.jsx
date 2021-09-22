import React, { Component } from 'react';
import './CSS/ListHeader.css';
import Label from './Label.jsx';

export default class ListHeader extends Component {
    render() {
        return (
            <div id = "header-container">
                <Label
                    flex={1}
                    text={"Tipo"}
                    visible={this.props.includeType}/>
                <Label
                    flex={1}
                    text={"Monto"}
                    visible={true}/>        
                <Label
                    flex={1}
                    text={"Fecha"}
                    visible={true}/>
                <Label
                    flex={1}
                    text={"Concepto"}
                    visible={true}/>
            </div>
        );
    }
}