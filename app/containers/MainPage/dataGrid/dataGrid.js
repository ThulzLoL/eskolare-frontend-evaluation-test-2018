import Faker from 'faker'
import React from 'react';
import PropTypes from 'prop-types';
import ReactDataGrid from 'react-data-grid';
const { Toolbar, Data: { Selectors } } = require('react-data-grid-addons');
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Card } from 'reactstrap';
import { createPost, createTo, createAll } from '../../actions/postActions';
import { connect } from 'react-redux';

class DataGrid extends React.Component {
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
        
        this.state = { 

            nome: '',
            sobrenome: '',
            CEP: '',
            email: '',
            rows: this.createRows(1000), 
            filters: {}, 
            sortColumn: null, 
            sortDirection: null 
        };
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        
        const post = {
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            CEP: this.state.CEP,
            email: this.state.email
        };

        

        this.props.onSubmit(post);

        const post2 = [{
            id: 1,
            Nome: this.state.nome,
            Sobrenome: this.state.sobrenome,
            CEP: this.state.CEP,
            email: this.state.email
        }];

        const currentRow = this.state.rows;
        const newRow = currentRow.pop();
        for(let i in currentRow){
            currentRow[i].id++
        };
        const newRow2 = post2.concat(currentRow); 
        this.setState({ rows: newRow2 })
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
                email: Faker.internet.email(),  
            });
        }
        this.props.createPosts(rows);
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
            <Row>
            <Col></Col>
            <Col>
            <Card>
            <Form onSubmit={this.onSubmit}>
            <div className="text-center">Envie o seu tambem!!</div>
            <FormGroup className="text-center">
            <Label for="nome">Nome</Label>
            <Input type="nome" name="nome" onChange={this.onChange} value={this.state.title} id="nome" placeholder="Nome" />
            </FormGroup>
            <FormGroup className="text-center">
            <Label for="sobrenome">Sobrenome</Label>
            <Input type="sobrenome" name="sobrenome" onChange={this.onChange} value={this.state.title} id="sobrenome" placeholder="Sobrenome" />
            </FormGroup>
            <FormGroup className="text-center">
            <Label for="CEP">CEP</Label>
            <Input type="CEP" name="CEP" onChange={this.onChange} value={this.state.title} id="CEP" placeholder="CEP" />
            </FormGroup>
            <FormGroup className="text-center">
            <Label for="email">Email</Label>
            <Input type="email" name="email" onChange={this.onChange} value={this.state.title} id="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
            <Button color="primary" type="submit" size="lg" block>Enviar</Button>
            </FormGroup>
            </Form>
            </Card>
            </Col>
            <Col></Col>
            </Row>
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

    const MapStateToProps = state => ({
        nome: state.nome,
        sobrenome: state.sobrenome,
        CEP: state.CEP,
        email: state.email,
    });
    const MapActionsToProps = {
        onSubmit: createTo,
        createPosts: createAll
    };

    export default connect(MapStateToProps, MapActionsToProps)(DataGrid);
    
    