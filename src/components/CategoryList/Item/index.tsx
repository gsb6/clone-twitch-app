import React from 'react';
import { Text } from 'react-native';

import data from '../data';

import * as S from './styles';

type Props = {
  item: typeof data[0];
};

const Item: React.FC<Props> = ({ item }) => {
  return (
    <S.Container>
      <S.Image source={item.source} />
      <S.Name numberOfLines={1}>{item.name}</S.Name>
      <S.Status>
        <S.RedCircle />
        <S.Watchers>51.9K</S.Watchers>
      </S.Status>
    </S.Container>
  );
};

export default Item;
