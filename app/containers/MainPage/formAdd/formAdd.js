import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Card } from 'reactstrap';

export default class FormAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            sobrenome: '',
            CEP: '',
            email: ''
        };
        
        this.onChange = this.onChange.bind(this);
    }
    
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <Row>
            <Col></Col>
            <Col>
            <Card>
            <Form>
            <div className="text-center">Envie o seu tambem!!</div>
            <FormGroup className="text-center">
            <Label for="nome">Nome</Label>
            <Input type="nome" name="nome" onChange={this.onChange} value={this.state.title} id="exampleEmail" placeholder="Nome" />
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
            <Label for="Email">Email</Label>
            <Input type="email" name="Email" onChange={this.onChange} value={this.state.title} id="Email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
            <Button color="primary" type="submit" size="lg" block>Enviar</Button>
            </FormGroup>
            </Form>
            </Card>
            </Col>
            <Col></Col>
            </Row>
        )
    }
}