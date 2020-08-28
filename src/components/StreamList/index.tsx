import React from 'react';

import Item from './Item';

import { Container } from './styles';

const StreamList: React.FC = () => {
  return (
    <Container>
      <Item />
      <Item />
      <Item />
    </Container>
  );
};

export default StreamList;
