import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

export default class Jumbo extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
  return (
    <div>
      <Jumbotron className="text-center">
        <h1 className="display-3">Ate logo!</h1>
        <p className="lead">Muito obrigado por acessar minha database!</p>
        <hr className="my-2" />
        <p>Caso queira voltar, clique no botao</p>
        <p className="lead">
          <Button color="primary" href="/main">Voltar</Button>
        </p>
      </Jumbotron>
    </div>
  );
    }
}