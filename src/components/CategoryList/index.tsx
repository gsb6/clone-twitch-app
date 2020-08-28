import React from 'react';
import { Text } from 'react-native';

import data from './data';
import Item from './Item';

import * as S from './styles';

const CategoryList: React.FC<Props> = () => {
  return (
    <S.Container>
      {data.map((item) => (
        <Item key={item.name} item={item} />
      ))}
    </S.Container>
  );
};

export default CategoryList;
