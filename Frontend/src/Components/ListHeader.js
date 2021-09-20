import React, { Component } from 'react';
import './CSS/ListHeader.css';
import Label from './Label';

export default class ListHeader extends Component {
    render() {
        return (
            <div id = "header-container">
                <Label
                    flex={1}
                    text={"Tipo"}/>
                <Label
                    flex={1}
                    text={"Monto"}/>        
                <Label
                    flex={1}
                    text={"Fecha"}/>
                <Label
                    flex={1}
                    text={"Concepto"}/>
            </div>
        );
    }
}