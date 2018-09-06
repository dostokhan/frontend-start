import React, { Component } from 'react';

import Container from 'styled/Container';
import {
  Row,
  Column,
} from 'styled/Responsive';


import KhoborList from './KhoborList/KhoborList';


class Home extends Component {
  render() {
    return (
      <Container>
        <Row wrap="wrap" mb={4}>
          <Column>
            <KhoborList />
          </Column>
        </Row>


      </Container>
    );
  }
}

export default Home;
