import React from 'react';
import DataGrid from './dataGrid/dataGrid';
import FormAdd from './formAdd/formAdd';

export default class MainPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div>
            <FormAdd />
            <DataGrid />
            </div>
        );
    }
}