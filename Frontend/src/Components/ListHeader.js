import React, { Component } from 'react';
import './CSS/ListHeader.css';
import Label from './Label';

export default class ListHeader extends Component {
    render() {
        return (
            <div id = "header-container">
                <Label
                    flex={1}
                    color={"blue"}
                    text={"Tipo"}/>
                    <Label
                    flex={1}
                    color={"red"}
                    text={"Monto"}/>        
                    <Label
                    flex={1}
                    color={"black"}
                    text={"Fecha"}/>
                    <Label
                    flex={1}
                    color={"black"}
                    text={"Concepto"}/>
            </div>
        );
    }
}