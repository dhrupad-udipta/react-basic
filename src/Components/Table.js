import React, { Component } from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'

class Table extends Component {
    render() {
        const {charactersData,removeEmployee} = this.props
        return (
            <table>
                <TableHead/>
                <TableBody charactersData={charactersData} removeEmployee={removeEmployee}/>
            </table>
        )
    }
}

export default Table