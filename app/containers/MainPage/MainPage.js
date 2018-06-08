import React from 'react';
import DataGrid from './dataGrid/dataGrid'

export default class MainPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
      return (
          <div>
              <DataGrid />
              </div>
      );
    }
  }