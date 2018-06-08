import Faker from 'faker'
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactDataGrid from 'react-data-grid';
const { Toolbar, Data: { Selectors } } = require('react-data-grid-addons');

export default class DataGrid extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._columns = [
      {
        key: 'id',
        name: 'ID',
        width: 80
      },
      {
        key: 'Nome',
        name: 'Nome',
        filterable: true,
        sortable: true
      },
      {
        key: 'Sobrenome',
        name: 'Sobrenome',
        filterable: true,
        sortable: true
      },
      {
        key: 'CEP',
        name: 'CEP',
        filterable: true,
        sortable: true
      },
      {
        key: 'email',
        name: 'email',
        filterable: true,
        sortable: true
      }
    ];

    this.state = { rows: this.createRows(1000), filters: {}, sortColumn: null, sortDirection: null };
  }
  

  getRandomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
  };

  createRows = (numberOfRows) => {
    let rows = [];
    for (let i = 1; i < numberOfRows; i++) {
      rows.push({
        id: i,
        Nome: Faker.name.firstName(),
        Sobrenome: Faker.name.lastName(),
        CEP: Faker.address.zipCode(),
        email: Faker.internet.email()
      });
    }
    return rows;
  };

  getRows = () => {
    return Selectors.getRows(this.state);
  };

  getSize = () => {
    return this.getRows().length;
  };

  rowGetter = (rowIdx) => {
    const rows = this.getRows();
    return rows[rowIdx];
  };

  handleGridSort = (sortColumn, sortDirection) => {
    this.setState({ sortColumn: sortColumn, sortDirection: sortDirection });
  };

  handleFilterChange = (filter) => {
    let newFilters = Object.assign({}, this.state.filters);
    if (filter.filterTerm) {
      newFilters[filter.column.key] = filter;
    } else {
      delete newFilters[filter.column.key];
    }

    this.setState({ filters: newFilters });
  };

  onClearFilters = () => {
    this.setState({ filters: {} });
  };

  render() {
    return  (
      <div>
        <input type="text"></input>
      <ReactDataGrid
        onGridSort={this.handleGridSort}
        enableCellSelect={true}
        columns={this._columns}
        rowGetter={this.rowGetter}
        rowsCount={this.getSize()}
        minHeight={500}
        toolbar={<Toolbar enableFilter={true}/>}
        onAddFilter={this.handleFilterChange}
        onClearFilters={this.onClearFilters} />
        </div>);
  }
}

